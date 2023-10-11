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

// The result will be output to the console