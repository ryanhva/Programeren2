console.log();
let getal = 0;

const plusKnop = document.querySelector("#plus");
const minKnop = document.querySelector("#min");
let getalVal = document.querySelector("h1")

function verhoogGetal(){
    getal = getal + 1;
    console.log("getal: " + getal);
    getalVal.textContent = getal;
}

function verlaagGetal(){
    getal = getal - 1;
    console.log("getal: " + getal);
    getalVal.textContent = getal;
}