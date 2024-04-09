

const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const btn = document.querySelector('.btn')
const row = document.querySelectorAll('.row');
const id = document.getElementById('user_id');
const welcome = document.querySelector('.welcome');
const quit = document.querySelector('.quit');

signin.classList.add('signin_active');


const forms = () => {
    const xhr = new XMLHttpRequest();

    row.forEach(item => {
        item.addEventListener('change', (event) => {
            event.target;
        })
    })

    const formData = new FormData(form);
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);

    xhr.addEventListener('load', function () {
        if (xhr.readyState === xhr.DONE) {
            let data = JSON.parse(xhr.response);
            localStorage.setItem('user_id', data.user_id);
            if (data.success === false) {
                alert('Неверный логин/пароль');
                form.reset()
            } else if (data.success === true) {
                id.textContent = data.user_id;
                welcome.classList.add('welcome_active');
                signin.classList.remove('signin_active');
            }
        }

    })
}

const userGreetings = () => {
    const result = localStorage.getItem('user_id');
    if (result === 'undefined') {
        welcome.classList.remove('welcome_active');
        signin.classList.add('signin_active');
    } else if (result) {
        id.textContent = result;
        welcome.classList.add('welcome_active');
        signin.classList.remove('signin_active');
    } else {
        return
    }
}

const btnForms = () => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        forms();
    });
}


btnForms();
userGreetings();

quit.addEventListener('click', () => {
    welcome.classList.remove('welcome_active');
    signin.classList.add('signin_active');
    form.reset();
    localStorage.clear();
})