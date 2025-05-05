import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";

// Конфигурация Firebase (оставлена для возможного будущего использования)
const firebaseConfig = {
    apiKey: "AIzaSyD8o7Qy-nbdliOLSLJugzJ6cTzleNa8q0o",
    authDomain: "aiplanner-31886.firebaseapp.com",
    projectId: "aiplanner-31886",
    storageBucket: "aiplanner-31886.firebasestorage.app",
    messagingSenderId: "721297878184",
    appId: "1:721297878184:web:20d5281e3e2523a1a5a69d",
    measurementId: "G-7EHQBR6M2B"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

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
            addTaskButton: "➕ Добавить задачу",
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
            longLoading: "Загрузка занимает больше времени...",
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
            addTaskButton: "➕ Add Task",
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
            longLoading: "Loading is taking longer...",
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
    const longLoadingText = document.getElementById('long-loading');
    const typingEffect = document.querySelector('.typing-effect');
    const taskInput = document.querySelector('.task-input');
    const taskList = document.getElementById('task-list');
    const addTaskBtn = document.getElementById('add-task-btn');
    const submitTasksBtn = document.getElementById('submit-tasks');
    const warningToggleBtn = document.getElementById('warning-toggle');
    const timeStartInput = document.getElementById('time-start');
    const timeEndInput = document.getElementById('time-end');
    const timeDuration = document.getElementById('time-duration');
    const aiInstructionsInput = document.getElementById('ai-instructions');
    const resultSection = document.querySelector('.result');
    const scheduleTitle = document.querySelector('.schedule-title');
    const scheduleOutput = document.getElementById('schedule-output');
    const animationOutput = document.getElementById('animation-output');
    const longGenerationText = document.getElementById('long-generation');
    const languageSwitchers = document.querySelectorAll('#language-switcher');
    const themeSwitcher = document.getElementById('theme-switcher');
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

    // Эффект печатания на фоне загрузки
    function startTypingEffect() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
        let text = '';
        const maxLength = 500;
        const typingInterval = setInterval(() => {
            if (text.length < maxLength) {
                text += chars[Math.floor(Math.random() * chars.length)];
                if (Math.random() < 0.2) text += ' ';
                typingEffect.textContent = text;
            } else {
                text = text.slice(-maxLength + 50);
                typingEffect.textContent = text;
            }
        }, 50);
        return typingInterval;
    }

    // Инициализация загрузки
    const typingInterval = startTypingEffect();
    const longLoadingTimeout = setTimeout(() => {
        longLoadingText.classList.remove('hidden');
        loadingScreen.querySelector('.loading-content').classList.add('blink');
    }, 5000);

    // Скрытие экрана загрузки
    setTimeout(() => {
        clearInterval(typingInterval);
        clearTimeout(longLoadingTimeout);
        loadingScreen.classList.add('hidden');
    }, 2000);

    // Проверка даты для эффекта 6 мая 2025
    const today = new Date();
    const isProjectDefenseDay = today.getFullYear() === 2025 && today.getMonth() === 4 && today.getDate() === 6;
    if (isProjectDefenseDay) {
        projectDefenseText.classList.remove('hidden');
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
            setInterval(() => {
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
            console.error('Ошибка загрузки эффекта фейерверков:', e);
        }
    }

    // Установка баннера
    adLink.href = adConfig.url;
    adImage.src = adConfig.imageUrl;
    adText.textContent = adConfig.text;

    // Анимация баннера
    const adAnimations = ['animate-glow', 'animate-rotate', 'animate-pulse'];
    let currentAdAnimationIndex = 0;
    function switchAdAnimation() {
        adBanner.classList.remove(adAnimations[currentAdAnimationIndex]);
        adImage.classList.remove(adAnimations[currentAdAnimationIndex]);
        adText.classList.remove('animate-fade-slide');
        currentAdAnimationIndex = (currentAdAnimationIndex + 1) % adAnimations.length;
        adImage.classList.add(adAnimations[currentAdAnimationIndex]);
        adText.classList.add('animate-fade-slide');
    }
    adBanner.addEventListener('animationend', switchAdAnimation);
    setInterval(() => {
        switchAdAnimation();
    }, 10000);
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
        document.querySelectorAll('.tooltip').forEach(element => {
            const key = element.getAttribute('data-tooltip');
            element.setAttribute('data-tooltip-text', translations[lang][key] || translations['ru'][key]);
        });
        document.title = translations[lang].title || translations['ru'].title;
        adText.textContent = translations[lang].adText;
        localStorage.setItem('language', lang);
        languageSwitchers.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        document.body.classList.add('fade');
        setTimeout(() => document.body.classList.remove('fade'), 300);
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
        setTimeout(() => {
            logoText.classList.add('fade-out');
            setTimeout(() => {
                logoText.innerHTML = text;
                logoText.classList.remove('shine', 'fade-out');
                isAnimating = false;
            }, 300);
        }, 1200);
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
        taskEntry.querySelector('.task-title').focus();
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
                const allEntries = Array.from(taskList.children);
                const fromIndex = allEntries.indexOf(dragging);
                const toIndex = allEntries.indexOf(taskEntry);
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
            contextMenu.style.top = `${e.pageY}px`;
            contextMenu.style.left = `${e.pageX}px`;
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
        if (start && end) {
            const startTime = new Date(`1970-01-01T${start}:00`);
            const endTime = new Date(`1970-01-01T${end}:00`);
            const diffMs = endTime - startTime;
            const hours = Math.floor(diffMs / 3600000);
            const minutes = Math.floor((diffMs % 3600000) / 60000);
            const lang = localStorage.getItem('language') || 'ru';
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
    warningCloseBtn.addEventListener('click', () => {
        warningSection.classList.add('animate-fade-out');
        setTimeout(() => {
            warningSection.classList.add('hidden');
            warningSection.classList.remove('animate-fade-out');
        }, 200);
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
            taskInput.classList.remove('hidden');
            adBanner.style.transform = 'translateY(0)';
            taskList.innerHTML = '';
            addTask();
            timeStartInput.value = '';
            timeEndInput.value = '';
            aiInstructionsInput.value = '';
            scheduleOutput.textContent = '';
            scheduleTitle.classList.add('hidden');
            resultSection.style.transform = 'translateY(0)';
            taskInput.style.opacity = '1';
            taskInput.style.transform = 'scale(1)';
            resultSection.classList.remove('animate-fade-out');
            taskInput.classList.add('animate-pop-in');
            setTimeout(() => taskInput.classList.remove('animate-pop-in'), 500);
        }, 200);
        tryAgainBtn.classList.add('pop');
        setTimeout(() => tryAgainBtn.classList.remove('pop'), 200);
    });

    // Клавиатурная навигация
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && document.activeElement.classList.contains('task-title')) {
            addTask();
        } else if (e.key === 'Enter' && document.activeElement === submitTasksBtn) {
            submitTasksBtn.click();
        }
    });

    // Отправка задач к API
    submitTasksBtn.addEventListener('click', async () => {
        const lang = localStorage.getItem('language') || 'ru';

        // Показ предупреждения при первой генерации
        if (!localStorage.getItem('warningShown')) {
            warningSection.classList.remove('hidden');
            warningSection.classList.add('animate-pop-in');
            localStorage.setItem('warningShown', 'true');
            return;
        }

        const tasks = Array.from(taskList.querySelectorAll('.task-entry')).map(entry => {
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
            return;
        }

        // Валидация времени
        const timeValidation = validateTimeRange(startTime, endTime, lang);
        if (!timeValidation.valid) {
            alert(timeValidation.error);
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

            // Успешная анимация с перемещением
            animationOutput.innerHTML = '<div class="success">✅</div>';
            setTimeout(() => {
                taskInput.style.opacity = '0';
                taskInput.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    taskInput.classList.add('hidden');
                    resultSection.classList.remove('hidden');
                    resultSection.classList.add('animate-expand');
                    resultSection.style.transform = 'translateY(-100px)';
                    adBanner.style.transform = 'translateY(-100px)';
                    scheduleOutput.classList.remove('blur');
                    animationOutput.classList.add('hidden');
                    scheduleOutput.textContent = schedule;
                    scheduleTitle.classList.remove('hidden');
                    setTimeout(() => resultSection.classList.remove('animate-expand'), 500);
                }, 300);
            }, 1000);
        } catch (error) {
            clearTimeout(longGenerationTimeout);
            longGenerationText.classList.add('hidden');
            resultSection.classList.remove('animate-expand');

            let errorMessage, errorSource, errorDetails;

            if (error.message.includes('400')) {
                errorMessage = translations[lang].errorVpn;
                errorSource = lang === 'en' ? 'API Access' : 'Доступ к API';
                errorDetails = lang === 'en' ? 'API request failed. For users in Russia, please enable VPN.' : 'Запрос к API не выполнен. Для пользователей из РФ включите VPN.';
                animationOutput.innerHTML = '<div class="error">❌</div>';
            } else {
                errorMessage = translations[lang].errorApi;
                errorSource = lang === 'en' ? 'Unknown API Error' : 'Неизвестная ошибка API';
                errorDetails = error.message;
                animationOutput.innerHTML = '<div class="error">❌</div>';
            }

            setTimeout(() => {
                taskInput.style.opacity = '0';
                taskInput.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    taskInput.classList.add('hidden');
                    resultSection.classList.remove('hidden');
                    resultSection.classList.add('animate-expand');
                    resultSection.style.transform = 'translateY(-100px)';
                    adBanner.style.transform = 'translateY(-100px)';
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
                    setTimeout(() => resultSection.classList.remove('animate-expand'), 500);
                }, 300);
            }, 1000);
        }
        submitTasksBtn.classList.add('pop');
        setTimeout(() => submitTasksBtn.classList.remove('pop'), 200);
    });

    // Добавление задачи
    addTaskBtn.addEventListener('click', () => {
        addTask();
        addTaskBtn.classList.add('pop');
        setTimeout(() => addTaskBtn.classList.remove('pop'), 200);
    });
});