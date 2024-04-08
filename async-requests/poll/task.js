const xhr = new XMLHttpRequest();
const title = document.querySelector('.poll__title')
const answer = document.querySelector('.poll__answers')
xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        let parsed = JSON.parse(xhr.responseText).data;
        title.textContent = `${parsed.title}`
        console.log(parsed)
        parsed.answers.forEach((el) => {
            let btn = document.createElement('button')
            btn.classList.add('poll__answer')
            btn.textContent = el
            btn.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!')
            })
            answer.appendChild(btn)
        })
    }
})

xhr.open('get', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();