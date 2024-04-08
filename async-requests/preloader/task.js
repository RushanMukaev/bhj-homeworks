const xhr = new XMLHttpRequest();
const img = document.querySelector('.loader');
const items = document.getElementById('items')

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        img.classList.remove('loader_active');

        let parsed = JSON.parse(xhr.responseText).response.Valute;
        Object.keys(parsed).forEach((el) => {
            items.innerHTML +=`
            <div class="item">
                <div class="item__code">${parsed[el].CharCode}</div>
                <div class="item__value">${parsed[el].Value}</div>
                <div class="item__currency">руб.</div>
            </div>`
        })
    }
})

xhr.open('get', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
