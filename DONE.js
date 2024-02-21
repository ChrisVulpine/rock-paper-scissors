<!--<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>Rock - Paper - Scissors</h1>
    
    <div class="choices">
        <button onclick="playGame('rock')">👊</button>
        <button onclick="playGame('paper')">✋</button>
        <button onclick="playGame('scissors')">✌</button>
    </div>

    <div id="playerDisplay">PLAYER: </div>
    <div id="computerDisplay">COMPUTER: </div>
    <div id="resultDisplay"></div>

    <div class="scoreDisplay">Player Score: 
        <span id="playerScoreDisplay">0</span>
    </div>

    <div class="scoreDisplay">Computer Score: 
        <span id="computerScoreDisplay">0</span>
    </div>

    <script src="script.js"></script>
</body>
</html> --></meta>


/*const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

} */</head>