let numberPicker = Math.random();
let computerChoice = "";
let playerInput = "";
let playerChoice = "";

const buttons = document.querySelectorAll('button');

const results = document.querySelector('#results');

const playerSees = document.createElement('div')
playerSees.classList.add('playerSees');

buttons.forEach((button) => {
button.addEventListener('click', () =>{
playerChoice = button.id;
game();
})
})

function getComputerChoice() {
    numberPicker = Math.random();

    if (numberPicker < .33) {
        computerChoice = "Rock";
        console.log(numberPicker);
    }
    else if (numberPicker >.32 && numberPicker < .66) {
        computerChoice = "Paper";
        console.log(numberPicker);
    }
    else {
        computerChoice = "Scissors";
        console.log(numberPicker);
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
             playerSees.textContent = 'Good old rock. Nothing beats rock. A tie!';
             return results.appendChild(playerSees);
        }
        if (computerPick == "Rock" && humanPick == "Paper"){
             playerSees.textContent = 'They picked rock. You picked paper. You are a winner! Hot dog!';
             return results.appendChild(playerSees);
        }
        if (computerPick == "Rock" && humanPick == "Scissors"){
             playerSees.textContent = 'They picked rock. You picked scissors. Can you see how you shamed yourself?';
             return results.appendChild(playerSees);
        }
        if (computerPick == "Paper" && humanPick == "Rock"){
            playerSees.textContent = "They picked paper. You picked rock. Can you see how you shamed yourself?";
            return results.appendChild(playerSees);
        }
        if (computerPick == "Paper" && humanPick == "Paper"){
            playerSees.textContent ="They picked paper. You picked paper. Everyone loves paper!";
            return results.appendChild(playerSees);
        }
        if (computerPick == "Paper" && humanPick == "Scissors"){
            playerSees.textContent ="They picked paper. You picked scissors. You are a winner. Hot dog!";
            return results.appendChild(playerSees);
        }
        if (computerPick == "Scissors" && humanPick == "Paper"){
            playerSees.textContent ="They picked scissors. You picked paper. Can you see how you shamed yourself?";
            return results.appendChild(playerSees);
        }
        if (computerPick == "Scissors" && humanPick == "Scissors"){
            playerSees.textContent ="They picked scissors. You picked scissors. Stay sharp!";
            return results.appendChild(playerSees);
        }
        if (computerPick == "Scissors" && humanPick == "Rock"){
            playerSees.textContent ="They picked scissors. You picked rock. You are a winner! Hot dog!";
            return results.appendChild(playerSees);
        }
        else {
            return console.log("Still working on that!")
        }
    }

function game(){
    

getComputerChoice();
gameSetup(computerChoice, playerChoice);
    
}





