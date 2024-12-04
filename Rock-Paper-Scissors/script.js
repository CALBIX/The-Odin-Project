let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random()
    let computerChoiceAssignment = "";
    if (randomNumber > 0.66) {
        computerChoiceAssignment = ("Rock")
    } else if (randomNumber <= 0.66 && randomNumber >= 0.33) {
        computerChoiceAssignment = ("Paper")
    } else computerChoiceAssignment = ("Scissors")
    console.log(computerChoiceAssignment)
    return computerChoiceAssignment.toLowerCase()
}

function getHumanChoice() {
    let humanChoiceAssignment = prompt("Rock, Paper, or Scissors?")
    console.log(humanChoiceAssignment)
    return humanChoiceAssignment.toLowerCase()
}

function playGame() {
    let i = 0;

    function playRound(humanChoice, computerChoice) {
        for (i = 0; i < 5; i++) {
            console.log(i)
            humanChoice = getHumanChoice()
            computerChoice = getComputerChoice()

            if (humanChoice === computerChoice) {
                console.log("Tie!")
            } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
                humanChoice === 'scissors' && computerChoice === 'paper' ||
                humanChoice === 'paper' && computerChoice === 'rock'
            ) {
                humanScore++;
                console.log('humanScore:', humanScore)
            } else if (humanChoice === 'scissors' && computerChoice === 'rock' ||
                humanChoice === 'paper' && computerChoice === 'scissors' ||
                humanChoice === 'rock' && computerChoice === 'paper') {
                computerScore++
                console.log('computerScore:', computerScore)
            }

        }
    } return playRound()

}
playGame()


function scoreChecker() {
    if (humanScore === computerScore) {
        console.log("Tie!, Refresh to play again!")
    } else if (humanScore > computerScore) {
        console.log("You Win!, Refresh to play again!")
    } else if (humanScore < computerScore) {
        console.log("You Loose!, Refresh to play again!")
    }
}
scoreChecker()