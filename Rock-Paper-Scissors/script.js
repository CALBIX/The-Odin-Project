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
    return console.log(computerChoiceAssignment.toLowerCase())
}

function getHumanChoice() {
    let humanChoiceAssignment = prompt("Rock, Paper, or Scissors?")
    return console.log(humanChoiceAssignment.toLowerCase())
}