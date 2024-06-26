'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const LOCAL_STORAGE_KEY = 'tasks';
    const LOCAL_STORAGE_KEY_TOMORROW = 'tasks-tomorrow';
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const tasksList = document.getElementById('tasks');
    const tomorrowTaskForm = document.getElementById('tomorrow-task-form');
    const tomorrowTaskInput = document.getElementById('tomorrow-task-input');
    const tomorrowTasksList = document.getElementById('tomorrow-tasks');
    const mergeButton = document.getElementById('merge-tasks');
    const fetchButton = document.getElementById('fetch-tasks'); // New fetch tasks button

    // Laad taken van LocalStorage
    loadTasks();
    loadTomorrowTasks();

    // Voeg een taak toe aan de lijst
    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = ''; // Leeg invoerveld
            saveTasks();
        } else {
            alert('Please enter a task');
        }
    });

    tomorrowTaskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const taskText = tomorrowTaskInput.value.trim();
        
        if (taskText !== '') {
            addTomorrowTask(taskText);
            tomorrowTaskInput.value = ''; // Leeg invoerveld
            saveTomorrowTasks();
        } else {
            alert('Please enter a task');
        }
    });

    mergeButton.addEventListener('click', () => {
        const tomorrowTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TOMORROW)) || [];
        addMergedTasksToList(tomorrowTasks);
        clearTomorrowTasks();
    });

    fetchButton.addEventListener('click', () => {
        fetchAndConsumeTasks();
    });

    function addTask(taskText, completed = false, list = tasksList) {
        const taskItem = document.createElement('li');
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = `${taskText}`;
        if (completed) {
            taskSpan.classList.add('completed');
        }
        taskSpan.addEventListener('click', () => {
            taskSpan.classList.toggle('completed');
            if (list === tasksList) {
                saveTasks();
            } else {
                saveTomorrowTasks();
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.addEventListener('click', () => {
            list.removeChild(taskItem);
            if (list === tasksList) {
                saveTasks();
            } else {
                saveTomorrowTasks();
            }
        });

        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteButton);
        list.appendChild(taskItem);
    }

    function addTomorrowTask(taskText, completed = false) {
        addTask(taskText, completed, tomorrowTasksList);
    }

    function saveTasks() {
        return new Promise((resolve, reject) => {
            try {
                const tasks = [];
                tasksList.querySelectorAll('li').forEach(taskItem => {
                    const taskSpan = taskItem.querySelector('span');
                    tasks.push({
                        text: taskSpan.textContent,
                        completed: taskSpan.classList.contains('completed')
                    });
                });
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }
    
    function loadTasks() {
        return new Promise((resolve, reject) => {
            try {
                const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
                tasks.forEach(({text, completed}) => {
                    addTask(text, completed);
                });
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }

    async function fetchAndConsumeTasks() {
        try {
            // Wacht tot de taken zijn opgehaald voordat je doorgaat
            const tasks = await fetchTasks();
            
            // Voeg de taken toe aan de lijst
            tasks.forEach(cart => {
                cart.products.forEach(product => {
                    addTask(`Product ID: ${product.productId}, Quantity: ${product.quantity}`, false);
                });
            });
            
            console.log('Tasks consumed successfully!');
        } catch (error) {
            // Vang eventuele fouten op die optreden tijdens het ophalen of verwerken van de taken
            console.error('Error consuming tasks:', error);
        }
    }
     
    function fetchTasks() {
        return fetch('https://fakestoreapi.com/carts?limit=5')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Unable to fetch tasks');
                }
                return res.json();
            })
            .then(json => {
                console.log(json); // Log de data om te controleren wat er terugkomt
                return json;
            });
    }
    
    function saveTomorrowTasks() {
        const tasks = [];
        tomorrowTasksList.querySelectorAll('li').forEach(taskItem => {
            const taskSpan = taskItem.querySelector('span');
            tasks.push({
                text: taskSpan.textContent,
                completed: taskSpan.classList.contains('completed')
            });
        });
        localStorage.setItem(LOCAL_STORAGE_KEY_TOMORROW, JSON.stringify(tasks));
    }

    function loadTomorrowTasks() {
        const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TOMORROW)) || [];
        tasks.forEach(({ text, completed }) => {
            addTask(text, completed, tomorrowTasksList);
        });
    }

    function clearTomorrowTasks() {
        localStorage.removeItem(LOCAL_STORAGE_KEY_TOMORROW);
        while (tomorrowTasksList.firstChild) {
            tomorrowTasksList.removeChild(tomorrowTasksList.firstChild);
        }
    }

    // Voeg samengevoegde taken toe aan de lijst
    function addMergedTasksToList(tasks) {
        tasks.forEach(task => addTask(task.text, task.completed));
        saveTasks(); // Sla de samengevoegde taken op in LocalStorage
    }

    function mergeTasks(...taskArrays) {
        return [].concat(...taskArrays);
    }
});
