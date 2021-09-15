// Bring everything in.

const userInput = document.querySelector('#userInput');

const addTaskBtn = document.querySelector('#add-task');
const removeTaskBtn = document.querySelector('#remove-task');
const removeTasksBtn = document.querySelector('#remove-tasks');

const taskContainer = document.querySelector('.task-container');

const item = document.querySelector('.item');

// Execute a function to run all event listeners simultaneously.

loadEventListeners();

function loadEventListeners() {

  // Adding a task

  addTaskBtn.addEventListener('click', addTask);

  // Removing a task

  removeTaskBtn.addEventListener('click', removeTask);

  // Removing all tasks

  removeTasksBtn.addEventListener('click', removeTasks);

  // Marking a task as completed and confirming before removal

  taskContainer.addEventListener('click', completeTask);

}

// Add task

function addTask() {
  const li = document.createElement('li');

  li.className = 'item';

  taskContainer.appendChild(li);

  const text = document.createTextNode(userInput.value);

  li.appendChild(text);

  userInput.value = '';
};

// Remove task and clear all tasks

function removeTask() {
  taskContainer.lastChild.remove();
}

function removeTasks() {
  taskContainer.textContent = '';
}

// Complete task and confirm

function completeTask(e) {
  if (e.target.classList.contains('item')) {
    e.target.style.textDecoration = 'line-through';

    if (confirm('Great! Confirm and remove task?')) {
      e.target.classList.toggle('done');
    }

    if (e.target.classList.contains('done')) {
      e.target.remove();
    }
  }
}