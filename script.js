function getComputerChoice(){
    let x = Math.random()
    if (x < 1/3) {
        return "rock"
    } else if (x > 2/3){
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
    let humanChoice = prompt("Write you choice (Rock | Paper | Scissors)").toLowerCase()
    let validation = choiceValidation(humanChoice)

    while (validation == false){
        humanChoice = prompt("Please enter valid choice: ").toLowerCase()
        validation = choiceValidation(humanChoice)
    }
    
    return humanChoice
}


function playRound(humanChoice, computerChoice){
        if (humanChoice == computerChoice){
            return "draw"
        } else if (humanChoice == "rock" && computerChoice == "scissors" || 
            humanChoice == "paper" && computerChoice == "rock" ||
            humanChoice == "scissors" && computerChoice == "paper"){
            return "win"     
        } else {
            return "lost"
        }
    
}

let humanScore = 0
let computerScore = 0

function playGame(){
    for (let i=0; i<5 ; i++){
        let computerChoice = getComputerChoice()
        let humanChoice = getHumanChoice()
    
        console.log(`Computer choice is ${computerChoice}`)
        console.log(`human choice is ${humanChoice}`)
        
        let round = playRound(humanChoice, computerChoice)

        if (round == "win"){
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
        humanScore ++
        } else if (round == "draw") {
            console.log("It's a Draw")
        } else {
            console.log(`You Lost! ${computerChoice} beats ${humanChoice}`)
            computerScore ++
        }
    }
        
        
}


playGame()

console.log(`Your Score: ${humanScore}`)
console.log(`Computer Score: ${computerScore}`)

if (humanScore > computerScore){
    console.log("You Won the Game! 😊")
} else if (humanScore < computerScore){
    console.log("You Lost the Game! 🙁")
} else {
    console.log("It's a Tie Game! 🤝")
}