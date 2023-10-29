const timeStart = document.getElementById("timer");
let time = timeStart.textContent;
function counter() {
    if(time <= 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(intervalId);
    }else {
        time -= 1;
        if(time < 10) {
            time = "0" + time;
        }
        timeStart.textContent = `00:00:${time}`;
    }
}

let intervalId = setInterval(counter, 200);
