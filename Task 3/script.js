const taskInput = document.getElementById('taskInput');
const pendingTasksList = document.getElementById('pendingTasks');
const completedTasksList = document.getElementById('completedTasks');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="completeTask(this)">Complete</button>
        `;
        pendingTasksList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function completeTask(button) {
    const taskItem = button.parentElement;
    const taskText = taskItem.querySelector('span').textContent;
    taskItem.remove();

    const completedTaskItem = document.createElement('li');
    completedTaskItem.innerHTML = `
        <span class="completed">${taskText}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;
    completedTasksList.appendChild(completedTaskItem);
}

function removeTask(button) {
    const completedTaskItem = button.parentElement;
    completedTaskItem.remove();
}

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
