content = document.getElementById('content');
var rockPaperScissors = {
    userChoice: "",
    computerChoice: "",
    winMessage: ""
}

content.innerHTML = renderGame(rockPaperScissors);

function setGameValues(userChoice, computerChoice, winMessage) {
    rockPaperScissors.userChoice = userChoice;
    rockPaperScissors.computerChoice = computerChoice;
    rockPaperScissors.winMessage = winMessage;
}
setGameValues()

function setUpGame() {
    //     var rockButton = document.getElementById('rock');
    //     var paperButton = document.getElementById('rock');
    //     var scissorButton = document.getElementById('rock');
    var rockButton = document.getElementById('rock');
    var paperButton = document.getElementById('paper');
    var scissorButton = document.getElementById('scissors');

    rockButton.addEventListener('click', function() {
        Winner('rock');

    })

    paperButton.addEventListener('click', function() {
        Winner('paper');
    })

    scissorButton.addEventListener('click', function() {
        Winner('scissors');
    })

}
setUpGame()

function getComputerChoices() {
    var choices = ["rock", "paper", "scissors"];
    var randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}
// console.log(getComputerChoices());

function Winner(userChoice) {
    // console.log("winner " + userChoice);
    var computerChoice = getComputerChoices();
    // console.log(computerChoice);
    // console.log(userChoice);
    var winMessage = "";
    var loseMoves = {
        rock: "paper",
        paper: "scissors",
        scissors: "rock"
    };
    if (loseMoves[userChoice] === computerChoice) {
        winMessage = "user Wins";
        // console.log('user Wins');
    } else if (loseMoves[computerChoice] === userChoice) {
        winMessage = "computer Wins";
        // console.log('computer Wins');
    } else {
        winMessage = "Tie";
        // console.log('Tie');
    }
    setGameValues(userChoice, computerChoice, winMessage);
    content.innerHTML = renderGame(rockPaperScissors);
}

function renderGame(game) {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>Choose your weapon:</h4>
            <div class="w-50 text-center">
                <button id="rock" class="btn btn-primary">Rock</button>
                <button id="paper" class="btn btn-primary">Paper</button>
                <button id="scissors" class="btn btn-primary">Scissors</button>
            </div>
            <div class="d-flex justify-content-center">
                <div class="m-5">You played: <b>${game.userChoice}</b></div>
                <div class="m-5">The computer played: <b>${game.computerChoice}</b></div>
            </div>
            <h1 class="text-center">${game.winMessage}</h1>
        </div>
    `
}