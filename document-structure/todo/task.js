
const form = document.querySelector('form');
const inp = document.querySelector('input');
const btn = document.querySelector('button');
const taskList = document.querySelector('.tasks__list');
let taskListLocal = [];

if(localStorage.test) {
    taskListLocal = localStorage.test.split(', ');
    taskListLocal.forEach((el) => {
        taskList.insertAdjacentHTML('beforeend',
         `<div class="task">
            <div class="task__title">
              ${el}
            </div>
            <a href="#" class="task__remove">&times;</a>
          </div>`)
    })
}

let taskRemove = [];

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if(!inp.value.trim()) {
        return;
    }
    taskList.insertAdjacentHTML('beforeend',
         `<div class="task">
            <div class="task__title">
                ${inp.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
          </div>`)

    taskListLocal.push(inp.value)
        
    
    taskRemove = document.querySelectorAll('.task__remove')
    taskRemove.forEach((el) => {
        el.addEventListener('click', () => {
            el.parentElement.remove();
        })
    })    
    
    form.reset();

    localStorage.test = taskListLocal.join(', ');
})