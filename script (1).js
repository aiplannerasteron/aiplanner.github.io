document.addEventListener('DOMContentLoaded', () => {
    // Переключение разделов
    const navLinks = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(sectionId).classList.add('active');
            
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Модальное окно
    const addTaskBtn = document.querySelector('.add-task-btn');
    const modal = document.querySelector('.modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const taskForm = document.getElementById('task-form');
    const taskList = document.querySelector('.task-list');

    addTaskBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        taskForm.reset();
    });

    // Добавление задачи
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('task-title').value;
        const desc = document.getElementById('task-desc').value;
        const due = document.getElementById('task-due').value;
        const priority = document.getElementById('task-priority').value;

        const task = document.createElement('div');
        task.className = 'task';
        task.innerHTML = `
            <input type="checkbox" id="task-${Date.now()}">
            <label>${title}</label>
            <span class="due-date">${due ? 'Дедлайн: ' + due : ''}</span>
            <button class="edit-btn">Редактировать</button>
        `;

        taskList.appendChild(task);
        modal.classList.add('hidden');
        taskForm.reset();

        // Сохранение в LocalStorage
        saveTask({ title, desc, due, priority });
    });

    // Фильтры (заглушка)
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Логика фильтрации будет добавлена позже
        });
    });

    // Сохранение задач
    function saveTask(task) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Загрузка задач
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            const taskEl = document.createElement('div');
            taskEl.className = 'task';
            taskEl.innerHTML = `
                <input type="checkbox" id="task-${Date.now()}">
                <label>${task.title}</label>
                <span class="due-date">${task.due ? 'Дедлайн: ' + task.due : ''}</span>
                <button class="edit-btn">Редактировать</button>
            `;
            taskList.appendChild(taskEl);
        });
    }

    loadTasks();
});