document.addEventListener('DOMContentLoaded', () => {
    // Локализация
    const translations = {
        ru: {
            title: "ИИ-Планировщик задач",
            appName: "ИИ-Планировщик",
            addTasks: "Добавить задачи",
            taskTitlePlaceholder: "Название задачи",
            lowPriority: "Низкая",
            mediumPriority: "Средняя",
            highPriority: "Высокая",
            timeLabel: "⏰ Доступное время:",
            aiInstructionsLabel: "📝 Инструкции для ИИ:",
            aiInstructionsPlaceholder: "Введите особые инструкции для ИИ (например, 'Учитывать перерывы каждые 2 часа')",
            submitTasks: "📅 Получить расписание",
            scheduleTitle: "Расписание и советы",
            errorEmptyTasks: "Заполните все поля задач!",
            errorTimeFormat: "Укажите корректное время!",
            errorApi: "Ошибка при получении расписания. Попробуйте позже.",
            errorInvalidTime: "Некорректное время. Конец должен быть позже начала.",
            errorVpn: "Ошибка API (400). Для пользователей из РФ: включите VPN.",
            warningTitle: "Предупреждение",
            warningVpn: "Для пользователей из РФ: используйте VPN-сервис для стабильной работы.",
            warningAccuracy: "ИИ может выдавать ошибочные ответы. Проверяйте результаты.",
            warningClose: "Понятно",
            warningToggle: "⚠️",
            longGeneration: "⌛ Генерация занимает долгое время",
            loading: "Загрузка...",
            specialLoading: "День защиты проекта!",
            adText: "Посетите By ROlil Studio и попробуйте новые продукты!",
            langRussian: "🇷🇺",
            langEnglish: "🇺🇸",
            themeToggle: "☀️",
            projectDefense: "Надеемся на зачёт!",
            removeTask: "Удалить",
            saveSchedule: "Сохранить",
            tryAgain: "Ещё раз",
            duplicateTask: "Дублировать"
        },
        en: {
            title: "AI Task Planner",
            appName: "AI Planner",
            addTasks: "Add Tasks",
            taskTitlePlaceholder: "Task Title",
            lowPriority: "Low",
            mediumPriority: "Medium",
            highPriority: "High",
            timeLabel: "⏰ Available Time:",
            aiInstructionsLabel: "📝 AI Instructions:",
            aiInstructionsPlaceholder: "Enter specific instructions for the AI (e.g., 'Account for breaks every 2 hours')",
            submitTasks: "📅 Get Schedule",
            scheduleTitle: "Schedule and Tips",
            errorEmptyTasks: "Fill in all task fields!",
            errorTimeFormat: "Specify a valid time!",
            errorApi: "Error fetching schedule. Try again later.",
            errorInvalidTime: "Invalid time. End time must be after start time.",
            errorVpn: "API Error (400). For users in Russia: enable VPN.",
            warningTitle: "Warning",
            warningVpn: "For users in Russia: use a VPN service for stable operation.",
            warningAccuracy: "The AI may provide inaccurate responses. Verify the results.",
            warningClose: "Understood",
            warningToggle: "⚠️",
            longGeneration: "⌛ Generation is taking a long time",
            loading: "Loading...",
            specialLoading: "Project Defense Day!",
            adText: "Visit By ROlil Studio and try new products!",
            langRussian: "🇷🇺",
            langEnglish: "🇺🇸",
            themeToggle: "☀️",
            projectDefense: "Hoping for a pass!",
            removeTask: "Remove",
            saveSchedule: "Save",
            tryAgain: "Try Again",
            duplicateTask: "Duplicate"
        }
    };

    // Настройки рекламного баннера
    const adConfig = {
        text: translations[localStorage.getItem('language') || 'ru'].adText,
        url: "https://t.me/By_RORlil",
        imageUrl: "IMG_20250417_224058_243.jpg"
    };

    const loadingScreen = document.querySelector('.loading-screen');
    const specialLoadingScreen = document.querySelector('.special-loading-screen');
    const taskInput = document.querySelector('.task-input');
    const taskList = document.getElementById('task-list');
    const addTaskBtn = document.getElementById('add-task-btn');
    const shuffleTasksBtn = document.getElementById('shuffle-tasks');
    const submitTasksBtn = document.getElementById('submit-tasks');
    const warningToggleBtn = document.getElementById('warning-toggle');
    const timeStartInput = document.getElementById('time-start');
    const timeEndInput = document.getElementById('time-end');
    const timeDuration = document.getElementById('time-duration');
    const aiInstructionsInput = document.getElementById('ai-instructions');
    const resultSection = document.querySelector('.result');
    const resultCloseBtn = document.getElementById('result-close');
    const scheduleTitle = document.querySelector('.schedule-title');
    const scheduleOutput = document.getElementById('schedule-output');
    const animationOutput = document.getElementById('animation-output');
    const longGenerationText = document.getElementById('long-generation');
    const languageSwitchers = document.querySelectorAll('#language-switcher');
    const themeSwitcher = document.getElementById('theme-switcher');
    const confettiToggle = document.getElementById('confetti-toggle');
    const defenseTextToggle = document.getElementById('defense-text-toggle');
    const adBanner = document.querySelector('.ad-banner');
    const adLink = document.getElementById('ad-link');
    const adImage = document.getElementById('ad-image');
    const adText = document.getElementById('ad-text');
    const warningSection = document.querySelector('.warning');
    const warningCloseBtn = document.getElementById('warning-close');
    const logoText = document.querySelector('.logo-text');
    const projectDefenseText = document.querySelector('.project-defense');
    const saveScheduleBtn = document.getElementById('save-schedule');
    const tryAgainBtn = document.getElementById('try-again');
    const actionButtons = document.querySelector('.action-buttons');

    // Инициализация загрузки
    const today = new Date();
    const isProjectDefenseDay = today.getFullYear() === 2025 && today.getMonth() === 4 && today.getDate() === 6;
    let confettiInterval = null;
    let isConfettiActive = isProjectDefenseDay;
    let isDefenseTextActive = isProjectDefenseDay;

    function startSpecialLoading() {
        const canvas = document.getElementById('special-loading-canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        const particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 5 + 2,
                speedX: Math.random() * 2 - 1,
                speedY: Math.random() * 2 - 1,
                type: Math.random() > 0.5 ? 'star' : 'circle'
            });
        }
        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.x += p.speedX;
                p.y += p.speedY;
                if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
                if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
                ctx.fillStyle = Math.random() > 0.5 ? '#ffd700' : '#007bff';
                if (p.type === 'star') {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y - p.size);
                    for (let i = 0; i < 5; i++) {
                        ctx.lineTo(
                            p.x + Math.cos((18 + i * 72) * Math.PI / 180) * p.size,
                            p.y + Math.sin((18 + i * 72) * Math.PI / 180) * p.size
                        );
                        ctx.lineTo(
                            p.x + Math.cos((54 + i * 72) * Math.PI / 180) * (p.size / 2),
                            p.y + Math.sin((54 + i * 72) * Math.PI / 180) * (p.size / 2)
                        );
                    }
                    ctx.closePath();
                    ctx.fill();
                } else {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
                    ctx.fill();
                }
            });
            requestAnimationFrame(animateParticles);
        }
        animateParticles();
    }

    if (isProjectDefenseDay) {
        loadingScreen.classList.add('hidden');
        specialLoadingScreen.classList.remove('hidden');
        startSpecialLoading();
        projectDefenseText.classList.remove('hidden');
        confettiToggle.classList.remove('hidden');
        defenseTextToggle.classList.remove('hidden');
        confettiToggle.classList.add('active');
        defenseTextToggle.classList.add('active');
        startConfetti();
        setTimeout(() => {
            specialLoadingScreen.classList.add('hidden');
        }, 3000);
    } else {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 2000);
    }

    function startConfetti() {
        if (confettiInterval) return;
        try {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#007bff', '#00d4ff', '#ff4d4d'],
                shapes: ['circle', 'square'],
                gravity: 0.5,
                scalar: 1.2
            });
            confettiInterval = setInterval(() => {
                confetti({
                    particleCount: 50,
                    spread: 50,
                    origin: { y: Math.random() },
                    colors: ['#007bff', '#00d4ff', '#ff4d4d'],
                    shapes: ['circle', 'square'],
                    gravity: 0.5,
                    scalar: 1.2
                });
            }, 3000);
        } catch (e) {
            console.error('Ошибка загрузки эффекта конфетти:', e);
        }
    }

    function stopConfetti() {
        if (confettiInterval) {
            clearInterval(confettiInterval);
            confettiInterval = null;
        }
    }

    confettiToggle.addEventListener('click', () => {
        isConfettiActive = !isConfettiActive;
        confettiToggle.classList.toggle('active', isConfettiActive);
        if (isConfettiActive) {
            startConfetti();
        } else {
            stopConfetti();
        }
    });

    defenseTextToggle.addEventListener('click', () => {
        isDefenseTextActive = !isDefenseTextActive;
        defenseTextToggle.classList.toggle('active', isDefenseTextActive);
        projectDefenseText.classList.toggle('hidden', !isDefenseTextActive);
    });

    // Установка баннера
    adLink.href = adConfig.url;
    adImage.src = adConfig.imageUrl;
    adText.textContent = adConfig.text;

    // Анимация баннера
    const adAnimations = ['animate-glow', 'animate-rotate', 'animate-pulse'];
    let currentAdAnimationIndex = 0;
    function switchAdAnimation() {
        adImage.classList.remove(adAnimations[currentAdAnimationIndex]);
        adText.classList.remove('animate-fade-slide');
        currentAdAnimationIndex = (currentAdAnimationIndex + 1) % adAnimations.length;
        adImage.classList.add(adAnimations[currentAdAnimationIndex]);
        adText.classList.add('animate-fade-slide');
    }
    adImage.addEventListener('animationend', switchAdAnimation);
    setInterval(switchAdAnimation, 10000);
    switchAdAnimation();

    // Инициализация кнопок
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLang = localStorage.getItem('language') || 'ru';
    document.body.classList.add(`${savedTheme}-theme`);
    themeSwitcher.textContent = savedTheme === 'dark' ? translations[savedLang].themeToggle : '🌙';
    languageSwitchers.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === savedLang);
    });

    // Переключение темы
    themeSwitcher.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-theme');
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
        themeSwitcher.textContent = isDark ? translations[localStorage.getItem('language') || 'ru'].themeToggle : '🌙';
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
        document.body.classList.add('fade');
        setTimeout(() => document.body.classList.remove('fade'), 300);
    });

    // Смена языка
    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = translations[lang][key] || translations['ru'][key];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = translations[lang][key] || translations['ru'][key];
        });
        document.querySelectorAll('.priority-btn[data-i18n]').forEach(button => {
            const key = button.getAttribute('data-i18n');
            button.textContent = translations[lang][key] || translations['ru'][key];
        });
        document.title = translations[lang].title || translations['ru'].title;
        adText.textContent = translations[lang].adText;
        localStorage.setItem('language', lang);
        languageSwitchers.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        document.body.classList.add('fade');
        setTimeout(() => document.body.classList.remove('fade'), 300);
        updateTimeDuration();
    }

    languageSwitchers.forEach(btn => {
        btn.addEventListener('click', () => updateLanguage(btn.getAttribute('data-lang')));
    });

    updateLanguage(savedLang);

    // Эффект гармошки для лого
    let isAnimating = false;
    logoText.addEventListener('click', () => {
        if (isAnimating) return;
        isAnimating = true;
        const text = logoText.textContent;
        logoText.innerHTML = text.split('').map((char, i) => `<span class="logo-char" style="animation-delay: ${i * 0.1}s">${char}</span>`).join('');
        logoText.classList.add('shine');
        const chars = logoText.querySelectorAll('.logo-char');
        chars[chars.length - 1].addEventListener('animationend', () => {
            logoText.innerHTML = text;
            logoText.classList.remove('shine');
            isAnimating = false;
        }, { once: true });
    });

    // Добавить новую задачу
    function addTask(title = '', priority = 'средняя') {
        const taskEntry = document.createElement('div');
        taskEntry.className = 'task-entry animate-slide-in';
        taskEntry.setAttribute('draggable', 'true');
        taskEntry.innerHTML = `
            <input type="text" class="task-title" data-i18n-placeholder="taskTitlePlaceholder" placeholder="${translations[savedLang].taskTitlePlaceholder}" value="${title}" required>
            <div class="priority-buttons">
                <button class="priority-btn${priority === 'низкая' ? ' active' : ''}" data-priority="низкая" data-i18n="lowPriority">${translations[savedLang].lowPriority}</button>
                <button class="priority-btn${priority === 'средняя' ? ' active' : ''}" data-priority="средняя" data-i18n="mediumPriority">${translations[savedLang].mediumPriority}</button>
                <button class="priority-btn${priority === 'высокая' ? ' active' : ''}" data-priority="высокая" data-i18n="highPriority">${translations[savedLang].highPriority}</button>
            </div>
            <button class="remove-task-btn" title="${translations[savedLang].removeTask}">🗑️</button>
        `;
        taskList.appendChild(taskEntry);
        attachPriorityListeners(taskEntry);
        attachDragListeners(taskEntry);
        const taskTitle = taskEntry.querySelector('.task-title');
        taskTitle.focus();
    }

    // Инициализация первой задачи
    addTask();

    // Привязка обработчиков для кнопок приоритета
    function attachPriorityListeners(taskEntry) {
        const buttons = taskEntry.querySelectorAll('.priority-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                btn.classList.add('pop');
                setTimeout(() => btn.classList.remove('pop'), 200);
            });
        });
    }

    // Drag-and-drop для задач
    function attachDragListeners(taskEntry) {
        taskEntry.addEventListener('dragstart', (e) => {
            e.target.classList.add('dragging');
            e.dataTransfer.setData('text/plain', '');
        });
        taskEntry.addEventListener('dragend', (e) => {
            e.target.classList.remove('dragging');
        });
        taskEntry.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        taskEntry.addEventListener('drop', (e) => {
            e.preventDefault();
            const dragging = document.querySelector('.dragging');
            if (dragging && dragging !== taskEntry) {
                const allTasks = Array.from(taskList.children);
                const fromIndex = allTasks.indexOf(dragging);
                const toIndex = allTasks.indexOf(taskEntry);
                if (fromIndex < toIndex) {
                    taskList.insertBefore(dragging, taskEntry.nextSibling);
                } else {
                    taskList.insertBefore(dragging, taskEntry);
                }
                dragging.classList.add('animate-slide-in');
                setTimeout(() => dragging.classList.remove('animate-slide-in'), 300);
            }
        });
    }

    // Перемешивание задач
    shuffleTasksBtn.addEventListener('click', () => {
        const tasks = Array.from(taskList.children);
        for (let i = tasks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            taskList.insertBefore(tasks[j], tasks[i + 1]);
        }
        tasks.forEach(task => {
            task.classList.add('animate-slide-in');
            setTimeout(() => task.classList.remove('animate-slide-in'), 300);
        });
    });

    // Контекстное меню
    taskList.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        if (e.target.closest('.task-entry')) {
            const taskEntry = e.target.closest('.task-entry');
            const contextMenu = document.createElement('div');
            contextMenu.className = 'context-menu';
            contextMenu.innerHTML = `
                <div class="context-menu-item" data-action="remove">${translations[savedLang].removeTask}</div>
                <div class="context-menu-item" data-action="duplicate">${translations[savedLang].duplicateTask}</div>
            `;
            document.body.appendChild(contextMenu);
            const x = e.pageX;
            const y = e.pageY;
            const menuWidth = 150;
            const menuHeight = 80;
            contextMenu.style.top = `${Math.min(y, window.innerHeight - menuHeight)}px`;
            contextMenu.style.left = `${Math.min(x, window.innerWidth - menuWidth)}px`;
            contextMenu.classList.add('animate-pop-in');

            const removeMenu = () => {
                contextMenu.classList.add('animate-fade-out');
                setTimeout(() => contextMenu.remove(), 200);
            };

            contextMenu.addEventListener('click', (event) => {
                const action = event.target.getAttribute('data-action');
                if (action === 'remove') {
                    taskEntry.classList.add('animate-slide-out');
                    setTimeout(() => taskEntry.remove(), 300);
                } else if (action === 'duplicate') {
                    const title = taskEntry.querySelector('.task-title').value;
                    const priority = taskEntry.querySelector('.priority-btn.active').getAttribute('data-priority');
                    addTask(title, priority);
                }
                removeMenu();
            });

            document.addEventListener('click', removeMenu, { once: true });
        }
    });

    // Удаление задачи
    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-task-btn')) {
            e.target.parentElement.classList.add('animate-slide-out');
            setTimeout(() => e.target.parentElement.remove(), 300);
        }
    });

    // Валидация времени и предпросмотр длительности
    function validateTimeRange(start, end, lang) {
        if (!start || !end) {
            return { valid: false, error: translations[lang].errorTimeFormat };
        }
        const startTime = new Date(`1970-01-01T${start}:00`);
        const endTime = new Date(`1970-01-01T${end}:00`);
        if (startTime >= endTime) {
            return { valid: false, error: translations[lang].errorInvalidTime };
        }
        return { valid: true };
    }

    function updateTimeDuration() {
        const start = timeStartInput.value;
        const end = timeEndInput.value;
        const lang = localStorage.getItem('language') || 'ru';
        if (start && end) {
            const startTime = new Date(`1970-01-01T${start}:00`);
            const endTime = new Date(`1970-01-01T${end}:00`);
            const diffMs = endTime - startTime;
            const hours = Math.floor(diffMs / 3600000);
            const minutes = Math.floor((diffMs % 3600000) / 60000);
            timeDuration.textContent = lang === 'ru' ? `${hours} ч ${minutes} мин` : `${hours} h ${minutes} min`;
            timeDuration.classList.add('animate-pop-in');
            setTimeout(() => timeDuration.classList.remove('animate-pop-in'), 500);
        } else {
            timeDuration.textContent = '';
        }
    }

    timeStartInput.addEventListener('input', updateTimeDuration);
    timeEndInput.addEventListener('input', updateTimeDuration);

    // Кнопка предупреждения
    warningToggleBtn.addEventListener('click', () => {
        warningSection.classList.remove('hidden');
        warningSection.classList.add('animate-pop-in');
    });

    // Закрытие предупреждения
    warningCloseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        warningSection.classList.add('animate-fade-out');
        setTimeout(() => {
            warningSection.classList.add('hidden');
            warningSection.classList.remove('animate-fade-out');
        }, 200);
    });

    // Закрытие окна результата
    resultCloseBtn.addEventListener('click', () => {
        resultSection.classList.add('animate-fade-out');
        setTimeout(() => {
            resultSection.classList.add('hidden');
            resultSection.classList.remove('animate-fade-out');
            actionButtons.classList.add('hidden');
            taskInput.classList.remove('hidden');
            taskInput.classList.add('animate-pop-in');
            setTimeout(() => taskInput.classList.remove('animate-pop-in'), 500);
        }, 200);
    });

    resultSection.addEventListener('click', (e) => {
        if (e.target === resultSection) {
            resultCloseBtn.click();
        }
    });

    // Сохранение расписания
    saveScheduleBtn.addEventListener('click', () => {
        const schedule = scheduleOutput.textContent;
        const blob = new Blob([schedule], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = translations[savedLang].scheduleTitle + '.txt';
        link.click();
        URL.revokeObjectURL(link.href);
        saveScheduleBtn.classList.add('pop');
        setTimeout(() => saveScheduleBtn.classList.remove('pop'), 200);
    });

    // Сброс интерфейса
    tryAgainBtn.addEventListener('click', () => {
        resultSection.classList.add('animate-fade-out');
        setTimeout(() => {
            resultSection.classList.add('hidden');
            actionButtons.classList.add('hidden');
            taskInput.classList.remove('hidden');
            taskList.innerHTML = '';
            addTask();
            timeStartInput.value = '';
            timeEndInput.value = '';
            aiInstructionsInput.value = '';
            scheduleOutput.textContent = '';
            scheduleTitle.classList.add('hidden');
            resultSection.classList.remove('animate-fade-out');
            taskInput.classList.add('animate-pop-in');
            setTimeout(() => taskInput.classList.remove('animate-pop-in'), 500);
        }, 200);
        tryAgainBtn.classList.add('pop');
        setTimeout(() => tryAgainBtn.classList.remove('pop'), 200);
    });

    // Отправка задач к API
    let isSubmitting = false;
    submitTasksBtn.addEventListener('click', async () => {
        if (isSubmitting) return;
        isSubmitting = true;

        const lang = localStorage.getItem('language') || 'ru';

        // Показ предупреждения при первой генерации
        if (!localStorage.getItem('warningShown')) {
            warningSection.classList.remove('hidden');
            warningSection.classList.add('animate-pop-in');
            localStorage.setItem('warningShown', 'true');
            isSubmitting = false;
            return;
        }

        const tasks = Array.from(taskList.children).map((entry, index) => {
            const activePriority = entry.querySelector('.priority-btn.active');
            return {
                title: entry.querySelector('.task-title').value.trim(),
                priority: activePriority ? activePriority.getAttribute('data-priority') : 'средняя'
            };
        });
        const startTime = timeStartInput.value;
        const endTime = timeEndInput.value;
        const aiInstructions = aiInstructionsInput.value.trim();

        // Валидация задач
        if (!tasks.every(task => task.title)) {
            alert(translations[lang].errorEmptyTasks);
            isSubmitting = false;
            return;
        }

        // Валидация времени
        const timeValidation = validateTimeRange(startTime, endTime, lang);
        if (!timeValidation.valid) {
            alert(timeValidation.error);
            isSubmitting = false;
            return;
        }

        // Показ загрузки
        scheduleOutput.classList.add('blur');
        animationOutput.classList.remove('hidden');
        animationOutput.innerHTML = '<div class="loading"><span>.</span><span>.</span><span>.</span></div>';

        // Таймер долгой генерации
        const longGenerationTimeout = setTimeout(() => {
            longGenerationText.classList.remove('hidden');
            resultSection.classList.add('animate-expand');
        }, 15000);

        // Улучшенный промпт
        const taskListText = tasks.map((task, i) => `- ${task.title} (Приоритет: ${task.priority})`).join('\n');
        let prompt = `Ты — профессиональный ИИ-планировщик задач. Твоя цель — создать оптимальное расписание для выполнения задач, учитывая их приоритеты, доступное время и дополнительные инструкции. У меня есть следующие задачи:
${taskListText}
Доступное время: ${startTime} - ${endTime}.
${aiInstructions ? `Дополнительные инструкции: ${aiInstructions}` : 'Без дополнительных инструкций.'}
Правила:
1. Распредели задачи по времени, начиная с задач с высоким приоритетом.
2. Учитывай доступное время и равномерно распределяй задачи, избегая перегрузки.
3. Если указаны перерывы, добавляй их (по умолчанию 10 минут каждые 2 часа, если не указано иное).
4. Каждая задача должна иметь временной интервал (например, 09:00-10:00).
5. Добавь краткий совет в конце, основанный на типе задач (например, рабочие, личные) и их приоритетах.
Формат ответа: обычный текст, без Markdown, используй только символы (-, :, ( )). Ответ должен быть структурированным, кратким и понятным. Пример:
09:00-10:00 Задача 1
10:00-10:30 Задача 2
Совет: Сосредоточьтесь на приоритетных задачах утром.`;

        if (lang === 'en') {
            prompt = `You are a professional AI task planner. Your goal is to create an optimal schedule for completing tasks, considering their priorities, available time, and additional instructions. I have the following tasks:
${taskListText}
Available time: ${startTime} - ${endTime}.
${aiInstructions ? `Additional instructions: ${aiInstructions}` : 'No additional instructions.'}
Rules:
1. Schedule tasks by time, starting with high-priority tasks.
2. Consider the available time and distribute tasks evenly, avoiding overload.
3. If breaks are specified, include them (default: 10 minutes every 2 hours unless otherwise stated).
4. Each task must have a time interval (e.g., 09:00-10:00).
5. Add a brief tip at the end, based on the type of tasks (e.g., work, personal) and their priorities.
Response format: plain text, no Markdown, use only symbols (-, :, ( )). The response must be structured, concise, and clear. Example:
09:00-10:00 Task 1
10:00-10:30 Task 2
Tip: Focus on high-priority tasks in the morning.`;
        }

        try {
            const apiKey = "AIzaSyCUtheYwMYUhwkTjT5avcSGwetGXFqF-f0";
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: prompt
                        }]
                    }]
                })
            });

            clearTimeout(longGenerationTimeout);
            longGenerationText.classList.add('hidden');
            resultSection.classList.remove('animate-expand');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const schedule = data.candidates[0].content.parts[0].text;

            // Успешная анимация
            animationOutput.innerHTML = '<div class="success">✅</div>';
            setTimeout(() => {
                taskInput.classList.add('hidden');
                resultSection.classList.remove('hidden');
                actionButtons.classList.remove('hidden');
                resultSection.classList.add('animate-pop-in');
                scheduleOutput.classList.remove('blur');
                animationOutput.classList.add('hidden');
                scheduleOutput.textContent = schedule;
                scheduleTitle.classList.remove('hidden');
                setTimeout(() => resultSection.classList.remove('animate-pop-in'), 500);
            }, 1000);
        } catch (error) {
            clearTimeout(longGenerationTimeout);
            longGenerationText.classList.add('hidden');
            resultSection.classList.remove('animate-expand');

            let errorMessage, errorSource, errorDetails, animationClass;

            if (error.message.includes('400')) {
                errorMessage = translations[lang].errorVpn;
                errorSource = lang === 'en' ? 'API Access' : 'Доступ к API';
                errorDetails = lang === 'en' ? 'API request failed. For users in Russia, please enable VPN.' : 'Запрос к API не выполнен. Для пользователей из РФ включите VPN.';
                animationClass = 'vpn-error';
                animationOutput.innerHTML = '<div class="vpn-error">⚠️</div>';
            } else {
                errorMessage = translations[lang].errorApi;
                errorSource = lang === 'en' ? 'Unknown API Error' : 'Неизвестная ошибка API';
                errorDetails = error.message;
                animationClass = 'error';
                animationOutput.innerHTML = '<div class="error">❌</div>';
            }

            setTimeout(() => {
                taskInput.classList.add('hidden');
                resultSection.classList.remove('hidden');
                actionButtons.classList.remove('hidden');
                resultSection.classList.add('animate-pop-in');
                scheduleOutput.classList.remove('blur');
                animationOutput.classList.add('hidden');
                scheduleOutput.textContent = lang === 'en' ? `
Error:
- Source: ${errorSource}
- Message: ${errorMessage}
- Details: ${errorDetails}
                ` : `
Ошибка:
- Источник: ${errorSource}
- Сообщение: ${errorMessage}
- Детали: ${errorDetails}
                `;
                scheduleTitle.classList.remove('hidden');
                setTimeout(() => resultSection.classList.remove('animate-pop-in'), 500);
            }, 1000);
        } finally {
            isSubmitting = false;
        }
        submitTasksBtn.classList.add('pop');
        setTimeout(() => submitTasksBtn.classList.remove('pop'), 200);
    });

    // Добавление задачи
    let lastAddTaskTime = 0;
    addTaskBtn.addEventListener('click', () => {
        const now = Date.now();
        if (now - lastAddTaskTime < 500) return; // Защита от двойных кликов
        lastAddTaskTime = now;
        addTask();
        addTaskBtn.classList.add('pop');
        setTimeout(() => addTaskBtn.classList.remove('pop'), 200);
    });
});