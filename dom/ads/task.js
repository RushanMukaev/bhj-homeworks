
const rotator = document.querySelector(".rotator");

const rotatorItems = Array.from(document.querySelectorAll(".rotator__case"));

rotatorItems.forEach((item) => {
    item.style.color = item.getAttribute("data-color");
})

function timer() {
    const rotatorItem = document.querySelector(".rotator__case_active");
    const speed = rotatorItem.getAttribute("data-speed");

    if(rotatorItem !== rotator.lastElementChild) {
        rotatorItem.classList.remove("rotator__case_active");
        rotatorItem.nextElementSibling.classList.add("rotator__case_active");
    } else if(rotatorItem === rotator.lastElementChild) {
        rotatorItem.classList.remove("rotator__case_active");
        rotator.firstElementChild.classList.add("rotator__case_active");
    }
    setTimeout(timer, speed);
}

setTimeout(timer, 1000);