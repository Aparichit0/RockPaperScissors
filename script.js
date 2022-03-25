const gameMoves = ["rock", "paper", "scissors"];

//taking User input in case insensitive
let userInput = prompt("please enter your move: ", "Scissors").toLowerCase();

//random move for computer
function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3);
    return gameMoves[randomNumber];
};

let computerScore = 0;
let userScore = 0;

// Play one round of rock paper scissors game
function playRound(userSelection = userInput, computerSelection = computerPlay()) {
    const indexDiff = gameMoves.indexOf(userSelection) - gameMoves.indexOf(computerSelection);
    // determine results based on selected move's position (index value) within "gameMoves" array
    switch (indexDiff) {
        case 0 :
            return `It's a Tie!\nboth parties choose ${computerSelection}.`;
            break;
        case 1:
        case -2:
            userScore++;
            return `You Won!\n${userSelection} beats ${computerSelection}.`;
            break;
        case -1:
        case 2:
            computerScore++;
            return `You Lose!\n${computerSelection} beats ${userSelection}.`;
            break;
        default:
            return "uh ohh... something went wrong!";
    };
};

function game(){
   for (i = 0; i < 5; i++) {
        console.log(playRound());
    };
    if (userScore > computerScore){
        return `You Won!\nuser score: ${userScore}\ncomputer score: ${computerScore}`;
    } else if (userScore == computerScore){
        return `It's an ultimate Tie!!!\nuser score: ${userScore}\ncomputer score: ${computerScore}`;
    } else {
        return `You Lose!\nuser score: ${userScore}\ncomputer score: ${computerScore}`;
    };
};

console.log(game());
