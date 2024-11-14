function getComputerChoice() {
    let randomNumber = Math.random()
    if (randomNumber > 0.66) {
        console.log("Rock")
    } else if (randomNumber <= 0.66 && randomNumber >= 0.33) {
        console.log("Paper")
    } else (console.log("Scissors"))
    return randomNumber
}

console.log(getComputerChoice())