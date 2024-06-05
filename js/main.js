'use strict'
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const tasksList = document.getElementById('tasks');

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = ''; //leeg maken van de input
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.addEventListener('click', () => {//functie wanneer een taak voltooid is
            tasksList.classList.toggle('completed');//door op de taak zelf te drukken wordt deze doorgestreept
        });

        const deleteButton = document.createElement('button'); //button om een taak te verwijderen
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            tasksList.removeChild(taskItem);
        });

        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteButton);
        tasksList.appendChild(taskItem);

    }
});



