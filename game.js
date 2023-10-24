// The player will be prompted for a choice between rock, paper, & scissors in the console, and that choice will be stored in a variable

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

// The player's choice will be compared against the computer's choice, and a winner will be declared

function playRound(playerChoice){
    // Compare player choice with computer choice and return the result
    let computerChoice = getComputerChoice();

    if (playerChoice === computerChoice){
        alert("It's a draw!");
        return "Draw";
    } else if (
        playerChoice === "Rock" && computerChoice === "Scissors"||
        playerChoice === "Paper" && computerChoice === "Rock" ||
        playerChoice === "Scissors" && computerChoice === "Paper"){
            alert(`You win this round! ${playerChoice} beats ${computerChoice}`);
            return "Player";
    } else {
        alert(`You lose this round! ${playerChoice} loses to ${computerChoice}`);
        return "Computer";
    }
}

//A game function will handle the running of games
function game(n){
    //GAME CONTEXT
	//The player's score will be set to 0
    let playerScore = 0;

    //The computer's score will be set to 0
    let computerScore = 0;

    //The round count will be set to 0
    let rounds = 0;

    //5 rounds will be played
    while(rounds < n){
        //ROUND CONTEXT
		//A computer choice will be generated
        let computerChoice = getComputerChoice();

        //The player will be prompted for a choice
        let playerChoice = getPlayerChoice();

        //End game if no player choice(user closes prompt winow)
        if(playerChoice === null){
            alert("Game ended. Refresh page to restart.");
            return;
        }

        //A round will be played using these choices, returning a winner
        let winner = playRound(playerChoice, computerChoice);

        //The appropriate score will be updated
        if(winner === "Player"){
            playerScore++;
            //The round count will be updated
            rounds++;
        } else if(winner === "Computer") {
            computerScore++;
            //The round count will be updated
            rounds++;
        }
        //The rounds count will not be incremented when a draw happens
    }

    //The scores and winner will be shown
    alert(`
    Player score: ${playerScore}
    Computer score: ${computerScore}
    ${playerScore > computerScore ?
        "Player wins!" :
        "Computer wins!"}
    `);
}

function checkChoice(event){
    switch(event.target.id){
        case "rock-btn":
            playRound("Rock");
            break;
        case "paper-btn":
            playRound("Paper");
            break;
        case "scissors-btn":
            playRound("Scissors");
            break;
        default:
            break;
    }
}

let btnContainer = document.querySelector("#btn-container");

btnContainer.addEventListener("click", checkChoice);