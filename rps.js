function getComputerChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];

}

function playerChoice(rps) {
    return rps = prompt("Rock, paper, scissor SHOOT!");
    
}

let winner;
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
         alert("You chose rock!! and the cpu did not!");
        return winner = ("Rock beats Scissors!");
    }
    
}

const arr =  ['rock', 'paper', 'scissors'];
const arr2 = ["paper beats rock", "rock beats scissors", "scissors beat paper"];
const playerSelection = playerChoice()
const computerSelection = getComputerChoice(arr);
console.log(playRound(playerSelection, computerSelection));
