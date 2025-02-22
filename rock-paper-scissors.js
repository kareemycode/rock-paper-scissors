function getComputerChoice(){
    x = Math.random()
    if (x < 0.3333333) {
        return "rock"
    } else if (x > 0.6666667){
        return "scissors"
    } else {
        return "paper"
    }
}

let choiceValidation = (humanChoice) => {
    if ((humanChoice == "rock") || (humanChoice == "paper") || (humanChoice == "scissors")){
        return true
    } else {
        return false
    }
}

function getHumanChoice(){
    humanChoice = prompt("Write you choice (Rock | Paper | Scissors)").toLowerCase()
    validation = choiceValidation(humanChoice)

    while (validation == false){
        humanChoice = prompt("Please enter valid choice: ").toLowerCase()
        validation = choiceValidation(humanChoice)
    }
    
    return humanChoice
}

let humanScore = 0
let computerScore = 0

