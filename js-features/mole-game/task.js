const dead = document.getElementById("dead")
const lost = document.getElementById("lost")

const getHole = index => document.getElementById(`hole${index}`);
for (let i = 1; i < 10; i++) {
    function clicker() {
        if(getHole(i).classList.contains( 'hole_has-mole' )) {
            dead.textContent = +dead.textContent + 1;
        } else {
            lost.textContent = +lost.textContent + 1;
        }
        if(dead.textContent >= 10) {
            alert("Вы победили!")
            dead.textContent = 0;
            lost.textContent = 0;
        }
        
        if(lost.textContent >= 5) {
            alert("Вы проиграли!")
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
    getHole(i).onclick = clicker;;
}


