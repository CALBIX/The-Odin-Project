//Create a variable to store humans score
var humanScore = 0;
//Create a variable to store computer score
var computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie!")
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'scissors' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'rock'
    ) {
        humanScore++;
        console.log("Winner!")
    } else if (humanChoice === 'scissors' && computerChoice === 'rock' ||
        humanChoice === 'paper' && computerChoice === 'scissors' ||
        humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++
        console.log("You Loose!")
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)