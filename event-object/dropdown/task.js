const value = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");
const items = Array.from(document.querySelectorAll(".dropdown__item"));

function openMenu() {
    list.classList.toggle("dropdown__list_active");
}
value.addEventListener("click", openMenu);

for(let i = 0; i < items.length; i++) {
    items[i].onclick = () => {
        value.textContent = items[i].textContent;
        list.classList.remove("dropdown__list_active");
        return false;
    }
}



