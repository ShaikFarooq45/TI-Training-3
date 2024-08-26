document.getElementById('addButton').addEventListener('click', addTask);

function addTask() {
const taskInput = document.getElementById('taskInput');
const taskText = taskInput.value.trim();

if (taskText === '') {
alert('Please enter a task.');
return;
}

const taskList = document.getElementById('taskList');
const li = document.createElement('li');
li.textContent = taskText;

const editButton = document.createElement('button');
editButton.textContent = 'Edit';
editButton.className = 'edit-button';
editButton.onclick = function() {
editTask(taskInput, li);
};

const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.className = 'delete-button';
deleteButton.onclick = function() {
taskList.removeChild(li);
};

li.appendChild(editButton);
li.appendChild(deleteButton);
taskList.appendChild(li);
taskInput.value = '';
}

function editTask(taskInput, li) {
const currentText = li.firstChild.textContent;
taskInput.value = currentText;

li.parentNode.removeChild(li);
}