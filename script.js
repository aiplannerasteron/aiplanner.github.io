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
            categoryPlaceholder: "Категория (например, Работа)",
            addTaskButton: "➕ Добавить задачу",
            timeLabel: "⏰ Доступное время:",
            timePlaceholder: "ЧЧ:ММ - ЧЧ:ММ (например, 09:00 - 17:00)",
            submitTasks: "📅 Получить расписание",
            scheduleTitle: "Расписание и советы",
            errorEmptyTasks: "Заполните все поля задач!",
            errorTimeFormat: "Укажите время в формате ЧЧ:ММ - ЧЧ:ММ (например, 09:00 - 17:00)",
            errorApi: "Ошибка при получении расписания. Попробуйте позже.",
            newLanguage: "Новый язык доступен!",
            errorInvalidTime: "Некорректное время. Убедитесь, что время находится в диапазоне 00:00 - 23:59."
        },
        en: {
            title: "AI Task Planner",
            appName: "AI Planner",
            addTasks: "Add Tasks",
            taskTitlePlaceholder: "Task Title",
            lowPriority: "Low",
            mediumPriority: "Medium",
            highPriority: "High",
            categoryPlaceholder: "Category (e.g., Work)",
            addTaskButton: "➕ Add Task",
            timeLabel: "⏰ Available Time:",
            timePlaceholder: "HH:MM - HH:MM (e.g., 09:00 - 17:00)",
            submitTasks: "📅 Get Schedule",
            scheduleTitle: "Schedule and Tips",
            errorEmptyTasks: "Fill in all task fields!",
            errorTimeFormat: "Specify time in HH:MM - HH:MM format (e.g., 09:00 - 17:00)",
            errorApi: "Error fetching schedule. Try again later.",
            newLanguage: "New language available!",
            errorInvalidTime: "Invalid time. Ensure time is within 00:00 - 23:59."
        },
        wd: {
            title: "📅📋",
            appName: "📅🤖",
            addTasks: "➕📋",
            taskTitlePlaceholder: "📝",

            lowPriority: "🔽",
            mediumPriority: "🔄",
            highPriority: "🔼",
            categoryPlaceholder: "🏷️ (e.g., 💼)",
            addTaskButton: "➕📋",
            timeLabel: "⏰:",
            timePlaceholder: "🕒 - 🕔",
            submitTasks: "📅✅",
            scheduleTitle: "📅📝",
            errorEmptyTasks: "⚠️📝❌",
            errorTimeFormat: "⚠️🕒🕔",
            errorApi: "⚠️🤖❌",
            newLanguage: "🆕🌐✅",
            errorInvalidTime: "⚠️🕒❌"
        }
    };

    // Настройки рекламного баннера
    const adConfig = {
        text: "Посетите By ROlil Studio и попробуйте новые продукты!",
        url: "https://t.me/By_RORlil",
        imageUrl: "IMG_20250417_224058_243.jpg"
    };

    const taskList = document.getElementById('task-list');
    const addTaskBtn = document.getElementById('add-task-btn');
    const submitTasksBtn = document.getElementById('submit-tasks');
    const timeRangeInput = document.getElementById('time-range');
    const resultSection = document.querySelector('.result');
    const scheduleOutput = document.getElementById('schedule-output');
    const languageSwitcher = document.getElementById('language-switcher');
    const themeSwitcher = document.getElementById('theme-switcher');
    const adLink = document.getElementById('ad-link');
    const adImage = document.getElementById('ad-image');
    const adText = document.getElementById('ad-text');

    // Установка баннера
    adLink.href = adConfig.url;
    adImage.src = adConfig.imageUrl;
    adText.textContent = adConfig.text;

    // Переключение темы
    themeSwitcher.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : document.body.classList.contains('chaotic-theme') ? 'chaotic' : 'light';
        if (currentTheme === 'dark') {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            themeSwitcher.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else if (currentTheme === 'chaotic') {
            document.body.classList.remove('chaotic-theme');
            document.body.classList.add('light-theme');
            themeSwitcher.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-theme');
            if (localStorage.getItem('chaoticUnlocked') && Math.random() > 0.5) {
                document.body.classList.add('chaotic-theme');
                applyChaoticTheme();
                themeSwitcher.textContent = '🎨';
                localStorage.setItem('theme', 'chaotic');
            } else {
                document.body.classList.add('dark-theme');
                themeSwitcher.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            }
        }
    });

    // Применение хаотичной темы
    function applyChaoticTheme() {
        const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
        document.documentElement.style.setProperty('--primary-color', randomColor());
        document.documentElement.style.setProperty('--primary-hover', randomColor());
        document.documentElement.style.setProperty('--shadow', `0 4px 12px ${randomColor()}80`);
    }

    // Загрузка сохраненной темы
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(`${savedTheme}-theme`);
    themeSwitcher.textContent = savedTheme === 'dark' ? '☀️' : savedTheme === 'chaotic' ? '🎨' : '🌙';
    if (savedTheme === 'chaotic') applyChaoticTheme();

    // Смена языка
    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = translations[lang][key] || translations['ru'][key]; // Fallback to Russian
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = translations[lang][key] || translations['ru'][key];
        });
        document.querySelectorAll('option[data-i18n]').forEach(option => {
            const key = option.getAttribute('data-i18n');
            option.textContent = translations[lang][key] || translations['ru'][key];
        });
        document.title = translations[lang].title || translations['ru'].title;
        localStorage.setItem('language', lang);
    }

    // Проверка и добавление секретного языка
    function checkSecretLanguage() {
        if (localStorage.getItem('wingdingsUnlocked')) {
            if (!languageSwitcher.querySelector('option[value="wd"]')) {
                const option = document.createElement('option');
                option.value = 'wd';
                option.textContent = '📜 Wingdings';
                languageSwitcher.appendChild(option);
            }
        }
    }

    languageSwitcher.addEventListener('change', (e) => {
        updateLanguage(e.target.value);
    });

    // Загрузка сохраненного языка
    const savedLang = localStorage.getItem('language') || 'ru';
    languageSwitcher.value = savedLang;
    updateLanguage(savedLang);
    checkSecretLanguage();

    // Добавить новую задачу
    addTaskBtn.addEventListener('click', () => {
        const taskEntry = document.createElement('div');
        taskEntry.className = 'task-entry';
        taskEntry.innerHTML = `
            <input type="text" class="task-title" data-i18n-placeholder="taskTitlePlaceholder" placeholder="${translations[savedLang].taskTitlePlaceholder}" required>
            <select class="task-priority">
                <option value="низкая" data-i18n="lowPriority">${translations[savedLang].lowPriority}</option>
                <option value="средняя" data-i18n="mediumPriority">${translations[savedLang].mediumPriority}</option>
                <option value="высокая" data-i18n="highPriority">${translations[savedLang].highPriority}</option>
            </select>
            <input type="text" class="task-category" data-i18n-placeholder="categoryPlaceholder" placeholder="${translations[savedLang].categoryPlaceholder}" required>
            <button class="remove-task-btn" title="Удалить">🗑️</button>
        `;
        taskList.appendChild(taskEntry);
    });

    // Удаление задачи
    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-task-btn')) {
            e.target.parentElement.remove();
        }
    });

    // Валидация времени
    function validateTimeRange(timeRange, lang) {
        const timeRegex = /^(\d{2}):(\d{2})\s*-\s*(\d{2}):(\d{2})$/;
        const match = timeRange.match(timeRegex);
        if (!match) {
            return { valid: false, error: translations[lang].errorTimeFormat };
        }

        const [, startHour, startMinute, endHour, endMinute] = match.map(Number);
        if (
            startHour > 23 || startMinute > 59 ||
            endHour > 23 || endMinute > 59 ||
            (startHour * 60 + startMinute) >= (endHour * 60 + endMinute)
        ) {
            return { valid: false, error: translations[lang].errorInvalidTime };
        }

        return { valid: true };
    }

    // Отправка задач к API
    submitTasksBtn.addEventListener('click', async () => {
        const lang = languageSwitcher.value;
        const tasks = Array.from(taskList.querySelectorAll('.task-entry')).map(entry => ({
            title: entry.querySelector('.task-title').value.trim(),
            priority: entry.querySelector('.task-priority').value,
            category: entry.querySelector('.task-category').value.trim()
        }));
        const timeRange = timeRangeInput.value.trim();

        // Валидация задач
        if (!tasks.every(task => task.title && task.category)) {
            alert(translations[lang].errorEmptyTasks);
            return;
        }

        // Валидация времени
        const timeValidation = validateTimeRange(timeRange, lang);
        if (!timeValidation.valid) {
            alert(timeValidation.error);
            return;
        }

        // Проверка секретных условий
        const hasWingdings = tasks.some(task => task.title === 'Windings' && task.category === 'Windings' && task.priority === 'высокая');
        const hasChaotic = tasks.some(task => task.title === 'Chaotic' && task.category === 'Chaotic' && task.priority === 'высокая');

        if (hasWingdings || hasChaotic) {
            if (hasWingdings) {
                localStorage.setItem('wingdingsUnlocked', 'true');
                checkSecretLanguage();
                scheduleOutput.textContent = translations[lang].newLanguage;
            }
            if (hasChaotic) {
                localStorage.setItem('chaoticUnlocked', 'true');
            }
            resultSection.classList.remove('hidden');
            return;
        }

        // Формирование запроса
        const taskListText = tasks.map((task, i) => `- ${task.title} (Важность: ${task.priority}, Категория: ${task.category})`).join('\n');
        let prompt = `Ты — ИИ-планировщик задач. У меня есть следующие задачи:
${taskListText}
Доступное время: ${timeRange}.
Распредели задачи по времени и дай совет, как лучше их выполнить.
Сделай ответ кратким и структурированным.`;

        if (lang === 'en') {
            prompt = `You are an AI task planner. I have the following tasks:
${taskListText}
Available time: ${timeRange}.
Schedule the tasks by time and provide advice on how to complete them efficiently.
Keep the response concise and structured.`;
        }

        try {
            const genAI = new GoogleGenerativeAI("AIzaSyCUtheYwMYUhwkTjT5avcSGwetGXFqF-f0");
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

            const result = await model.generateContent(prompt);
            const schedule = result.response.text();

            scheduleOutput.textContent = schedule;
            resultSection.classList.remove('hidden');
        } catch (error) {
            console.error('Ошибка API:', error.message);
            let errorMessage = translations[lang].errorApi;
            if (error.message.includes('API key')) {
                errorMessage = lang === 'en' ? 'Invalid API key. Please check your configuration.' : 'Неверный ключ API. Проверьте конфигурацию.';
            } else if (error.message.includes('model')) {
                errorMessage = lang === 'en' ? 'Model gemini-2.0-flash is not available. Contact support.' : 'Модель gemini-2.0-flash недоступна. Обратитесь в поддержку.';
            }

            alert(errorMessage);
            // Заглушка
            scheduleOutput.textContent = lang === 'en' ? `
Schedule:
- 09:00 - 10:00: Example Task 1
- 10:00 - 11:00: Example Task 2

Advice:
Start with the most important task to maintain energy.
            ` : `
Расписание:
- 09:00 - 10:00: Пример задачи 1
- 10:00 - 11:00: Пример задачи 2

Совет:
Начните с самой важной задачи, чтобы сохранить энергию.
            `;
            resultSection.classList.remove('hidden');
        }
    });
});
