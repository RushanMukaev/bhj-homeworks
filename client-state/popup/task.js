const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');


const pairs = document.cookie.split('; ');
const cookie = pairs.find(p => p.startsWith('modal='))



if(document.cookie) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith('modal='));
    if(cookie !== 'modal=close') {
        modal.classList.add('modal_active');
    }
} else {
    modal.classList.add('modal_active');
}

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active')
    document.cookie = 'modal=close';
})