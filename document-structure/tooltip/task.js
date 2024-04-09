const a = [...document.querySelectorAll('.has-tooltip')];

a.forEach( (element) => {
    let div = document.createElement('div');

    div.classList.add('tooltip');
    div.textContent = `${element.title}`;
    element.after(div);

    element.addEventListener('click', (e) => {
        e.preventDefault();

        const { left, bottom } = element.getBoundingClientRect();
        div.style = `left: ${left}px; top: ${bottom}px`;

        if(div.classList.contains('tooltip_active')) {
            div.classList.remove('tooltip_active')
        } else {
            const b = [...document.querySelectorAll('.tooltip')];
            for (let i = 0; i < a.length; i++) {
            if(b[i].classList.contains('tooltip_active')) {
                b[i].classList.remove('tooltip_active')
            };
        }
            div.classList.add('tooltip_active');
        }
    })
});
