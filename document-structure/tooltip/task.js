const a = document.querySelectorAll('.has-tooltip');

a.forEach( (element) => {
    let div = document.createElement('div');

    div.classList.add('tooltip');
    div.textContent = `${element.title}`;
    element.appendChild(div);

    element.addEventListener('click', (e) => {
        e.preventDefault();
        for (let i = 0; i < a.length; i++) {
            a[i].lastElementChild.classList.remove('tooltip_active');
            
        }
        const { left, bottom } = element.getBoundingClientRect();
        div.style = `left: ${left}px; top: ${bottom}px`;
        activeTooltip.classList.remove('tooltip_active');
        div.classList.add('tooltip_active');
    })
});
