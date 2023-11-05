const tab = Array.from(document.querySelectorAll(".tab"));
const tabContent = Array.from(document.querySelectorAll(".tab__content"));

for(let i = 0; i < tab.length; i++) {
    tab[i].onclick = () => {
        for(let index = 0; index < tab.length; index++) {
            tab[index].classList.remove("tab_active")
            tabContent[index].classList.remove("tab__content_active")
        }
        tab[i].classList.add("tab_active")
        tabContent[i].classList.add("tab__content_active")
    }
}