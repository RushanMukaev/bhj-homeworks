const xhr = new XMLHttpRequest();
const img = document.querySelector('.loader');
const items = document.getElementById('items')

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        img.classList.remove('loader_active');

        let parsed = JSON.parse(xhr.responseText).response.Valute;
        Object.keys(parsed).forEach((el) => {
            
            let item = document.createElement('div');
            item.classList.add('item');
            
            let itemCode = document.createElement('div');
            itemCode.classList.add('item__code');
            itemCode.textContent = `${parsed[el].CharCode}`;
            item.appendChild(itemCode);
            
            let itemValue = document.createElement('div');
            itemValue.classList.add('item__value');
            itemValue.textContent = `${parsed[el].Value}`;
            item.appendChild(itemValue);
            
            let itemCurrency = document.createElement('div');
            itemCurrency.classList.add('item__currency');
            itemCurrency.textContent = `руб.`;
            item.appendChild(itemCurrency);
            
            items.appendChild(item);
        })
    }
})

xhr.open('get', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
