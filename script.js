// met de hulp van youtube https://youtu.be/3uKdQx-SZ5A?si=meXiY0MH4lRbx2LS
const playerText = document.querySelector("#playerText")
const computerText = document.querySelector("#computerText")
const resultText = document.querySelector("#resultText")
const choiceButtons = document.querySelectorAll(".choiceButton")
const playerScoreDisplay = document.querySelector("#playerScoreDisplay")
const computerScoreDisplay = document.querySelector("#computerScoreDisplay")
const drawScoreDisplay = document.querySelector("#drawScoreDisplay")

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let player;
let computer;
let result;

choiceButtons.forEach(button => button.addEventListener("click",() => {
   
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}` ;
    computerText.textContent = `Computer: ${computer}` ;
    resultText.textContent = checkWinner();

}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
} 

function checkWinner(){
    if(player == computer){
        result = "Draw";
    }
    else if(computer == "ROCK"){
        result = (player == "PAPER") ? "You win!" : "You Lose!";
    }
    else if(computer == "PAPER"){
        result = (player == "SCISSORS") ? "You win!" : "You Lose!";
    }
    else if(computer == "SCISSORS"){
        result = (player == "ROCK") ? "You win!" : "You Lose!";
    }

    switch(result){
        case "You win!":
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        break

        case "You Lose!":
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break

        case "Draw":
            drawScore++;
            drawScoreDisplay.textContent = drawScore;
            break
    }
    return result;
}


