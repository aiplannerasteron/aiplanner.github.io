const adConfig = {
    small: {
        text: { en: "Check out our new product!", es: "¡Descubre nuestro nuevo producto!", zh: "了解我们的新产品！", hi: "हमारे नए उत्पाद को देखें!" },
        url: "https://example.com",
        imageSrc: "https://via.placeholder.com/32"
    },
    big: {
        text: { en: "Join our community!", es: "¡Únete a nuestra comunidad!", zh: "加入我们的社区！", hi: "हमारे समुदाय में शामिल हों!" },
        url: "https://example.com",
        imageSrc: "https://via.placeholder.com/48"
    }
};

const translations = {
    en: {
        site_name: "AI Task Planner", title: "AI Task Planner", welcome: "Hello! I'm your AI task planner.",
        step_tasks: "Enter tasks separated by commas.", step_importances: "Specify importance (low, medium, high).",
        step_time: "Specify time (HH:MM - HH:MM).", step_save: "Enter plan name.", placeholder_tasks: "Prepare presentation, Reply to emails",
        placeholder_importances: "high, medium, low", placeholder_time: "09:00 - 17:00", placeholder_save: "My daily plan",
        continue: "Continue", back: "Back", skip: "Skip", done: "Save", success_message: "Plan created!",
        history_title: "Plan History", no_history: "No saved plans.", clear_history: "Clear History", tasks_label: "Tasks",
        importances_label: "Importances", time_label: "Time", schedule_label: "Schedule", advice_label: "Advice",
        task_count: "Tasks: {count}", error_tasks: "Enter at least one task.", error_importances: "Match importance count to tasks.",
        error_time: "Use HH:MM - HH:MM format.", error_save: "Enter a plan name.", error_processing: "Processing error.",
        loading: "Loading...", language_title: "Select Language", style_title: "Select Style", theme_title: "Toggle Theme",
        minimal: "Minimal 🌟", retro: "Retro 🎉", cosmic: "Cosmic 🌌", cyberpunk: "Cyberpunk 🌀", industrial: "Industrial ⚙️",
        hologram: "Hologram 🌈", steampunk: "Steampunk 🕰️", neon: "Neon 💡", vintage: "Vintage 📜", futuristic: "Futuristic 🚀",
        gothic: "Gothic 🖤", modern: "Modern 🏙️"
    },
    es: {
        site_name: "Planificador de Tareas IA", title: "Planificador de Tareas IA", welcome: "¡Hola! Soy tu planificador de tareas IA.",
        step_tasks: "Ingresa tareas separadas por comas.", step_importances: "Especifica importancia (baja, media, alta).",
        step_time: "Especifica tiempo (HH:MM - HH:MM).", step_save: "Ingresa nombre del plan.", placeholder_tasks: "Preparar presentación, Responder correos",
        placeholder_importances: "alta, media, baja", placeholder_time: "09:00 - 17:00", placeholder_save: "Mi plan diario",
        continue: "Continuar", back: "Atrás", skip: "Omitir", done: "Guardar", success_message: "¡Plan creado!",
        history_title: "Historial de Planes", no_history: "No hay planes guardados.", clear_history: "Borrar Historial",
        tasks_label: "Tareas", importances_label: "Importancias", time_label: "Tiempo", schedule_label: "Horario",
        advice_label: "Consejo", task_count: "Tareas: {count}", error_tasks: "Ingresa al menos una tarea.",
        error_importances: "Coincide el número de importancias con las tareas.", error_time: "Usa el formato HH:MM - HH:MM.",
        error_save: "Ingresa un nombre de plan.", error_processing: "Error de procesamiento.", loading: "Cargando...",
        language_title: "Seleccionar Idioma", style_title: "Seleccionar Estilo", theme_title: "Cambiar Tema",
        minimal: "Minimalista 🌟", retro: "Retro 🎉", cosmic: "Cósmico 🌌", cyberpunk: "Ciberpunk 🌀", industrial: "Industrial ⚙️",
        hologram: "Holograma 🌈", steampunk: "Steampunk 🕰️", neon: "Neón 💡", vintage: "Vintage 📜", futuristic: "Futurista 🚀",
        gothic: "Gótico 🖤", modern: "Moderno 🏙️"
    },
    zh: {
        site_name: "人工智能任务规划器", title: "人工智能任务规划器", welcome: "你好！我是你的AI任务规划器。",
        step_tasks: "输入以逗号分隔的任务。", step_importances: "指定重要性（低、中、高）。",
        step_time: "指定时间（HH:MM - HH:MM）。", step_save: "输入计划名称。", placeholder_tasks: "准备演示文稿，回复邮件",
        placeholder_importances: "高、中、低", placeholder_time: "09:00 - 17:00", placeholder_save: "我的每日计划",
        continue: "继续", back: "返回", skip: "跳过", done: "保存", success_message: "计划创建成功！",
        history_title: "计划历史", no_history: "没有保存的计划。", clear_history: "清除历史", tasks_label: "任务",
        importances_label: "重要性", time_label: "时间", schedule_label: "日程", advice_label: "建议",
        task_count: "任务数：{count}", error_tasks: "至少输入一个任务。", error_importances: "重要性数量需与任务匹配。",
        error_time: "使用HH:MM - HH:MM格式。", error_save: "输入计划名称。", error_processing: "处理错误。",
        loading: "加载中...", language_title: "选择语言", style_title: "选择风格", theme_title: "切换主题",
        minimal: "极简 🌟", retro: "复古 🎉", cosmic: "宇宙 🌌", cyberpunk: "赛博朋克 🌀", industrial: "工业 ⚙️",
        hologram: "全息 🌈", steampunk: "蒸汽朋克 🕰️", neon: "霓虹 💡", vintage: "复古 📜", futuristic: "未来主义 🚀",
        gothic: "哥特 🖤", modern: "现代 🏙️"
    },
    hi: {
        site_name: "एआई कार्य योजनाकार", title: "एआई कार्य योजनाकार", welcome: "नमस्ते! मैं आपका एआई कार्य योजनाकार हूँ।",
        step_tasks: "अल्पविराम से अलग किए गए कार्य दर्ज करें।", step_importances: "महत्व निर्दिष्ट करें (निम्न, मध्यम, उच्च)।",
        step_time: "समय निर्दिष्ट करें (HH:MM - HH:MM)।", step_save: "योजना का नाम दर्ज करें।", placeholder_tasks: "प्रस्तुति तैयार करें, ईमेल का जवाब दें",
        placeholder_importances: "उच्च, मध्यम, निम्न", placeholder_time: "09:00 - 17:00", placeholder_save: "मेरा दैनिक योजना",
        continue: "जारी रखें", back: "पीछे", skip: "छोड़ें", done: "सहेजें", success_message: "योजना बनाई गई!",
        history_title: "योजना इतिहास", no_history: "कोई सहेजी गई योजना नहीं।", clear_history: "इतिहास साफ करें",
        tasks_label: "कार्य", importances_label: "महत्व", time_label: "समय", schedule_label: "कार्यसूची",
        advice_label: "सलाह", task_count: "कार्य: {count}", error_tasks: "कम से कम एक कार्य दर्ज करें।",
        error_importances: "महत्व की संख्या कार्यों से मेल खानी चाहिए।", error_time: "HH:MM - HH:MM प्रारूप का उपयोग करें।",
        error_save: "योजना का नाम दर्ज करें।", error_processing: "प्रसंस्करण त्रुटि।", loading: "लोड हो रहा है...",
        language_title: "भाषा चुनें", style_title: "शैली चुनें", theme_title: "थीम बदलें",
        minimal: "न्यूनतम 🌟", retro: "रेट्रो 🎉", cosmic: "कॉस्मिक 🌌", cyberpunk: "साइबरपंक 🌀", industrial: "औद्योगिक ⚙️",
        hologram: "होलोग्राम 🌈", steampunk: "स्टीमपंक 🕰️", neon: "नियॉन 💡", vintage: "विंटेज 📜", futuristic: "भविष्यवादी 🚀",
        gothic: "गॉथिक 🖤", modern: "आधुनिक 🏙️"
    }
};

const themeIcons = {
    minimal: '🌟', retro: '🎉', cosmic: '🌌', cyberpunk: '🌀', industrial: '⚙️', hologram: '🌈', steampunk: '🕰️',
    neon: '💡', vintage: '📜', futuristic: '🚀', gothic: '🖤', modern: '🏙️'
};

let currentLang = localStorage.getItem('language') || 'en';
let userData = { step: 'tasks', tasks: [], importances: [], time: '', planName: '', result: '' };
let currentView = 'planner';
let history = JSON.parse(localStorage.getItem('plannerHistory') || '[]');
let currentStyle = localStorage.getItem('style') || 'minimal';
let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

function applyStyle(style, darkMode) {
    currentStyle = style;
    isDarkMode = darkMode;
    document.documentElement.className = `theme-${style}-${darkMode ? 'dark' : 'light'}`;
    localStorage.setItem('style', style);
    localStorage.setItem('isDarkMode', darkMode);
    updateButtonIcons();
    renderContent();
    setupAds();
    updateHighlight();
}

function updateButtonIcons() {
    document.getElementById('lang-btn').textContent = translations[currentLang].language_title.split(' ')[0];
    document.getElementById('history-btn').textContent = translations[currentLang].history_title.split(' ')[0];
    document.getElementById('planner-btn').textContent = translations[currentLang].title.split(' ')[0];
    document.getElementById('theme-btn').textContent = isDarkMode ? '☀️' : '🌙';
    document.getElementById('style-btn').textContent = translations[currentLang].style_title.split(' ')[0];
}

function updateHighlight() {
    const toolbar = document.getElementById('toolbar');
    const highlight = document.getElementById('highlight');
    const activeButton = toolbar.querySelector(`button[data-view="${currentView}"]`);
    if (activeButton) {
        const rect = activeButton.getBoundingClientRect();
        const toolbarRect = toolbar.getBoundingClientRect();
        highlight.style.width = `${rect.width}px`;
        highlight.style.height = `${rect.height}px`;
        highlight.style.left = `${rect.left - toolbarRect.left}px`;
        highlight.style.top = `${rect.top - toolbarRect.top}px`;
        highlight.style.opacity = '1';
    }
}

function showPlanner() { currentView = 'planner'; userData.step = 'tasks'; renderContent(); updateHighlight(); }
function showLanguageMenu() { currentView = 'language'; renderContent(); updateHighlight(); }
function showStyleMenu() { currentView = 'style'; renderContent(); updateHighlight(); }
function showHistory() { currentView = 'history'; renderContent(); updateHighlight(); }
function showTheme() { currentView = 'theme'; renderContent(); updateHighlight(); }

function switchStyle(style) { applyStyle(style, isDarkMode); showPlanner(); }
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.getElementById('title').innerText = translations[lang].title;
    document.title = translations[lang].site_name;
    updateButtonIcons();
    showPlanner();
}
function toggleTheme() { applyStyle(currentStyle, !isDarkMode); }

function setupAds() {
    const bigAd = document.getElementById('big-ad');
    bigAd.innerHTML = adConfig.big.text[currentLang] ? `<img src="${adConfig.big.imageSrc}" class="w-12 h-12 rounded"><span class="text-gray-700">${adConfig.big.text[currentLang]}</span>` : `<span class="text-gray-700">No ads!</span>`;
    bigAd.className = adConfig.big.text[currentLang] ? 'w-full max-w-md mt-4 bg-yellow-100 rounded-lg shadow p-4 flex items-center space-x-4 h-24 slide-in' : bigAd.className + ' ad-empty';
    bigAd.onclick = adConfig.big.url ? () => window.open(adConfig.big.url, '_blank') : null;

    const smallAd = document.getElementById('small-ad');
    smallAd.innerHTML = adConfig.small.text[currentLang] ? `<img src="${adConfig.small.imageSrc}" class="w-8 h-8 rounded"><span class="text-gray-700 text-sm">${adConfig.small.text[currentLang]}</span>` : `<span class="text-gray-700 text-sm">No ads!</span>`;
    smallAd.className = adConfig.small.text[currentLang] ? 'w-full max-w-md mt-4 bg-yellow-100 rounded-lg shadow p-4 flex items-center space-x-4 h-16 slide-in' : smallAd.className + ' ad-empty';
    smallAd.onclick = adConfig.small.url ? () => window.open(adConfig.small.url, '_blank') : null;
}

function clearHistory() { history = []; localStorage.setItem('plannerHistory', JSON.stringify(history)); renderContent(); }

function goBack() {
    if (userData.step === 'importances') userData.step = 'tasks';
    else if (userData.step === 'time') userData.step = 'importances';
    else if (userData.step === 'save') userData.step = 'time';
    else if (userData.step === 'done') userData.step = 'save';
    renderContent();
}

function skipStep() {
    if (userData.step === 'importances') {
        userData.importances = userData.tasks.map(() => translations[currentLang].placeholder_importances.split(', ')[1]);
        userData.step = 'time';
    } else if (userData.step === 'time') {
        userData.time = translations[currentLang].placeholder_time;
        userData.step = 'save';
    } else if (userData.step === 'save') {
        userData.planName = translations[currentLang].placeholder_save;
        userData.step = 'done';
        submitData();
        return;
    }
    renderContent();
}

function submitData() {
    const errorDiv = document.getElementById('error');
    errorDiv.classList.add('hidden');

    if (userData.step === 'tasks') {
        const input = document.getElementById('tasks-input')?.value.trim();
        if (!input) { errorDiv.innerText = translations[currentLang].error_tasks; errorDiv.classList.remove('hidden'); return; }
        userData.tasks = input.split(',').map(task => sanitizeInput(task.trim())).filter(task => task);
        userData.step = 'importances';
    } else if (userData.step === 'importances') {
        const input = document.getElementById('importances-input')?.value.trim();
        if (input) {
            const importances = input.split(',').map(imp => sanitizeInput(imp.trim())).filter(imp => imp);
            if (importances.length !== userData.tasks.length) { errorDiv.innerText = translations[currentLang].error_importances; errorDiv.classList.remove('hidden'); return; }
            userData.importances = importances;
        }
        userData.step = 'time';
    } else if (userData.step === 'time') {
        const input = document.getElementById('time-input')?.value.trim();
        if (input && !/^\d{2}:\d{2}\s*-\s*\d{2}:\d{2}$/.test(input)) { errorDiv.innerText = translations[currentLang].error_time; errorDiv.classList.remove('hidden'); return; }
        userData.time = input || translations[currentLang].placeholder_time;
        userData.step = 'save';
    } else if (userData.step === 'save') {
        const input = document.getElementById('save-input')?.value.trim();
        if (!input) { errorDiv.innerText = translations[currentLang].error_save; errorDiv.classList.remove('hidden'); return; }
        userData.planName = sanitizeInput(input);
        userData.step = 'done';
        processPlan();
    }
    renderContent();
}

function processPlan() {
    document.getElementById('loading').classList.remove('hidden');
    setTimeout(() => {
        const priorityMap = { high: 3, alta: 3, 高: 3, उच्च: 3, medium: 2, media: 2, 中: 2, मध्यम: 2, low: 1, baja: 1, 低: 1, निम्न: 1 };
        const tasksWithPriority = userData.tasks.map((task, i) => ({
            task,
            importance: userData.importances[i] || translations[currentLang].placeholder_importances.split(', ')[1],
            priority: priorityMap[(userData.importances[i] || translations[currentLang].placeholder_importances.split(', ')[1]).toLowerCase()] || 2
        }));
        tasksWithPriority.sort((a, b) => b.priority - a.priority);

        const [start, end] = userData.time.split('-').map(t => t.trim());
        const startTime = new Date(`2000-01-01 ${start}`);
        const endTime = new Date(`2000-01-01 ${end}`);
        const totalMinutes = (endTime - startTime) / 1000 / 60;
        const taskDuration = Math.floor(totalMinutes / tasksWithPriority.length);

        let currentTime = new Date(startTime);
        const schedule = tasksWithPriority.map(({ task, importance }) => {
            const taskStart = currentTime.toTimeString().slice(0, 5);
            currentTime.setMinutes(currentTime.getMinutes() + taskDuration);
            const taskEnd = currentTime.toTimeString().slice(0, 5);
            return `${taskStart}-${taskEnd}: ${task} (${importance})`;
        }).join('\n');

        const advice = `${translations[currentLang].advice_label}: Prioritize high-importance tasks early and review progress mid-day.`;
        userData.result = `${translations[currentLang].schedule_label}:\n${schedule}\n\n${advice}`;

        history.push({
            name: userData.planName,
            tasks: userData.tasks,
            importances: userData.importances,
            time: userData.time,
            result: userData.result,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('plannerHistory', JSON.stringify(history));

        triggerConfetti();
        document.getElementById('loading').classList.add('hidden');
        renderContent();
    }, 1000);
}

function triggerConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    confettiContainer.innerHTML = '';
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confetti.style.background = `hsl(${Math.random() * 360}, 70%, 50%)`;
        confettiContainer.appendChild(confetti);
    }
    setTimeout(() => confettiContainer.innerHTML = '', 3000);
}

function renderContent() {
    const contentDiv = document.getElementById('content');
    const actionButtons = document.getElementById('action-buttons');
    const title = document.getElementById('title');
    const errorDiv = document.getElementById('error');
    const loadingDiv = document.getElementById('loading');
    contentDiv.innerHTML = '';
    actionButtons.innerHTML = '';
    errorDiv.classList.add('hidden');
    loadingDiv.classList.add('hidden');

    const lang = translations[currentLang];
    title.innerText = currentView === 'planner' ? lang.title : currentView === 'history' ? lang.history_title : currentView === 'language' ? lang.language_title : currentView === 'style' ? lang.style_title : lang.theme_title;

    if (currentView === 'planner') {
        if (userData.step === 'tasks') {
            contentDiv.innerHTML = `<p class="mb-2">${lang.step_tasks}</p><input id="tasks-input" class="input-animate" placeholder="${lang.placeholder_tasks}" value="${userData.tasks.join(', ')}"><p class="text-sm mt-2">${lang.task_count.replace('{count}', userData.tasks.length)}</p>`;
            actionButtons.innerHTML = `<button class="btn primary-btn" onclick="submitData()">${lang.continue}</button>`;
        } else if (userData.step === 'importances') {
            contentDiv.innerHTML = `<p class="mb-2">${lang.step_importances}</p><input id="importances-input" class="input-animate" placeholder="${lang.placeholder_importances}" value="${userData.importances.join(', ')}">`;
            actionButtons.innerHTML = `<button class="btn secondary-btn" onclick="goBack()">${lang.back}</button><button class="btn skip-btn" onclick="skipStep()">${lang.skip}</button><button class="btn primary-btn" onclick="submitData()">${lang.continue}</button>`;
        } else if (userData.step === 'time') {
            contentDiv.innerHTML = `<p class="mb-2">${lang.step_time}</p><input id="time-input" class="input-animate" placeholder="${lang.placeholder_time}" value="${userData.time}">`;
            actionButtons.innerHTML = `<button class="btn secondary-btn" onclick="goBack()">${lang.back}</button><button class="btn skip-btn" onclick="skipStep()">${lang.skip}</button><button class="btn primary-btn" onclick="submitData()">${lang.continue}</button>`;
        } else if (userData.step === 'save') {
            contentDiv.innerHTML = `<p class="mb-2">${lang.step_save}</p><input id="save-input" class="input-animate" placeholder="${lang.placeholder_save}" value="${userData.planName}">`;
            actionButtons.innerHTML = `<button class="btn secondary-btn" onclick="goBack()">${lang.back}</button><button class="btn skip-btn" onclick="skipStep()">${lang.skip}</button><button class="btn primary-btn" onclick="submitData()">${lang.done}</button>`;
        } else if (userData.step === 'done') {
            contentDiv.innerHTML = `<div class="ai-response"><p class="font-bold">${lang.success_message}</p><pre class="whitespace-pre-wrap">${userData.result}</pre></div>`;
            actionButtons.innerHTML = `<button class="btn primary-btn" onclick="showPlanner()">${lang.continue}</button>`;
            userData = { step: 'tasks', tasks: [], importances: [], time: '', planName: '', result: '' };
        }
    } else if (currentView === 'history') {
        contentDiv.innerHTML = history.length === 0 ? `<p>${lang.no_history}</p>` : history.map(plan => `<div class="ai-response mb-4"><p class="font-bold">${plan.name}</p><p class="text-sm">${new Date(plan.timestamp).toLocaleString()}</p><pre class="whitespace-pre-wrap">${plan.result}</pre></div>`).join('');
        if (history.length) actionButtons.innerHTML = `<button class="btn primary-btn" onclick="clearHistory()">${lang.clear_history}</button>`;
    } else if (currentView === 'language') {
        contentDiv.innerHTML = `<div class="lang-menu grid grid-cols-2 gap-4">
            <button class="btn ${currentLang === 'en' ? 'primary-btn' : 'secondary-btn'}" onclick="switchLanguage('en')">🇺🇸 EN</button>
            <button class="btn ${currentLang === 'es' ? 'primary-btn' : 'secondary-btn'}" onclick="switchLanguage('es')">🇪🇸 ES</button>
            <button class="btn ${currentLang === 'zh' ? 'primary-btn' : 'secondary-btn'}" onclick="switchLanguage('zh')">🇨🇳 ZH</button>
            <button class="btn ${currentLang === 'hi' ? 'primary-btn' : 'secondary-btn'}" onclick="switchLanguage('hi')">🇮🇳 HI</button>
        </div>`;
    } else if (currentView === 'style') {
        contentDiv.innerHTML = `<div class="style-menu grid grid-cols-3 gap-4">${
            Object.keys(themeIcons).map(style => `<button class="btn ${currentStyle === style ? 'primary-btn' : 'secondary-btn'}" onclick="switchStyle('${style}')">${lang[style]} ${themeIcons[style]}</button>`).join('')
        }</div>`;
    } else if (currentView === 'theme') {
        contentDiv.innerHTML = `<button class="btn primary-btn w-full" onclick="toggleTheme()">${lang.theme_title}: ${isDarkMode ? '☀️ Light' : '🌙 Dark'}</button>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    applyStyle(currentStyle, isDarkMode);
    document.getElementById('title').innerText = translations[currentLang].title;
    document.title = translations[currentLang].site_name;
    renderContent();
    setupAds();
    window.addEventListener('resize', updateHighlight);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && currentView === 'planner' && userData.step !== 'done') submitData();
});