const tasks = [];

function addTask(id, title, date) {
    const task = {
        id,
        title,
        date,
        status: 'not done'
    };
    tasks.push(task);
    console.log(`Task "${title}" added successfully`);
}

function markAsCompleted(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.status = 'done';
        console.log(`Task "${task.title}" marked as completed`);
    } else {
        console.error(`Task with ID ${id} not found`);
    }
}

function markAllAsCompleted() {
    const pending = tasks.filter(t => t.status === 'not done');
    pending.forEach(task => task.status = 'done');
    console.log(`Pending tasks marked as completed`);
}

function deleteTask(id) {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1)[0];
        console.log(`Task "${deletedTask.title}" deleted successfully`);
    } else {
        console.error(`Task with ID ${id} not found`);
    }
}

function deleteAllTasks() {
    tasks.length = 0;
    console.log(`All tasks deleted successfully`);
}

function listTasks() {
    if (tasks.length === 0) {
        console.log('No task found');
        return;
    }
    
    console.log('\n=== TO-DO LIST ===')
    tasks.forEach(task => {
        const statusText = task.status === 'done' ? 'DONE' : 'PENDING';
        console.log(`${task.title} | ${task.date} | ${statusText}`);
    });
    console.log('==================\n');
}

const taskOne = { id: 1, title: 'Do homework', date: '2025-09-19' };
const taskTwo = { id: 2, title: 'Go to gym', date: '2025-09-19' };
const taskThree = { id: 3, title: 'Buy groceries', date: '2025-09-20' };

addTask(taskOne.id, taskOne.title, taskOne.date);
addTask(taskTwo.id, taskTwo.title, taskTwo.date);
addTask(taskThree.id, taskThree.title, taskThree.date);

listTasks();

markAsCompleted(1);

listTasks();

markAllAsCompleted();

listTasks();

deleteTask(2);

listTasks();

deleteAllTasks();

listTasks();