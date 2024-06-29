function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3)
    if (randNum === 0) {
        return "Rock"
    }
    elif (randNum === 1) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

function getHumanChoice() {
    const choice = prompt("Time to play Rock Paper Scissors! \
        What would you like to throw?")
    return return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}