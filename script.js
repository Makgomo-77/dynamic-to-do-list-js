// Load tasks from Local Storage
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    storedTasks.forEach(taskText => addTask(taskText, false));
}

// Add a new task
function addTask(taskText, save = true) {

    const taskList = document.getElementById('taskList');
const taskInput =
document.getElementById ('taskInput')

   const li = document.createElement('li');
    li.textContent = taskText;

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
        removeTaskFromStorage(taskText);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Save to localStorage
    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}

// Remove task from Local Storage
function removeTaskFromStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
}

// Event listener for adding a task
document.getElementById('addButton').addEventListener('click', () => {
    const taskInput  = document.getElementById('taskInput');
    if (input.value.trim() !== '') {
        addTask(input.value.trim());
        input.value = '';
    }
});

// Load tasks on page load
document.addEventListener('DOMContentLoaded', loadTasks);
function loadTask() {
    const storedTask = JSON.parse(localStorage.getItem('task') || '[]');

