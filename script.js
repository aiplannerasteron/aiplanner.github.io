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
            longGeneration: "⌛ Генерация занимает долгое время",
            adText: "Посетите By ROlil Studio и попробуйте новые продукты!",
            langRussian: "🇷🇺",
            langEnglish: "🇬🇧",
            themeToggle: "☀️",
            toggleDemo: "Включить демонстрационный режим",
            toggleUser: "Включить пользовательский режим",
            projectDefense: "Надеемся на зачёт!"
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
            longGeneration: "⌛ Generation is taking a long time",
            adText: "Visit By ROlil Studio and try new products!",
            langRussian: "🇷🇺",
            langEnglish: "🇬🇧",
            themeToggle: "☀️",
            toggleDemo: "Enable Demo Mode",
            toggleUser: "Enable User Mode",
            projectDefense: "Hoping for a pass!"
        }
    };

    // Настройки рекламного баннера
    const adConfig = {
        text: translations[localStorage.getItem('language') || 'ru'].adText,
        url: "https://t.me/By_RORlil",
        imageUrl: "IMG_20250417_224058_243.jpg"
    };

    // Демонстрационные данные
    const demoTasks = [
        { title: "Подготовить презентацию", priority: "высокая" },
        { title: "Ответить на письма", priority: "средняя" },
        { title: "Провести встречу", priority: "низкая" }
    ];
    const demoSchedule = `09:00-10:30 Подготовить презентацию
10:30-11:00 Ответить на письма
11:00-12:00 Провести встречу
Совет: Начните с самой важной задачи, чтобы сохранить энергию.`;

    const taskList = document.getElementById('task-list');
    const addTaskBtn = document.getElementById('add-task-btn');
    const submitTasksBtn = document.getElementById('submit-tasks');
    const timeStartInput = document.getElementById('time-start');
    const timeEndInput = document.getElementById('time-end');
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
    const demoToggle = document.querySelector('.demo-toggle');
    const modeToggleBtn = document.getElementById('mode-toggle');
    const projectDefenseText = document.querySelector('.project-defense');
    let isDemoMode = false;

    // Проверка даты для эффекта 6 мая 2025
    const today = new Date();
    const isProjectDefenseDay = today.getFullYear() === 2025 && today.getMonth() === 4 && today.getDate() === 6;
    if (isProjectDefenseDay) {
        projectDefenseText.classList.remove('hidden');
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#007bff', '#00d4ff', '#ff4d4d']
        });
        setInterval(() => {
            confetti({
                particleCount: 50,
                spread: 50,
                origin: { y: Math.random() },
                colors: ['#007bff', '#00d4ff', '#ff4d4d']
            });
        }, 3000);
    }

    // Установка баннера
    adLink.href = adConfig.url;
    adImage.src = adConfig.imageUrl;
    adText.textContent = adConfig.text;

    // Переключение темы
    themeSwitcher.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-theme');
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
        themeSwitcher.textContent = isDark ? translations[localStorage.getItem('language') || 'ru'].themeToggle : '🌙';
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });

    // Загрузка сохраненной темы
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(`${savedTheme}-theme`);
    themeSwitcher.textContent = savedTheme === 'dark' ? translations[localStorage.getItem('language') || 'ru'].themeToggle : '🌙';

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
        document.body.classList.add('language-transition');
        setTimeout(() => document.body.classList.remove('language-transition'), 300);
    }

    languageSwitchers.forEach(btn => {
        btn.addEventListener('click', () => updateLanguage(btn.getAttribute('data-lang')));
    });

    // Загрузка сохраненного языка
    const savedLang = localStorage.getItem('language') || 'ru';
    updateLanguage(savedLang);

    // Анимация сворачивания
    logoText.addEventListener('click', () => {
        document.querySelector('main').classList.toggle('collapsed');
        demoToggle.classList.toggle('hidden');
        if (document.querySelector('main').classList.contains('collapsed')) {
            logoText.classList.add('centered-logo');
        } else {
            logoText.classList.remove('centered-logo');
        }
    });

    // Переключение режимов
    modeToggleBtn.addEventListener('click', () => {
        isDemoMode = !isDemoMode;
        modeToggleBtn.textContent = translations[savedLang][isDemoMode ? 'toggleUser' : 'toggleDemo'];
        if (isDemoMode) {
            enterDemoMode();
        } else {
            enterUserMode();
        }
    });

    // Вход в демонстрационный режим
    function enterDemoMode() {
        taskList.innerHTML = '';
        demoTasks.forEach(task => addDemoTask(task));
        timeStartInput.value = '09:00';
        timeEndInput.value = '12:00';
        aiInstructionsInput.value = translations[savedLang].aiInstructionsPlaceholder;
        adBanner.classList.add('hidden');
        resultSection.classList.remove('hidden');
        scheduleTitle.classList.remove('hidden');
        scheduleOutput.textContent = demoSchedule;
    }

    // Вход в пользовательский режим
    function enterUserMode() {
        taskList.innerHTML = '';
        addTask();
        timeStartInput.value = '';
        timeEndInput.value = '';
        aiInstructionsInput.value = '';
        adBanner.classList.remove('hidden');
        resultSection.classList.add('hidden');
        scheduleTitle.classList.add('hidden');
        scheduleOutput.textContent = '';
    }

    // Добавление демонстрационной задачи
    function addDemoTask(task) {
        const taskEntry = document.createElement('div');
        taskEntry.className = 'task-entry';
        taskEntry.innerHTML = `
            <input type="text" class="task-title" data-i18n-placeholder="taskTitlePlaceholder" value="${task.title}" required>
            <div class="priority-buttons">
                <button class="priority-btn ${task.priority === 'низкая' ? 'active' : ''}" data-priority="низкая" data-i18n="lowPriority">${translations[savedLang].lowPriority}</button>
                <button class="priority-btn ${task.priority === 'средняя' ? 'active' : ''}" data-priority="средняя" data-i18n="mediumPriority">${translations[savedLang].mediumPriority}</button>
                <button class="priority-btn ${task.priority === 'высокая' ? 'active' : ''}" data-priority="высокая" data-i18n="highPriority">${translations[savedLang].highPriority}</button>
            </div>
            <button class="remove-task-btn" title="${translations[savedLang].removeTask || 'Удалить'}">🗑️</button>
        `;
        taskList.appendChild(taskEntry);
        attachPriorityListeners(taskEntry);
    }

    // Добавить новую задачу
    function addTask() {
        const taskEntry = document.createElement('div');
        taskEntry.className = 'task-entry';
        taskEntry.innerHTML = `
            <input type="text" class="task-title" data-i18n-placeholder="taskTitlePlaceholder" placeholder="${translations[savedLang].taskTitlePlaceholder}" required>
            <div class="priority-buttons">
                <button class="priority-btn" data-priority="низкая" data-i18n="lowPriority">${translations[savedLang].lowPriority}</button>
                <button class="priority-btn active" data-priority="средняя" data-i18n="mediumPriority">${translations[savedLang].mediumPriority}</button>
                <button class="priority-btn" data-priority="высокая" data-i18n="highPriority">${translations[savedLang].highPriority}</button>
            </div>
            <button class="remove-task-btn" title="${translations[savedLang].removeTask || 'Удалить'}">🗑️</button>
        `;
        taskList.appendChild(taskEntry);
        attachPriorityListeners(taskEntry);
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
            });
        });
    }

    // Удаление задачи
    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-task-btn')) {
            e.target.parentElement.remove();
        }
    });

    // Валидация времени
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

    // Закрытие предупреждения
    warningCloseBtn.addEventListener('click', () => {
        warningSection.classList.add('hidden');
    });

    // Создание скриншота
    async function takeScreenshot() {
        // Отключение размытия и анимаций
        scheduleOutput.classList.remove('blur');
        animationOutput.classList.add('hidden');
        longGenerationText.classList.add('hidden');

        const body = document.querySelector('body');
        const canvas = await html2canvas(body, {
            scale: 2,
            useCORS: true,
            logging: false,
            height: body.scrollHeight,
            windowHeight: body.scrollHeight,
            ignoreElements: (el) => {
                return el.tagName === 'IFRAME' || el.classList.contains('warning') || el.classList.contains('demo-toggle');
            }
        });

        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'ai-planner-screenshot.png';
        link.click();
    }

    // Отправка задач к API
    submitTasksBtn.addEventListener('click', async () => {
        const lang = localStorage.getItem('language') || 'ru';

        // Демонстрационный режим: создание скриншота
        if (isDemoMode) {
            await takeScreenshot();
            return;
        }

        // Показ предупреждения при первой генерации
        if (!localStorage.getItem('warningShown')) {
            warningSection.classList.remove('hidden');
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
        resultSection.classList.remove('hidden');
        scheduleOutput.classList.add('blur');
        animationOutput.classList.remove('hidden');
        animationOutput.innerHTML = '<div class="loading"><span>.</span><span>.</span><span>.</span></div>';

        // Таймер долгой генерации
        const longGenerationTimeout = setTimeout(() => {
            longGenerationText.classList.remove('hidden');
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

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const schedule = data.candidates[0].content.parts[0].text;

            // Успешная анимация с растяжением
            animationOutput.innerHTML = '<div class="success">✅</div>';
            setTimeout(() => {
                scheduleOutput.classList.remove('blur');
                animationOutput.classList.add('hidden');
                scheduleOutput.textContent = schedule;
                scheduleTitle.classList.remove('hidden');
                resultSection.classList.add('stretch');
                setTimeout(() => resultSection.classList.remove('stretch'), 500);
            }, 1000);
        } catch (error) {
            clearTimeout(longGenerationTimeout);
            longGenerationText.classList.add('hidden');

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
                resultSection.classList.add('stretch');
                setTimeout(() => resultSection.classList.remove('stretch'), 500);
            }, 1000);
        }
    });

    // Добавление задачи
    addTaskBtn.addEventListener('click', addTask);
});