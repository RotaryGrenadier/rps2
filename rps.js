
let computerScore = 0;
let userScore = 0;
let result;

function getComputerChoice() {
    let cpuChoice= Math.floor(Math.random() * arr.length);
    return arr[cpuChoice]

}



function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Rock, Paper 1Scissors!");
   

     if (playerSelection == "rock" && computerSelection == "scissors") { 
        userScore ++
        let result = "You win! You Adrienne(Rocky reference...)"
         result += '\n'
         result += " Your Score: " + userScore
         result += '\n' 
         result += " Computer Score: " + computerScore
         return result
       
    }
    
    if (playerSelection == "scissors" && computerSelection == "paper") {
        userScore ++
        let result = "You won! Siz beats pape!"
        result += '\n'
        result += " Your Score: " + userScore
        result += '\n' 
        result += " Computer Score: " + computerScore
        return result
   
    }
    
    if (playerSelection == "paper" && computerSelection == "rock") {
        userScore ++
        let result = "You won! Pape beats ROK!"
        result += '\n'
        result += " Your Score: " + userScore
        result += '\n' 
        result += " Computer Score: " + computerScore
        return result
    
    
    }
    
    if (playerSelection === computerSelection) {
        let result = "Game was a dud!"
        result += '\n'
        result += " Your Score: " + userScore
        result += '\n'
        result += " Computer Score: " + computerScore
        return result;
    }

    if (playerSelection == 'rock' && computerSelection == 'paper') {
            computerScore++;
            let result = "You Lose! Paper beats rock!"
            result += '\n'
            result += " Your Score: " + userScore
            result += '\n'
            result += " Computer Score: " + computerScore
            return result;
        }
       
        if (playerSelection == 'scissors' && computerSelection == 'rock') {
            computerScore++;
            let result = "You Lose! Rock beats scissors!";
            result += '\n'
            result += " Your Score: " + userScore
            result += '\n'
            result += " Computer Score: " + computerScore
            return result;
        }
        if (playerSelection == 'paper' && computerSelection == 'scissors') {
            computerScore++;
            let result = "You Lose! Scissors beats paper!"
            result += '\n'
            result += " Your Score: " + userScore
            result += '\n'
            result += " Computer Score: " + computerScore
            return result;
    

   
    }
}


const arr =  ['rock', 'paper', 'scissors'];
const computerSelection = getComputerChoice();

function endGame() {
    if (userScore > computerScore) {
        console.log("I'll be dipped! You won!");
    } else if (computerScore > userScore) {
        console.log("Game Over Man! Game Over ");
    }
}

function game() {
    console.log(playRound());
    if(userScore < 5 && computerScore < 5){
    	game();
    }
    else{
    	endGame();
    }
}

game();


    



























