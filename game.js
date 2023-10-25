let roundCount = document.querySelector("#round-count");
let btnContainer = document.querySelector("#btn-container");
let playerChoiceSpan = document.querySelector("#player-choice");
let computerChoiceSpan = document.querySelector("#computer-choice");
let resultPara = document.querySelector("#result");
let startGameBtn = document.querySelector("#start-game");

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
    // Compare player choice with computer choice and return the result
    let computerChoice = getComputerChoice();

    if (playerChoice === computerChoice){
        resultPara.textContent = "It's a draw!";
        return "Draw";
    } else if (
        playerChoice === "Rock" && computerChoice === "Scissors"||
        playerChoice === "Paper" && computerChoice === "Rock" ||
        playerChoice === "Scissors" && computerChoice === "Paper"){
            resultPara.textContent = `You win this round! ${playerChoice} beats ${computerChoice}`;
            return "Player";
    } else {
        resultPara.textContent = `You lose this round! ${playerChoice} loses to ${computerChoice}`;
        return "Computer";
    }
}

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

function runGame(){
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;
    let winner = "";

    roundCount.textContent = `Round ${round}`;
    resultPara.textContent = "Please choose Rock, Paper, or Scissors";

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