// The user will be prompted for a choice between rock, paper, & scissors in the console, and that choice will be stored in a variable

//The computer will determine a choice between rock, paper, and scissors, and that choice will be stored in a variable

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    
    switch(choice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors"
    }
}

// The user's choice will be compared against the computer's choice, and a winner will be declared

function playRound(playerSelection, computerSelection){

    // Convert player choice to consistent case...
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    // ...and check that it's Rock, Paper, or Scissors
    if (
        playerSelection !== "Rock" &&
        playerSelection !== "Paper" &&
        playerSelection !== "Scissors"){
            alert("You must choose Rock, Paper, or Scissors!");
    }

    // Compare user choice with computer choice and return the result
    if (playerSelection === computerSelection){
        return "It's a draw!";
    } else if (
        playerSelection === "Rock" && computerSelection === "Scissors"||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper"){
            return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${playerSelection} loses to ${computerSelection}`
    }
}

console.log(playRound());
// The result will be output to the console