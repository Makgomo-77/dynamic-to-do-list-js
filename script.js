function loadTask() {
    const storedTask = JSON.parse(localStorage.getItem('task') || '[]');
    storedTask.forEach(task => addTask(taskText, false));
}
function addTask(taskText, saveToLocalStorage = true) {
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);

    if (saveToLocalStorage) {
        const storedTask = JSON.parse(localStorage.getItem('task') || '[]');
        storedTask.push(taskText);
        localStorage.setItem('task', JSON.stringify(storedTask));
    }
document.addEventListener('DOMContentLoaded', () => { loadTask(); });
}
