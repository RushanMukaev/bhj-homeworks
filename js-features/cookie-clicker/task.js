const clickerCount = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");
const cookie = document.getElementById("cookie");
let start = Date.now();
let end;

function clicker() {
    clickerCount.textContent =+clickerCount.textContent + 1;
    end = Date.now();
    clickerSpeed.textContent = (1000 / (end - start)).toFixed(2);
    start = Date.now();
    if(clickerCount.textContent % 2 === 0) {
        cookie.width = 200;
    } else {
        cookie.width = 250;
    }
}
cookie.onclick = clicker;