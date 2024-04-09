
const form = document.querySelector('form');
const inp = document.querySelector('input');
const btn = document.querySelector('button');
const taskList = document.querySelector('.tasks__list');

if(localStorage.test) {
    taskList.innerHTML = localStorage.test;
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
        
        form.reset();

        taskRemove = document.querySelectorAll('.task__remove')
        taskRemove.forEach((el) => {
            el.addEventListener('click', () => {
                el.parentElement.remove();
                localStorage.test = document.querySelector('.tasks__list').innerHTML;
            })
        })    
        

    localStorage.test = document.querySelector('.tasks__list').innerHTML;
})