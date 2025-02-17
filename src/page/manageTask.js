import '../css/task.css';
function manageTask () {
    return /*html*/ `
    <div class="title">
        <h1>PERSONAL TASK MANAGER</h1>
        
    </div>
    <div class="tasks">
        <button id="add-task-btn">Add Task</button>
        <table border="1">
            <thead>
                <tr>
                    <th width="5%">STT</th>
                    <th>Title</th>
                    <th width="10%">Status</th>
                    <th width="10%">Priority</th>
                    <th width="13%">Actions</th>
                </tr>
            </thead>
            <tbody id="task-list"></tbody>
        </table>
    </div>
    <div id="task-modal" class="modal">
        <div class="modal-content">
            <h2>Add Task</h2>
            <label>Title:</label>
            <input type="text" id="task-title" required />
            <label>Status:</label>
            <select id="task-status">
                <option value="todo">Todo</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
            </select>
            <label>Priority:</label>
            <select id="task-priority">
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
            </select>
            <button id="save-task-btn">Save</button>
            <button onclick="closeTaskModal()">Cancel</button>
        </div>
    </div>
`;
}
export default manageTask;