const btnDecrease = document.getElementById("btnDecrease");
const btnReset = document.getElementById("btnReset");
const btnIncrease = document.getElementById("btnIncrease");
const label = document.getElementById("countLabel");
let count = 0;

btnIncrease.onclick = function() {
    count ++;
    label.textContent = count;
}

btnReset.onclick = function() {
    count = 0;
    label.textContent = count;
}

btnDecrease.onclick = function() {
    count --;
    label.textContent = count;
}