import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getDatabase, ref, get, push } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";

// Конфигурация Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD8o7Qy-nbdliOLSLJugzJ6cTzleNa8q0o",
    authDomain: "aiplanner-31886.firebaseapp.com",
    projectId: "aiplanner-31886",
    storageBucket: "aiplanner-31886.firebasestorage.app",
    messagingSenderId: "721297878184",
    appId: "1:721297878184:web:20d5281e3e2523a1a5a69d",
    measurementId: "G-7EHQBR6M2B",
    databaseURL: "https://aiplanner-31886-default-rtdb.firebaseio.com"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

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
            rateSchedule: "Оценить",
            ratingTitle: "Оцените совет",
            usefulness: "Полезность",
            speed: "Скорость",
            accuracy: "Правильность",
            submitRating: "Отправить",
            ratingClose: "Закрыть",
            statsBtn: "⭐",
            statsTitle: "Рейтинги",
            statsCount: "Оценок: ",
            statsClose: "Закрыть"
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
            rateSchedule: "Rate",
            ratingTitle: "Rate the Advice",
            usefulness: "Usefulness",
            speed: "Speed",
            accuracy: "Accuracy",
            submitRating: "Submit",
            ratingClose: "Close",
            statsBtn: "⭐",
            statsTitle: "Ratings",
            statsCount: "Ratings: ",
            statsClose: "Close"
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
    const statsBtn = document.getElementById('stats-btn');
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
    const projectDefenseText = document.querySelector('.project-defense');
    const saveScheduleBtn = document.getElementById('save-schedule');
    const tryAgainBtn = document.getElementById('try-again');
    const rateBtn = document.getElementById('rate-btn');
    const ratingWindow = document.querySelector('.rating-window');
    const submitRatingBtn = document.getElementById('submit-rating');
    const ratingCloseBtn = document.getElementById('rating-close');
    const statsWindow = document.querySelector('.stats-window');
    const statsCloseBtn = document.getElementById('stats-close');

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
    const adAnimations = ['animate-glow', 'animate-rotate', 'animate-bounce'];
    let currentAdAnimationIndex = 0;
    function switchAdAnimation() {
        adBanner.classList.remove(adAnimations[currentAdAnimationIndex]);
        currentAdAnimationIndex = (currentAdAnimationIndex + 1) % adAnimations.length;
        adBanner.classList.add(adAnimations[currentAdAnimationIndex]);
    }
    adBanner.addEventListener('animationend', switchAdAnimation);
    setInterval(() => {
        adBanner.classList.remove(adAnimations[currentAdAnimationIndex]);
        currentAdAnimationIndex = (currentAdAnimationIndex + 1) % adAnimations.length;
        adBanner.classList.add(adAnimations[currentAdAnimationIndex]);
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
        document.body.classList.add('language-transition');
        setTimeout(() => document.body.classList.remove('language-transition'), 300);
        updateStats();
    }

    languageSwitchers.forEach(btn => {
        btn.addEventListener('click', () => updateLanguage(btn.getAttribute('data-lang')));
    });

    updateLanguage(savedLang);

    // Эффект гармошки для лого
    logoText.addEventListener('click', () => {
        const text = logoText.textContent;
        logoText.innerHTML = text.split('').map((char, i) => `<span class="logo-char" style="animation-delay: ${i * 0.1}s">${char}</span>`).join('');
        logoText.classList.add('shine');
        setTimeout(() => {
            logoText.innerHTML = text;
            logoText.classList.remove('shine');
        }, 1500);
    });

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
            <button class="remove-task-btn" title="${translations[savedLang].removeTask}">🗑️</button>
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

    // Кнопка предупреждения
    warningToggleBtn.addEventListener('click', () => {
        warningSection.classList.remove('hidden');
    });

    // Закрытие предупреждения
    warningCloseBtn.addEventListener('click', () => {
        warningSection.classList.add('hidden');
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
    });

    // Сброс интерфейса
    tryAgainBtn.addEventListener('click', () => {
        resultSection.classList.add('hidden');
        taskInput.classList.remove('hidden');
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
    });

    // Оценка
    const emojis = ['😭', '😢', '😐', '🙂', '🤩'];
    function updateEmoji(input, emojiElement) {
        const value = parseInt(input.value);
        emojiElement.textContent = emojis[value - 1];
        emojiElement.classList.add('pop-in');
        setTimeout(() => emojiElement.classList.remove('pop-in'), 500);
    }

    document.querySelectorAll('.rating-item input[type="range"]').forEach(input => {
        const emojiElement = input.nextElementSibling;
        updateEmoji(input, emojiElement);
        input.addEventListener('input', () => updateEmoji(input, emojiElement));
    });

    rateBtn.addEventListener('click', () => {
        ratingWindow.classList.remove('hidden');
    });

    submitRatingBtn.addEventListener('click', async () => {
        const usefulness = parseInt(document.getElementById('usefulness').value);
        const speed = parseInt(document.getElementById('speed').value);
        const accuracy = parseInt(document.getElementById('accuracy').value);
        try {
            await push(ref(database, 'ratings'), {
                usefulness,
                speed,
                accuracy,
                timestamp: Date.now()
            });
            ratingWindow.classList.add('hidden');
            updateStats();
        } catch (error) {
            console.error('Ошибка записи оценки:', error);
        }
    });

    ratingCloseBtn.addEventListener('click', () => {
        ratingWindow.classList.add('hidden');
    });

    // Статистика
    statsBtn.addEventListener('click', () => {
        statsWindow.classList.remove('hidden');
        updateStats();
    });

    statsCloseBtn.addEventListener('click', () => {
        statsWindow.classList.add('hidden');
    });

    async function updateStats() {
        try {
            const snapshot = await get(ref(database, 'ratings'));
            if (snapshot.exists()) {
                const ratings = snapshot.val();
                const ratingsArray = Object.values(ratings);
                const count = ratingsArray.length;
                const avgUsefulness = (ratingsArray.reduce((sum, r) => sum + r.usefulness, 0) / count).toFixed(1);
                const avgSpeed = (ratingsArray.reduce((sum, r) => sum + r.speed, 0) / count).toFixed(1);
                const avgAccuracy = (ratingsArray.reduce((sum, r) => sum + r.accuracy, 0) / count).toFixed(1);

                document.getElementById('stats-count').textContent = translations[savedLang].statsCount + count;
                document.getElementById('usefulness-score').textContent = avgUsefulness;
                document.getElementById('speed-score').textContent = avgSpeed;
                document.getElementById('accuracy-score').textContent = avgAccuracy;
                document.getElementById('usefulness-progress').style.width = `${(avgUsefulness / 5) * 100}%`;
                document.getElementById('speed-progress').style.width = `${(avgSpeed / 5) * 100}%`;
                document.getElementById('accuracy-progress').style.width = `${(avgAccuracy / 5) * 100}%`;
            } else {
                document.getElementById('stats-count').textContent = translations[savedLang].statsCount + '0';
                document.getElementById('usefulness-score').textContent = '0.0';
                document.getElementById('speed-score').textContent = '0.0';
                document.getElementById('accuracy-score').textContent = '0.0';
                document.getElementById('usefulness-progress').style.width = '0%';
                document.getElementById('speed-progress').style.width = '0%';
                document.getElementById('accuracy-progress').style.width = '0%';
            }
        } catch (error) {
            console.error('Ошибка чтения статистики:', error);
        }
    }

    // Отправка задач к API
    submitTasksBtn.addEventListener('click', async () => {
        const lang = localStorage.getItem('language') || 'ru';

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
        taskInput.style.opacity = '0';
        taskInput.style.transform = 'scale(0.8)';
        setTimeout(() => {
            taskInput.classList.add('hidden');
            resultSection.classList.remove('hidden');
            resultSection.style.transform = 'translateY(-100px)';
            scheduleOutput.classList.add('blur');
            animationOutput.classList.remove('hidden');
            animationOutput.innerHTML = '<div class="loading"><span>.</span><span>.</span><span>.</span></div>';
        }, 300);

        // Таймер долгой генерации
        const longGenerationTimeout = setTimeout(() => {
            longGenerationText.classList.remove('hidden');
            resultSection.classList.add('stretch');
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
            resultSection.classList.remove('stretch');

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
            resultSection.classList.remove('stretch');

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