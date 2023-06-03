function getComputerChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];

}

function playerChoice(rps) {
    return rps = prompt("Rock, paper, scissor SHOOT!");
    
}

let winner = 0;
let loser = 0;
let tie;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
         return winner = ("Rock beats Scissors!");
   
    }else if ( playerSelection == "scissors" && computerSelection == "paper") {
        return winner = ("Scissors beat paper");
   
    }else if (playerSelection == "paper" && computerSelection == "rock") {
        return winner = ("See alert!");
   
    }else if (playerSelection == "paper" && computerSelection == "paper" || 
    playerSelection == "rock" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "scissors") {
        return tie = ("BOTH CHOSE THE SAME! IT'S A TIE!");
    }
}


const arr =  ['rock', 'paper', 'scissors'];
const arr2 = ["paper beats rock", "rock beats scissors", "scissors beat paper"];
const playerSelection = playerChoice()
const computerSelection = getComputerChoice(arr);

let score;
function game() {
    console.log(playRound());
    if (winner < 5 && tie < 5) {
        game()
    }
    return score;
}




















