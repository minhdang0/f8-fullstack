function afterTask() {
    const API_URL = 'http://localhost:3000/tasks';
    const TOKEN = localStorage.getItem('token'); 
    let editingTaskId = null; 

    function fetchTasks() {
        fetch(API_URL, {
            headers: { 'Authorization': `Bearer ${TOKEN}` }
        })
        .then(response => response.json())
        .then(tasks => renderTasks(tasks));
    }

    function renderTasks(tasks) {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';
        tasks.forEach(task => {
            taskList.innerHTML += `
                <tr>
                    <td>${task.id}</td>
                    <td>${task.title}</td>
                    <td>${task.status}</td>
                    <td>${task.priority}</td>
                    <td>
                        <button onclick="editTask('${task.id}')">Edit</button>
                        <button onclick="deleteTask('${task.id}')">Delete</button>
                    </td>
                </tr>
            `;
        });
    }

    const userInfo = JSON.parse(localStorage.getItem("users") || "{}");
    const userId = userInfo?.id;

    function addTask() {
        const title = document.getElementById('task-title').value;
        const status = document.getElementById('task-status').value;
        const priority = document.getElementById('task-priority').value;
        
        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            },
            body: JSON.stringify({ title, status, priority, userId })
        }).then(response => response.json())
        .then(() => {
            fetchTasks();
            closeTaskModal();
        });
    }

    function editTask(taskId) {
        console.log("Editing task:", taskId);
        fetch(`${API_URL}/${taskId}`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${TOKEN}` }
        }).then(response => response.json())
        .then(task => {
            openTaskModal();
            editingTaskId = task.id;
            
            document.getElementById('task-title').value = task.title;
            document.getElementById('task-status').value = task.status;
            document.getElementById('task-priority').value = task.priority;
        });
    }

    function updateTask() {
        if (!editingTaskId) return; 

        const title = document.getElementById('task-title').value;
        const status = document.getElementById('task-status').value;
        const priority = document.getElementById('task-priority').value;
    
        fetch(`${API_URL}/${editingTaskId}`, {
            method: 'PATCH',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}` 
            },
            body: JSON.stringify({ title, status, priority })
        })
        .then(response => response.json())
        .then(() => {
            fetchTasks();
            closeTaskModal();
        });
    }

    function deleteTask(taskId) {
        fetch(`${API_URL}/${taskId}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${TOKEN}` }
        })
        .then(() => fetchTasks());
    }

    function openTaskModal() {
        document.getElementById('task-modal').style.display = 'block';
        document.getElementById('task-title').value = "";
        document.getElementById('task-status').value = "";
        document.getElementById('task-priority').value = "";
        editingTaskId = null; 
    }

    function closeTaskModal() {
        document.getElementById('task-modal').style.display = 'none';
    }

    document.getElementById('add-task-btn').addEventListener('click', openTaskModal);
    document.getElementById('save-task-btn').addEventListener('click', function() {
        if (editingTaskId) {
            updateTask(); 
        } else {
            addTask(); 
        }
    });

    fetchTasks();

    window.closeTaskModal = closeTaskModal;
    window.deleteTask = deleteTask;
    window.editTask = editTask;
}

export default afterTask;
