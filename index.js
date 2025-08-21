const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const computerscoredisplay = document.getElementById("computerscoredisplay");
const playerscoredisplay = document.getElementById("playerscoredisplay");
let playerscore = 0;
let computerscore = 0;

function playgame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "It's a TIE!";
    }
    
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You WIN!" : "You LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You WIN!" : "You LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You WIN!" : "You LOSE!";
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = `${result}`;

    resultDisplay.classList.remove("green-text", "red-text");

    switch(result){
        case "You WIN!":
            resultDisplay.classList.add("green-text");
            playerscoredisplay.textContent = ++playerscore;
            break;
        case "You LOSE!":
            resultDisplay.classList.add("red-text");
            computerscoredisplay.textContent = ++computerscore;
            break;
    }
}
