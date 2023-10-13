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

function getPlayerChoice(){
    let playerChoice;

    while(!playerChoice){
        let answer;

        // Prompt player for answer and don't continue without one
        while(!answer){
            answer = prompt("Please choose Rock, Paper, or Scissors:");
        }

        // Convert answer to consistent case...
        answer = answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase();
        console.log(answer);

        // ...and check that it's Rock, Paper, or Scissors
        if (
            // If not, the user will have to type in another answer
            answer !== "Rock" &&
            answer !== "Paper" &&
            answer !== "Scissors"){
                alert("You must choose Rock, Paper, or Scissors!");
        } else {
            // If answer is acceptable, set playerChoice to answer and return it
            playerChoice = answer;
            return playerChoice;
        }
    }
}

// The player's choice will be compared against the computer's choice, and a winner will be declared

function playRound(playerChoice, computerChoice){
    // Compare player choice with computer choice and return the result
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
function game(){
    //GAME CONTEXT
	//The player's score will be set to 0
    let playerScore = 0;

    //The computer's score will be set to 0
    let computerScore = 0;

    //The round count will be set to 0
    let rounds = 0;

    //5 rounds will be played
    while(rounds < 5){
        //ROUND CONTEXT
		//A computer choice will be generated
        let computerChoice = getComputerChoice();

        //The player will be prompted for a choice
        let playerChoice = getPlayerChoice();

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

game();