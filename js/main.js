'use strict'
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const tasksList = document.getElementById('tasks');

    // Laad taken van LocalStorage
    loadTasks();

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = ''; // Leeg invoerveld
            saveTasks();
        }
    });

    function addTask(taskText, completed = false) {
        const taskItem = document.createElement('li');
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        if (completed) {
            taskSpan.classList.add('completed');
        }
        taskSpan.addEventListener('click', () => {
            taskSpan.classList.toggle('completed');
            saveTasks();
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.addEventListener('click', () => {
            tasksList.removeChild(taskItem);
            saveTasks();
        });

        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteButton);
        tasksList.appendChild(taskItem);
    }

    function saveTasks() {
        const tasks = [];
        tasksList.querySelectorAll('li').forEach(taskItem => {
            const taskSpan = taskItem.querySelector('span');
            tasks.push({
                text: taskSpan.textContent,
                completed: taskSpan.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            addTask(task.text, task.completed);
        });
    }
});



