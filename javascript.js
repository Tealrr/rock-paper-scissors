document.addEventListener("DOMContentLoaded", () => {
    function getComputerChoice() {
        const choices = ["Rock", "Paper", "Scissors"];
        const randNum = Math.floor(Math.random() * 3);
        return choices[randNum];
    }

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            humanScore++;
            return `You win! ${humanChoice} beats ${computerChoice}.`;
        } else {
            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}.`;
        }
    }

    function updateScore() {
        const score = document.querySelector("#score");
        score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
    }

    function updateResult(result) {
        const roundResult = document.querySelector("#round-result");
        roundResult.textContent = result;
    }

    function checkGameEnd() {
        if (humanScore === 5 || computerScore === 5) {
            const finalResult = humanScore === 5 ? "You win the game!" : "You lose the game!";
            alert(finalResult);
            resetGame();
        }
    }

    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        updateScore();
        updateResult("Game has been reset.");
    }

    document.querySelector("#rock").addEventListener("click", () => {
        const humanChoice = "Rock";
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        updateResult(result);
        updateScore();
        checkGameEnd();
    });

    document.querySelector("#paper").addEventListener("click", () => {
        const humanChoice = "Paper";
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        updateResult(result);
        updateScore();
        checkGameEnd();
    });

    document.querySelector("#scissors").addEventListener("click", () => {
        const humanChoice = "Scissors";
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        updateResult(result);
        updateScore();
        checkGameEnd();
    });
});
