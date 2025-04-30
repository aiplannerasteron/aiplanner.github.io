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
Сделай ответ кратким и структурированным. Без форматирования. Пиши исключительно обычным текстом не используя Markdown или любое другое форматирование. Совет дай в стиле того, какая основная масса задач.`;

        if (lang === 'en') {
            prompt = `You are an AI task planner. I have the following tasks:
${taskListText}
Available time: ${timeRange}.
Schedule the tasks by time and provide advice on how to complete them efficiently.
Keep the response concise and structured. Don't use text formatting. No markdown and every formatting. Just plain text. Give advice at tasks style`;
        }

        try {
            // WARNING: Hardcoding API keys in client-side code is insecure for production.
            // For GitHub Pages, consider using a backend proxy to hide the API key.
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

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const schedule = data.candidates[0].content.parts[0].text;

            scheduleOutput.textContent = schedule;
            resultSection.classList.remove('hidden');
        } catch (error) {
            const errorCode = Math.floor(Math.random() * 1000); // Генерация случайного номера ошибки
            console.error(`${errorCode} — ${error.message}`);
            let errorMessage, errorSource, errorDetails;

            if (error.message.includes('API key')) {
                errorMessage = lang === 'en' ? 'Valid API key. Please check your configuration.' : 'Неверный ключ API. Проверьте конфигурацию.';
                errorSource = lang === 'en' ? 'API Configuration' : 'Конфигурация API';
                errorDetails = lang === 'en' ? 'The provided API key is invalid or missing. Verify the key in the application settings.' : 'Предоставленный ключ API недействителен или отсутствует. Проверьте ключ в настройках приложения.';
            } else if (error.message.includes('model')) {
                errorMessage = lang === 'en' ? 'Model gemini-1.5-flash is not available. Contact support.' : 'Модель gemini-1.5-flash недоступна. Обратитесь в поддержку.';
                errorSource = lang === 'en' ? 'Model Availability' : 'Доступность модели';
                errorDetails = lang === 'en' ? 'The specified model is not available. This may be due to service restrictions or configuration issues.' : 'Указанная модель недоступна. Это может быть связано с ограничениями сервиса или проблемами конфигурации.';
            } else {
                errorMessage = translations[lang].errorApi;
                errorSource = lang === 'en' ? 'Unknown API Error' : 'Неизвестная ошибка API';
                errorDetails = `${errorCode} — ${error.message}`;
                console.error(`${errorCode} — ${error.message}`); // Логирование неизвестной ошибки
            }

            alert(errorMessage);
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
            resultSection.classList.remove('hidden');
        }
    });
});
