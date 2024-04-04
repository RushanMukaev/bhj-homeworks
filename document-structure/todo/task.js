
const form = document.querySelector('form');
const inp = document.querySelector('input');
const btn = document.querySelector('button');
const taskList = document.querySelector('.tasks__list');

if(localStorage.test) {
    taskList.innerHTML = localStorage.test;
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if(inp.value) {
        let task = document.createElement('div');
        task.classList.add('task');
        
        let taskTittle = document.createElement('div');
        taskTittle.classList.add('task__title');
        taskTittle.textContent = `${inp.value}`;
        task.appendChild(taskTittle);
        
        let taskRemove = document.createElement('a');
        taskRemove.classList.add('task__remove');
        taskRemove.href = '#';
        taskRemove.innerHTML = '&times;'
        taskRemove.addEventListener('click', () => {
            task.remove();
        })
        task.appendChild(taskRemove);
        
        taskList.appendChild(task);
        form.reset();
    }
    localStorage.test = document.querySelector('.tasks__list').innerHTML;
})