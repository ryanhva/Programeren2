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
    playerText.textContent = "Player: " + player;
    computerText.textContent = "Computer: " + computer ;
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

function checkWinner() {
    if (player == computer) {
        result = "Draw";
        drawScore++;
        drawScoreDisplay.textContent = drawScore;
    } else if (
        (computer == "ROCK" && player == "PAPER") ||
        (computer == "PAPER" && player == "SCISSORS") ||
        (computer == "SCISSORS" && player == "ROCK")
    ) {
        result = "You win!";
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else {
        result = "You Lose!";
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
    return result;
}


