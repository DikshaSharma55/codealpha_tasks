// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskItem = document.createElement('li');
    
    // Task text
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;
    taskTextSpan.classList.add('task-text');
    taskItem.appendChild(taskTextSpan);

    // Buttons container
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.onclick = () => editTask(taskItem, editBtn);
    buttonContainer.appendChild(editBtn);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => taskItem.remove();
    buttonContainer.appendChild(deleteBtn);

    taskItem.appendChild(buttonContainer);
    taskList.appendChild(taskItem);
    taskInput.value = '';
}

// Edit a task
function editTask(taskItem, editBtn) {
    const taskTextSpan = taskItem.querySelector('.task-text');
    const inputField = taskItem.querySelector('.task-input-field');

    if (editBtn.textContent === 'Edit') {
        // Switch to edit mode
        const input = document.createElement('input');
        input.type = 'text';
        input.value = taskTextSpan.textContent;
        input.classList.add('task-input-field');
        taskTextSpan.replaceWith(input);
        editBtn.textContent = 'Save';
    } else {
        // Save the updated text
        const updatedText = inputField.value.trim();

        if (updatedText === '') {
            alert('Task cannot be empty!');
            return;
        }

        const updatedSpan = document.createElement('span');
        updatedSpan.textContent = updatedText;
        updatedSpan.classList.add('task-text');
        inputField.replaceWith(updatedSpan);
        editBtn.textContent = 'Edit';
    }
}

// Event listeners
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
