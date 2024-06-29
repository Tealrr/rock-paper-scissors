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

