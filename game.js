let roundCountPara = document.querySelector("#round-count");
let btnContainer = document.querySelector("#btn-container");
let playerChoiceSpan = document.querySelector("#player-choice");
let computerChoiceSpan = document.querySelector("#computer-choice");
let resultPara = document.querySelector("#result");
let startGameBtn = document.querySelector("#start-game");
let playerScoreSpan = document.querySelector("#player-choice");
let computerScoreSpan = document.querySelector("#computer-choice");

function updateScores(playerScore, computerScore){
    playerChoiceSpan.textContent = `Player score: ${playerScore}`;
    computerScoreSpan.textContent = `Computer score: ${computerScore}`;
}

function runGame(){
    let playerScore = 0;
    let computerScore = 0;
    updateScores(playerScore, computerScore);
    let round = 0;

    roundCountPara.textContent = "";
    resultPara.textContent = "Please choose Rock, Paper, or Scissors";

    function getPlayerChoice(event){
        switch(event.target.id){
            case "rock-btn":
                playerChoiceSpan.textContent = "You chose Rock, ";
                playRound("Rock");
                break;
            case "paper-btn":
                playerChoiceSpan.textContent = "You chose Paper, ";
                playRound("Paper");
                break;
            case "scissors-btn":
                playerChoiceSpan.textContent = "You chose Scissors, ";
                playRound("Scissors");
                break;
            default:
                playerChoiceSpan.textContent = "";
                break;
        }
    }

    function getComputerChoice(){
        let choice = Math.floor(Math.random() * 3) + 1;
        
        switch(choice) {
            case 1:
                computerChoiceSpan.textContent = "the computer chose Rock";
                return "Rock";
            case 2:
                computerChoiceSpan.textContent = "the computer chose Paper";
                return "Paper";
            case 3:
                computerChoiceSpan.textContent = "the computer chose Scissors";
                return "Scissors"
        }
    }

    function playRound(playerChoice){
        let computerChoice = getComputerChoice();
        round++;
        roundCountPara.textContent = `Round ${round}`;
    
        if (playerChoice === computerChoice){
            resultPara.textContent = "It's a draw!";
            updateScores(playerScore, computerScore);
        } else if (
            playerChoice === "Rock" && computerChoice === "Scissors"||
            playerChoice === "Paper" && computerChoice === "Rock" ||
            playerChoice === "Scissors" && computerChoice === "Paper"){
                resultPara.textContent = `You win this round! ${playerChoice} beats ${computerChoice}`;
                playerScore++;
                updateScores(playerScore, computerScore);
        } else {
            resultPara.textContent = `You lose this round! ${playerChoice} loses to ${computerChoice}`;
            computerScore++;
            updateScores(playerScore, computerScore);
        }

        if (playerScore === 5 || computerScore === 5){
            updateScores(playerScore, computerScore);
            resultPara.textContent = playerScore > computerScore ? "You win!" : "The computer won!";
            btnContainer.removeEventListener("click", getPlayerChoice);
            console.log("Game over!");
            roundCountPara.textContent = "Game over!";
        }
    }

    btnContainer.addEventListener("click", getPlayerChoice);
}

startGameBtn.addEventListener("click", runGame);










// function runGame(){
//     if (btnContainer.onclick === null){
//         btnContainer.addEventListener("click", getPlayerChoice);
//     }
    
//     let playerScore = 0;
//     let computerScore = 0;
//     let rounds = 0;

//     //5 rounds will be played
//     while(rounds < n){

//         //The appropriate score will be updated
//         if(winner === "Player"){
//             playerScore++;
//             //The round count will be updated
//             rounds++;
//         } else if(winner === "Computer") {
//             computerScore++;
//             //The round count will be updated
//             rounds++;
//         }
//         //The rounds count will not be incremented when a draw happens
//     }

//     //The scores and winner will be shown
//     alert(`
//     Player score: ${playerScore}
//     Computer score: ${computerScore}
//     ${playerScore > computerScore ?
//         "Player wins!" :
//         "Computer wins!"}
//     `);
// }