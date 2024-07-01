function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3);
    if (randNum === 0) {
        return "Rock";
    } else if (randNum === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Time to play Rock Paper Scissors! What would you like to throw?");
    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const humanSelection = humanChoice;
    const computerSelection = computerChoice;
    
    if (humanSelection === "Rock") {
        if (computerSelection === "Rock") {
            console.log("You tied!");
        } else if (computerSelection === "Paper") {
            console.log("You lost! Paper beats Rock.");
            computerScore++;
        } else {
            console.log("You won! Rock beats Scissors.");
            humanScore++;
        }
    } else if (humanSelection === "Paper") {
        if (computerSelection === "Rock") {
            console.log("You won! Paper beats Rock.");
            humanScore++;
        } else if (computerSelection === "Paper") {
            console.log("You tied!");
        } else {
            console.log("You lost! Scissors beats Paper.");
            computerScore++;
        }
    } else if (humanSelection === "Scissors") {
        if (computerSelection === "Rock") {
            console.log("You lost! Rock beats Scissors.");
            computerScore++;
        } else if (computerSelection === "Paper") {
            console.log("You won! Scissors beats Paper.");
            humanScore++;
        } else {
            console.log("You tied!");
        }
    } else {
        console.log("You must have made an invalid choice. Next time, pick only Rock, Paper, or Scissors.");
    }
}

// Example of playing one round
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);

console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
