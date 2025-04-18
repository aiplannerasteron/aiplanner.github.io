const adConfig = {
    small: {
        text: {
            en: "Check out our new product!", es: "¡Descubre nuestro nuevo producto!", zh: "了解我们的新产品！", hi: "हमारे नए उत्पाद को देखें!",
            ru: "Ознакомьтесь с новым продуктом!", fr: "Découvrez notre nouveau produit !", de: "Schauen Sie sich unser neues Produkt an!",
            ja: "新製品をご覧ください！", pt: "Confira nosso novo produto!", ar: "اطلع على منتجنا الجديد!", it: "Scopri il nostro nuovo prodotto!", ko: "새 제품을 확인하세요!"
        },
        url: "https://example.com",
        imageSrc: "https://via.placeholder.com/32"
    },
    big: {
        text: {
            en: "Join our community!", es: "¡Únete a nuestra comunidad!", zh: "加入我们的社区！", hi: "हमारे समुदाय में शामिल हों!",
            ru: "Присоединяйтесь к нашему сообществу!", fr: "Rejoignez notre communauté !", de: "Treten Sie unserer Gemeinschaft bei!",
            ja: "コミュニティに参加しよう！", pt: "Junte-se à nossa comunidade!", ar: "انضم إلى مجتمعنا!", it: "Unisciti alla nostra comunità!", ko: "커뮤니티에 가입하세요!"
        },
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
        hologram: "Hologram 🌈", steampunk: "Steampunk 🕰️", aurora: "Aurora 🌠", matrix: "Matrix 💾", zen: "Zen 🌿",
        cyberwave: "Cyberwave 🌊", modern: "Modern 🏙️"
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
        hologram: "Holograma 🌈", steampunk: "Steampunk 🕰️", aurora: "Aurora 🌠", matrix: "Matrix 💾", zen: "Zen 🌿",
        cyberwave: "Ciberonda 🌊", modern: "Moderno 🏙️"
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
        hologram: "全息 🌈", steampunk: "蒸汽朋克 🕰️", aurora: "极光 🌠", matrix: "矩阵 💾", zen: "禅 🌿",
        cyberwave: "赛博波 🌊", modern: "现代 🏙️"
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
        hologram: "होलोग्राम 🌈", steampunk: "स्टीमपंक 🕰️", aurora: "ऑरोरा 🌠", matrix: "मैट्रिक्स 💾", zen: "ज़ेन 🌿",
        cyberwave: "साइबरवेव 🌊", modern: "आधुनिक 🏙️"
    },
    ru: {
        site_name: "ИИ-Планировщик задач", title: "ИИ-Планировщик задач", welcome: "Привет! Я твой ИИ-планировщик задач.",
        step_tasks: "Введите задачи через запятую.", step_importances: "Укажите важность (низкая, средняя, высокая).",
        step_time: "Укажите время (ЧЧ:ММ - ЧЧ:ММ).", step_save: "Введите название плана.", placeholder_tasks: "Подготовить презентацию, Ответить на письма",
        placeholder_importances: "высокая, средняя, низкая", placeholder_time: "09:00 - 17:00", placeholder_save: "Мой план на день",
        continue: "Продолжить", back: "Назад", skip: "Пропустить", done: "Сохранить", success_message: "План создан!",
        history_title: "История планов", no_history: "Нет сохраненных планов.", clear_history: "Очистить историю",
        tasks_label: "Задачи", importances_label: "Важности", time_label: "Время", schedule_label: "Расписание",
        advice_label: "Совет", task_count: "Задач: {count}", error_tasks: "Введите хотя бы одну задачу.",
        error_importances: "Количество важностей должно совпадать с задачами.", error_time: "Используйте формат ЧЧ:ММ - ЧЧ:ММ.",
        error_save: "Введите название плана.", error_processing: "Ошибка обработки.", loading: "Загрузка...",
        language_title: "Выберите язык", style_title: "Выберите стиль", theme_title: "Переключить тему",
        minimal: "Минимализм 🌟", retro: "Ретро 🎉", cosmic: "Космос 🌌", cyberpunk: "Киберпанк 🌀", industrial: "Индастриал ⚙️",
        hologram: "Голограмма 🌈", steampunk: "Стимпанк 🕰️", aurora: "Аврора 🌠", matrix: "Матрица 💾", zen: "Дзен 🌿",
        cyberwave: "Киберволна 🌊", modern: "Модерн 🏙️"
    },
    fr: {
        site_name: "Planificateur de Tâches IA", title: "Planificateur de Tâches IA", welcome: "Bonjour ! Je suis votre planificateur de tâches IA.",
        step_tasks: "Entrez les tâches séparées par des virgules.", step_importances: "Spécifiez l'importance (faible, moyenne, élevée).",
        step_time: "Spécifiez l'heure (HH:MM - HH:MM).", step_save: "Entrez le nom du plan.", placeholder_tasks: "Préparer une présentation, Répondre aux emails",
        placeholder_importances: "élevée, moyenne, faible", placeholder_time: "09:00 - 17:00", placeholder_save: "Mon plan quotidien",
        continue: "Continuer", back: "Retour", skip: "Passer", done: "Sauvegarder", success_message: "Plan créé !",
        history_title: "Historique des Plans", no_history: "Aucun plan sauvegardé.", clear_history: "Effacer l'Historique",
        tasks_label: "Tâches", importances_label: "Importances", time_label: "Temps", schedule_label: "Emploi du temps",
        advice_label: "Conseil", task_count: "Tâches : {count}", error_tasks: "Entrez au moins une tâche.",
        error_importances: "Le nombre d'importances doit correspondre aux tâches.", error_time: "Utilisez le format HH:MM - HH:MM.",
        error_save: "Entrez un nom de plan.", error_processing: "Erreur de traitement.", loading: "Chargement...",
        language_title: "Sélectionner la Langue", style_title: "Sélectionner le Style", theme_title: "Changer de Thème",
        minimal: "Minimaliste 🌟", retro: "Rétro 🎉", cosmic: "Cosmique 🌌", cyberpunk: "Cyberpunk 🌀", industrial: "Industriel ⚙️",
        hologram: "Hologramme 🌈", steampunk: "Steampunk 🕰️", aurora: "Aurore 🌠", matrix: "Matrice 💾", zen: "Zen 🌿",
        cyberwave: "Cyberonde 🌊", modern: "Moderne 🏙️"
    },
    de: {
        site_name: "KI-Aufgabenplaner", title: "KI-Aufgabenplaner", welcome: "Hallo! Ich bin dein KI-Aufgabenplaner.",
        step_tasks: "Gib Aufgaben durch Kommas getrennt ein.", step_importances: "Gib die Wichtigkeit an (niedrig, mittel, hoch).",
        step_time: "Gib die Zeit an (HH:MM - HH:MM).", step_save: "Gib einen Namen für den Plan ein.", placeholder_tasks: "Präsentation vorbereiten, E-Mails beantworten",
        placeholder_importances: "hoch, mittel, niedrig", placeholder_time: "09:00 - 17:00", placeholder_save: "Mein Tagesplan",
        continue: "Weiter", back: "Zurück", skip: "Überspringen", done: "Speichern", success_message: "Plan erstellt!",
        history_title: "Planverlauf", no_history: "Keine gespeicherten Pläne.", clear_history: "Verlauf löschen",
        tasks_label: "Aufgaben", importances_label: "Wichtigkeiten", time_label: "Zeit", schedule_label: "Zeitplan",
        advice_label: "Rat", task_count: "Aufgaben: {count}", error_tasks: "Gib mindestens eine Aufgabe ein.",
        error_importances: "Die Anzahl der Wichtigkeiten muss mit den Aufgaben übereinstimmen.", error_time: "Verwende das Format HH:MM - HH:MM.",
        error_save: "Gib einen Namen für den Plan ein.", error_processing: "Verarbeitungsfehler.", loading: "Laden...",
        language_title: "Sprache auswählen", style_title: "Stil auswählen", theme_title: "Thema wechseln",
        minimal: "Minimalistisch 🌟", retro: "Retro 🎉", cosmic: "Kosmisch 🌌", cyberpunk: "Cyberpunk 🌀", industrial: "Industriell ⚙️",
        hologram: "Hologramm 🌈", steampunk: "Steampunk 🕰️", aurora: "Aurora 🌠", matrix: "Matrix 💾", zen: "Zen 🌿",
        cyberwave: "Cyberwelle 🌊", modern: "Modern 🏙️"
    },
    ja: {
        site_name: "AIタスクプランナー", title: "AIタスクプランナー", welcome: "こんにちは！私はあなたのAIタスクプランナーです。",
        step_tasks: "カンマで区切られたタスクを入力してください。", step_importances: "重要度を指定してください（低、中、高）。",
        step_time: "時間を指定してください（HH:MM - HH:MM）。", step_save: "プランの名前を入力してください。", placeholder_tasks: "プレゼンテーションの準備、メールの返信",
        placeholder_importances: "高、中、低", placeholder_time: "09:00 - 17:00", placeholder_save: "私のデイリープラン",
        continue: "続ける", back: "戻る", skip: "スキップ", done: "保存", success_message: "プランが作成されました！",
        history_title: "プラン履歴", no_history: "保存されたプランはありません。", clear_history: "履歴をクリア",
        tasks_label: "タスク", importances_label: "重要度", time_label: "時間", schedule_label: "スケジュール",
        advice_label: "アドバイス", task_count: "タスク数：{count}", error_tasks: "少なくとも1つのタスクを入力してください。",
        error_importances: "重要度の数はタスクと一致する必要があります。", error_time: "HH:MM - HH:MMの形式を使用してください。",
        error_save: "プランの名前を入力してください。", error_processing: "処理エラー。", loading: "読み込み中...",
        language_title: "言語を選択", style_title: "スタイルを選択", theme_title: "テーマを切り替え",
        minimal: "ミニマル 🌟", retro: "レトロ 🎉", cosmic: "コズミック 🌌", cyberpunk: "サイバーパンク 🌀", industrial: "インダストリアル ⚙️",
        hologram: "ホログラム 🌈", steampunk: "スチームパンク 🕰️", aurora: "オーロラ 🌠", matrix: "マトリックス 💾", zen: "禅 🌿",
        cyberwave: "サイバーウェーブ 🌊", modern: "モダン 🏙️"
    },
    pt: {
        site_name: "Planejador de Tarefas IA", title: "Planejador de Tarefas IA", welcome: "Olá! Eu sou seu planejador de tarefas IA.",
        step_tasks: "Insira tarefas separadas por vírgulas.", step_importances: "Especifique a importância (baixa, média, alta).",
        step_time: "Especifique o horário (HH:MM - HH:MM).", step_save: "Insira o nome do plano.", placeholder_tasks: "Preparar apresentação, Responder e-mails",
        placeholder_importances: "alta, média, baixa", placeholder_time: "09:00 - 17:00", placeholder_save: "Meu plano diário",
        continue: "Continuar", back: "Voltar", skip: "Pular", done: "Salvar", success_message: "Plano criado!",
        history_title: "Histórico de Planos", no_history: "Nenhum plano salvo.", clear_history: "Limpar Histórico",
        tasks_label: "Tarefas", importances_label: "Importâncias", time_label: "Horário", schedule_label: "Cronograma",
        advice_label: "Conselho", task_count: "Tarefas: {count}", error_tasks: "Insira pelo menos uma tarefa.",
        error_importances: "O número de importâncias deve corresponder às tarefas.", error_time: "Use o formato HH:MM - HH:MM.",
        error_save: "Insira um nome para o plano.", error_processing: "Erro de processamento.", loading: "Carregando...",
        language_title: "Selecionar Idioma", style_title: "Selecionar Estilo", theme_title: "Alternar Tema",
        minimal: "Minimalista 🌟", retro: "Retrô 🎉", cosmic: "Cósmico 🌌", cyberpunk: "Ciberpunk 🌀", industrial: "Industrial ⚙️",
        hologram: "Holograma 🌈", steampunk: "Steampunk 🕰️", aurora: "Aurora 🌠", matrix: "Matrix 💾", zen: "Zen 🌿",
        cyberwave: "Ciberonda 🌊", modern: "Moderno 🏙️"
    },
    ar: {
        site_name: "مخطط المهام بالذكاء الاصطناعي", title: "مخطط المهام بالذكاء الاصطناعي", welcome: "مرحبًا! أنا مخطط المهام بالذكاء الاصطناعي الخاص بك.",
        step_tasks: "أدخل المهام مفصولة بفواصل.", step_importances: "حدد الأهمية (منخفضة، متوسطة، عالية).",
        step_time: "حدد الوقت (HH:MM - HH:MM).", step_save: "أدخل اسم الخطة.", placeholder_tasks: "إعداد العرض التقديمي، الرد على البريد الإلكتروني",
        placeholder_importances: "عالية، متوسطة، منخفضة", placeholder_time: "09:00 - 17:00", placeholder_save: "خطتي اليومية",
        continue: "متابعة", back: "رجوع", skip: "تخطي", done: "حفظ", success_message: "تم إنشاء الخطة!",
        history_title: "تاريخ الخطط", no_history: "لا توجد خطط محفوظة.", clear_history: "مسح التاريخ",
        tasks_label: "المهام", importances_label: "الأهمية", time_label: "الوقت", schedule_label: "الجدول",
        advice_label: "نصيحة", task_count: "المهام: {count}", error_tasks: "أدخل مهمة واحدة على الأقل.",
        error_importances: "يجب أن يتطابق عدد الأهميات مع المهام.", error_time: "استخدم التنسيق HH:MM - HH:MM.",
        error_save: "أدخل اسمًا للخطة.", error_processing: "خطأ في المعالجة.", loading: "جار التحميل...",
        language_title: "اختر اللغة", style_title: "اختر الأسلوب", theme_title: "تبديل الثيم",
        minimal: "بسيط 🌟", retro: "رجعي 🎉", cosmic: "كوني 🌌", cyberpunk: "سايبربانك 🌀", industrial: "صناعي ⚙️",
        hologram: "هولوغرام 🌈", steampunk: "ستيمبانك 🕰️", aurora: "أورورا 🌠", matrix: "ماتريكس 💾", zen: "زِن 🌿",
        cyberwave: "سايبر ويف 🌊", modern: "عصري 🏙️"
    },
    it: {
        site_name: "Pianificatore di Compiti IA", title: "Pianificatore di Compiti IA", welcome: "Ciao! Sono il tuo pianificatore di compiti IA.",
        step_tasks: "Inserisci i compiti separati da virgole.", step_importances: "Specifica l'importanza (bassa, media, alta).",
        step_time: "Specifica l'orario (HH:MM - HH:MM).", step_save: "Inserisci il nome del piano.", placeholder_tasks: "Preparare una presentazione, Rispondere alle email",
        placeholder_importances: "alta, media, bassa", placeholder_time: "09:00 - 17:00", placeholder_save: "Il mio piano giornaliero",
        continue: "Continua", back: "Indietro", skip: "Salta", done: "Salva", success_message: "Piano creato!",
        history_title: "Cronologia dei Piani", no_history: "Nessun piano salvato.", clear_history: "Cancella Cronologia",
        tasks_label: "Compiti", importances_label: "Importanza", time_label: "Orario", schedule_label: "Programma",
        advice_label: "Consiglio", task_count: "Compiti: {count}", error_tasks: "Inserisci almeno un compito.",
        error_importances: "Il numero di importanze deve corrispondere ai compiti.", error_time: "Usa il formato HH:MM - HH:MM.",
        error_save: "Inserisci un nome per il piano.", error_processing: "Errore di elaborazione.", loading: "Caricamento...",
        language_title: "Seleziona Lingua", style_title: "Seleziona Stile", theme_title: "Cambia Tema",
        minimal: "Minimalista 🌟", retro: "Retrò 🎉", cosmic: "Cosmico 🌌", cyberpunk: "Cyberpunk 🌀", industrial: "Industriale ⚙️",
        hologram: "Ologramma 🌈", steampunk: "Steampunk 🕰️", aurora: "Aurora 🌠", matrix: "Matrix 💾", zen: "Zen 🌿",
        cyberwave: "Ciberonda 🌊", modern: "Moderno 🏙️"
    },
    ko: {
        site_name: "AI 작업 플래너", title: "AI 작업 플래너", welcome: "안녕하세요! 저는 당신의 AI 작업 플래너입니다.",
        step_tasks: "쉼표로 구분된 작업을 입력하세요.", step_importances: "중요도를 지정하세요 (낮음, 보통, 높음).",
        step_time: "시간을 지정하세요 (HH:MM - HH:MM).", step_save: "계획 이름을 입력하세요.", placeholder_tasks: "프레젠테이션 준비, 이메일 답장",
        placeholder_importances: "높음, 보통, 낮음", placeholder_time: "09:00 - 17:00", placeholder_save: "나의 일일 계획",
        continue: "계속", back: "뒤로", skip: "건너뛰기", done: "저장", success_message: "계획이 생성되었습니다!",
        history_title: "계획 기록", no_history: "저장된 계획이 없습니다.", clear_history: "기록 지우기",
        tasks_label: "작업", importances_label: "중요도", time_label: "시간", schedule_label: "일정",
        advice_label: "조언", task_count: "작업: {count}", error_tasks: "최소한 하나의 작업을 입력하세요.",
        error_importances: "중요도의 수는 작업과 일치해야 합니다.", error_time: "HH:MM - HH:MM 형식을 사용하세요.",
        error_save: "계획 이름을 입력하세요.", error_processing: "처리 오류.", loading: "로딩 중...",
        language_title: "언어 선택", style_title: "스타일 선택", theme_title: "테마 전환",
        minimal: "미니멀 🌟", retro: "레트로 🎉", cosmic: "코스믹 🌌", cyberpunk: "사이버펑크 🌀", industrial: "인더스트리얼 ⚙️",
        hologram: "홀로그램 🌈", steampunk: "스팀펑크 🕰️", aurora: "오로라 🌠", matrix: "매트릭스 💾", zen: "젠 🌿",
        cyberwave: "사이버웨이브 🌊", modern: "모던 🏙️"
    }
};

const themeIcons = {
    minimal: '🌟', retro: '🎉', cosmic: '🌌', cyberpunk: '🌀', industrial: '⚙️', hologram: '🌈', steampunk: '🕰️',
    aurora: '🌠', matrix: '💾', zen: '🌿', cyberwave: '🌊', modern: '🏙️'
};

const toolbarIcons = {
    minimal: { lang: '🌐', history: '⌛', planner: '📋', theme: isDark => isDark ? '☀️' : '🌙', style: '🎨' },
    retro: { lang: '📡', history: '🕰️', planner: '📅', theme: isDark => isDark ? '☀️' : '🌙', style: '🖌️' },
    cosmic: { lang: '🪐', history: '🌠', planner: '🚀', theme: isDark => isDark ? '☀️' : '🌙', style: '🌌' },
    cyberpunk: { lang: 'LANG', history: 'HIST', planner: 'PLAN', theme: isDark => isDark ? 'LIGHT' : 'DARK', style: 'STYLE' },
    industrial: { lang: '🌍', history: '🛠️', planner: '🏭', theme: isDark => isDark ? '☀️' : '🌙', style: '🔩' },
    hologram: { lang: '🔮', history: '💿', planner: '📱', theme: isDark => isDark ? '☀️' : '🌙', style: '✨' },
    steampunk: { lang: '🧭', history: '⏳', planner: '📜', theme: isDark => isDark ? '☀️' : '🌙', style: '⚙️' },
    aurora: { lang: '🌍', history: '🌌', planner: '🌠', theme: isDark => isDark ? '☀️' : '🌙', style: '🌈' },
    matrix: { lang: '💾', history: '📟', planner: '⌨️', theme: isDark => isDark ? 'LIGHT' : 'DARK', style: '🖥️' },
    zen: { lang: '🌿', history: '🕉️', planner: '☯️', theme: isDark => isDark ? '☀️' : '🌙', style: '🧘' },
    cyberwave: { lang: '🌐', history: '📡', planner: '📲', theme: isDark => isDark ? '☀️' : '🌙', style: '🌊' },
    modern: { lang: '🌐', history: '⌛', planner: '📋', theme: isDark => isDark ? '☀️' : '🌙', style: '🎨' }
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
    const icons = toolbarIcons[currentStyle];
    document.getElementById('lang-btn').textContent = icons.lang;
    document.getElementById('history-btn').textContent = icons.history;
    document.getElementById('planner-btn').textContent = icons.planner;
    document.getElementById('theme-btn').textContent = typeof icons.theme === 'function' ? icons.theme(isDarkMode) : icons.theme;
    document.getElementById('style-btn').textContent = icons.style;
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
    bigAd.innerHTML = adConfig.big.text[currentLang] ? `<img src="${adConfig.big.imageSrc}" class="w-12 h-12 rounded"><span class="text-gray-700">${adConfig.big.text[currentLang]}</span>` : `<span class="text-gray-700">${translations[currentLang].no_ad || 'No ads!'}</span>`;
    bigAd.className = adConfig.big.text[currentLang] ? 'w-full max-w-md mt-4 bg-yellow-100 rounded-lg shadow p-4 flex items-center space-x-4 h-24 slide-in' : 'w-full max-w-md mt-4 bg-yellow-100 rounded-lg shadow p-4 flex items-center space-x-4 h-24 slide-in ad-empty';
    bigAd.onclick = adConfig.big.url ? () => window.open(adConfig.big.url, '_blank') : null;

    const smallAd = document.getElementById('small-ad');
    smallAd.innerHTML = adConfig.small.text[currentLang] ? `<img src="${adConfig.small.imageSrc}" class="w-8 h-8 rounded"><span class="text-gray-700 text-sm">${adConfig.small.text[currentLang]}</span>` : `<span class="text-gray-700 text-sm">${translations[currentLang].no_ad || 'No ads!'}</span>`;
    smallAd.className = adConfig.small.text[currentLang] ? 'w-full max-w-md mt-4 mb-4 bg-yellow-100 rounded-lg shadow p-4 flex items-center space-x-4 h-16 slide-in' : 'w-full max-w-md mt-4 mb-4 bg-yellow-100 rounded-lg shadow p-4 flex items-center space-x-4 h-16 slide-in ad-empty';
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
        const priorityMap = {
            high: 3, alta: 3, 高: 3, उच्च: 3, высокая: 3, élevée: 3, hoch: 3, 高: 3, alta: 3, عالية: 3, alta: 3, 높음: 3,
            medium: 2, media: 2, 中: 2, मध्यम: 2, средняя: 2, moyenne: 2, mittel: 2, 中: 2, média: 2, متوسطة: 2, media: 2, 보통: 2,
            low: 1, baja: 1, 低: 1, निम्न: 1, низкая: 1, faible: 1, niedrig: 1, 低: 1, baixa: 1, منخفضة: 1, bassa: 1, 낮음: 1
        };
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
            contentDiv.innerHTML = `<p class="mb-2">${lang.step_importances}</p><input id="importances