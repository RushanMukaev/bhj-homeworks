const a = [...document.querySelectorAll('.has-tooltip')];

a.forEach( (element) => {
    let div = document.createElement('div');

    div.classList.add('tooltip');
    div.textContent = `${element.title}`;
    element.after(div);

    element.addEventListener('click', (e) => {
        e.preventDefault();
        const b = [...document.querySelectorAll('.tooltip')];
        for (let i = 0; i < a.length; i++) {
            b[i].classList.remove('tooltip_active');
            
        }
        const { left, bottom } = element.getBoundingClientRect();
        div.style = `left: ${left}px; top: ${bottom}px`;
        div.classList.toggle('tooltip_active');
    })
});
