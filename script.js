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
            addTaskButton: "+ Добавить задачу",
            timeLabel: "Доступное время:",
            timePlaceholder: "ЧЧ:ММ - ЧЧ:ММ (например, 09:00 - 17:00)",
            submitTasks: "Получить расписание",
            scheduleTitle: "Расписание и советы",
            errorEmptyTasks: "Заполните все поля задач!",
            errorTimeFormat: "Укажите время в формате ЧЧ:ММ - ЧЧ:ММ",
            errorApi: "Произошла ошибка при получении расписания"
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
            addTaskButton: "+ Add Task",
            timeLabel: "Available Time:",
            timePlaceholder: "HH:MM - HH:MM (e.g., 09:00 - 17:00)",
            submitTasks: "Get Schedule",
            scheduleTitle: "Schedule and Tips",
            errorEmptyTasks: "Fill in all task fields!",
            errorTimeFormat: "Specify time in HH:MM - HH:MM format",
            errorApi: "An error occurred while fetching the schedule"
        }
    };

    // Настройки рекламного баннера
    const adConfig = {
        text: "Настраиваемый рекламный текст", // Замените на ваш текст
        url: "https://example.com", // Замените на ваш URL
        imageUrl: "ad-placeholder.png" // Замените на URL изображения
    };

    const taskList = document.getElementById('task-list');
    const addTaskBtn = document.getElementById('add-task-btn');
    const submitTasksBtn = document.getElementById('submit-tasks');
    const timeRangeInput = document.getElementById('time-range');
    const resultSection = document.querySelector('.result');
    const scheduleOutput = document.getElementById('schedule-output');
    const languageSwitcher = document.getElementById('language-switcher');
    const adLink = document.getElementById('ad-link');
    const adImage = document.getElementById('ad-image');
    const adText = document.getElementById('ad-text');

    // Установка баннера
    adLink.href = adConfig.url;
    adImage.src = adConfig.imageUrl;
    adText.textContent = adConfig.text;

    // Смена языка
    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = translations[lang][key];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = translations[lang][key];
        });
        document.querySelectorAll('option[data-i18n]').forEach(option => {
            const key = option.getAttribute('data-i18n');
            option.textContent = translations[lang][key];
        });
        document.title = translations[lang].title;
        localStorage.setItem('language', lang);
    }

    languageSwitcher.addEventListener('change', (e) => {
        updateLanguage(e.target.value);
    });

    // Загрузка сохраненного языка
    const savedLang = localStorage.getItem('language') || 'ru';
    languageSwitcher.value = savedLang;
    updateLanguage(savedLang);

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
            <button class="remove-task-btn">×</button>
        `;
        taskList.appendChild(taskEntry);
    });

    // Удаление задачи
    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-task-btn') && taskList.children.length > 1) {
            e.target.parentElement.remove();
        }
    });

    // Отправка задач к Gemini API
    submitTasksBtn.addEventListener('click', async () => {
        const lang = languageSwitcher.value;
        const tasks = Array.from(taskList.querySelectorAll('.task-entry')).map(entry => ({
            title: entry.querySelector('.task-title').value,
            priority: entry.querySelector('.task-priority').value,
            category: entry.querySelector('.task-category').value
        }));
        const timeRange = timeRangeInput.value;

        // Валидация
        if (!tasks.every(task => task.title && task.category)) {
            alert(translations[lang].errorEmptyTasks);
            return;
        }
        if (!timeRange.match(/^\d{2}:\d{2}\s*-\s*\d{2}:\d{2}$/)) {
            alert(translations[lang].errorTimeFormat);
            return;
        }

        // Формирование запроса к Gemini
        const taskListText = tasks.map((task, i) => `- ${task.title} (Важность: ${task.priority}, Категория: ${task.category})`).join('\n');
        const prompt = `
            Ты — ИИ-планировщик задач. У меня есть следующие задачи:
            ${taskListText}
            Доступное время: ${timeRange}.
            Распредели задачи по времени и дай совет, как лучше их выполнить.
            Ответ должен быть в формате Markdown:
            - Используй **жирный текст** для заголовков (например, **Расписание** и **Совет**).
            - Время и задачи в расписании пиши в виде списка с `-`.
            - Совет оформи в блоке кода с тройными обратными кавычками \`\`\`.
            - Сделай ответ кратким и структурированным.
        `;

        try {
            const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCUtheYwMYUhwkTjT5avcSGwetGXFqF-f0', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }]
                })
            });
            const data = await response.json();
            const schedule = data.candidates[0].content.parts[0].text;
            scheduleOutput.textContent = schedule;
            resultSection.classList.remove('hidden');
        } catch (error) {
            console.error('Ошибка:', error);
            alert(translations[lang].errorApi);
        }
    });
});
