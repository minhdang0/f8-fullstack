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
        console.log(tasks);
        taskList.innerHTML = '';
        if (!tasks || tasks.length === 0) {
            taskList.innerHTML += `<tr>
                                    <td colspan="5">No task</td>
                                  </tr>`;
            return;
        } 
        let taskRows = tasks.map((task, index) => `
        <tr style="background-color: ${task.status === 'done' ? 'yellowgreen' : '#fff'}">
            <td>${index + 1}</td>
            <td>${task.title}</td>
            <td>${task.status}</td>
            <td>${task.priority}</td>
            <td>
                <button onclick="editTask('${task.id}')">Edit</button>
                <button onclick="deleteTask('${task.id}')">Delete</button>
            </td>
        </tr>
         `).join('');

        taskList.innerHTML += taskRows;
           
    }
    function filterTask() {
        const statusElement = document.getElementById("status").value;
        console.log(statusElement);
        
        fetch(API_URL, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${TOKEN}` }
        }).then(response => response.json())
        .then(tasks => {
            const taskFiltered = tasks.filter(task => {
                if(statusElement === "all") return true;
                else return task.status === statusElement;
            })
            renderTasks(taskFiltered);
        }).catch(error => console.log(error));
    }
    const userInfo = JSON.parse(localStorage.getItem("user") || "{}");
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
            openTaskModal(task);
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

    async function deleteTask(taskId) {
        const isConfirm = confirm("Ban muon xoa task nay khong?");
        console.log(taskId);
        if(!isConfirm) {
            return;
        }
        try {
            const response = await fetch(`${API_URL}/${taskId}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${TOKEN}` }
            })
            if (!response.ok) {
                throw new Error(`Loi: ${response.status}`)
            }  
            alert("Xoa task thanh cong")   ;
            fetchTasks();
        }catch(error) {
            console.log(error);
        }
       
    }

    function openTaskModal(task = null) {
        document.getElementById('task-modal').style.display = 'block';
        const titleInput = document.getElementById('task-title');
        const statusInput = document.getElementById('task-status');
        const priorityInput = document.getElementById('task-priority');

        if (task) {
            editingTaskId = task.id ;
            titleInput.value = task.title;
            statusInput.value = task.status;
            priorityInput.value = task.priority;
            statusInput.disabled = false; 
        } else {
            editingTaskId = null;
            titleInput.value = "";
            statusInput.value = "todo";
            priorityInput.value = "";
            statusInput.disabled = true; 
        }

    }

    function closeTaskModal() {
        document.getElementById('task-modal').style.display = 'none';
    }

   
    document.getElementById('add-task-btn').addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openTaskModal() 
    });
    document.getElementById('save-task-btn').addEventListener('click', function() {
        if (editingTaskId) {
            updateTask(); 
        } else {
            addTask(); 
        }
    });
    document.getElementById('status').addEventListener("change", () => {
        filterTask();
    })
    fetchTasks();
    
    window.closeTaskModal = closeTaskModal;
    window.deleteTask = deleteTask;
    window.editTask = editTask;
    
}

export default afterTask;
