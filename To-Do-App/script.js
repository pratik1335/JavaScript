const taskInput = document.getElementById('task-input')
const addTaskBtn = document.getElementById('add-task-btn')

const tasks = [];

addTaskBtn.addEventListener('click', () => {
    let taskText = taskInput.value.trim();  // grab the input

    // console.log(taskText);
    
    if(taskText === "") return;

    const task = {
        id : Date.now(),
        taskName: taskText,
        isCompleted: false
    }

    tasks.push(task);

    console.log(tasks);
    
})