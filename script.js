let numberPicker = Math.random();
let computerChoice = "";
let playerInput = "";
let playerChoice = "";

function getComputerChoice() {
    numberPicker = Math.random();

    if (numberPicker < .33){
        computerChoice = "Rock"
    }
    else if (numberPicker >.32 && numberPicker < .66) {
        computerChoice = "Paper"
    }
    else {
        computerChoice = "Scissors"
    }
}

function getPlayerChoice() {
    playerInput = prompt("Hello, player! What would you like to choose? Rock, Paper, or Scissors?")
    if (playerInput.toUpperCase() == "ROCK"){
        playerChoice = "Rock"
    }
    else if (playerInput.toUpperCase() == "PAPER"){
        playerChoice = "Paper"
    }
    else if (playerInput.toUpperCase() == "SCISSORS"){
        playerChoice = "Scissors"
    }
    else{
        prompt("Hmm, are you sure you spelled that right?")
    }
    }

    function gameSetup(computerPick, humanPick) {
        if (computerPick == "Rock" && humanPick == "Rock"){
            return console.log("Good old rock. Nothing beats rock. A tie!")
        }
        if (computerPick == "Rock" && humanPick == "Paper"){
            return console.log("They picked rock. You picked paper. You are a winner! Hot dog!")
        }
        if (computerPick == "Rock" && humanPick == "Scissors"){
            return console.log("They picked rock. You picked scissors. Can you see how you shamed yourself?")
        }
        if (computerPick == "Paper" && humanPick == "Rock"){
            return console.log("They picked paper. You picked rock. Can you see how you shamed yourself?")
        }
        if (computerPick == "Paper" && humanPick == "Paper"){
            return console.log("They picked paper. You picked paper. Everyone loves paper!")
        }
        if (computerPick == "Paper" && humanPick == "Scissors"){
            return console.log("They picked paper. You picked scissors. You are a winner. Hot dog!")
        }
        if (computerPick == "Scissors" && humanPick == "Paper"){
            return console.log("They picked scissors. You picked paper. Can you see how you shamed yourself?")
        }
        if (computerPick == "Scissors" && humanPick == "Scissors"){
            return console.log("They picked scissors. You picked scissors. Stay sharp!")
        }
        if (computerPick == "Scissors" && humanPick == "Rock"){
            return console.log("They picked scissors. You picked rock. You are a winner! Hot dog!")
        }
        else {
            return console.log("Still working on that!")
        }
    }

function game(){
    for (let i = 0; i < 5; i++){
getPlayerChoice();
getComputerChoice();
gameSetup(computerChoice, playerChoice);
    }
}

game();





