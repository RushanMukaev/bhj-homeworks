const textarea = document.getElementById('editor');
const btnRemove = document.querySelector('.button_remove');

if(localStorage.text) {
    textarea.value = localStorage.text
}

textarea.addEventListener('input', () => {
    localStorage.text = textarea.value;
} )

btnRemove.addEventListener('click', () => {
    textarea.value = "";
    delete localStorage.text
})