"use strict"

class Game {
    constructor() {
        this.playerOne = null;
        this.playerTwo = null;
        this.gameRound = 0;
    }
    choosePlayers() {
        let gameMode = prompt("Select [single] for single player, or [multi] for multi player game.", 'single').toLowerCase();
        switch (gameMode) {
            case 'single':
                this.playerOne = new Human();
                this.playerOne.chooseName();
                this.playerTwo = new Ai();
                break;
            case 'multi':
                this.playerOne = new Human();
                this.playerOne.chooseName();
                this.playerTwo = new Human();
                this.playerTwo.chooseName();
                break;
            default:
                alert("Invalid entry, please choose again.");
                this.choosePlayers();
                break;
        }
    }
    gameRounds() {
        let rounds = prompt("Select the type of game, best of three [enter - 3] \n or best of 5 [enter - 5?] or [quit] to end", 3);
        if ((rounds == 3 || rounds == 5) && rounds !== NaN) {
            this.numberOfRounds = rounds;
        }
        else {
            alert("You did not submit a valid entry, please try again.")
            this.gameRounds();

            return this.numberOfRounds;
        }
    }
    // "main" 
    runGame() {
        displayRules();
        this.choosePlayers();
        this.gameRounds();
        while (this.gameRound < this.numberOfRounds) {
            if (this.numberOfRounds == "3" && (this.playerOne.score < 2 || this.playerTwo.score < 2)) {
                this.playerOne.gestureChoice();
                this.playerTwo.gestureChoice();
                this.gameRound++;
                this.gameGestureRules();
            } else if (this.numberOfRounds == "5" && (this.playerOne.score < 2 || this.playerTwo.score < 2)) {
                this.playerOne.gestureChoice();
                this.playerTwo.gestureChoice();
                this.gameRound++;
                this.gameGestureRules();
            } else {
                this.scoreModel();

            }
        }
        this.scoreModel()
    }
    //game logic
    gameGestureRules() {
        let result = "";
        let p1Wins = "";
        let p2Wins = "";
        let draw = "";
        if (this.playerOne.choice == "rock") {
            if (this.playerTwo.choice == "paper" || this.playerTwo.choice == "spock") {
                result = "p2Wins";
            }
            else if (this.playerTwo.choice == "rock") {
                result = "draw";
            }
            else {
                result = "p1Wins";
            }
        }
        else if (this.playerOne.choice == "paper") {
            if (this.playerTwo.choice == "scissors" || this.playerTwo.choice == "lizard") {
                result = "p2Wins";
            }
            else if (this.playerTwo.choice == "paper") {
                result = "draw";
            }
            else {
                result = "p1Wins";
            }
        }
        else if (this.playerOne.choice == "scissors") {
            if (this.playerTwo.choice == "spock" || this.playerTwo.choice == "rock") {
                result = 'p2Wins';
            }
            else if (this.playerTwo.choice == "scissors") {
                result = "draw";
            }
            else {
                result = "p1Wins";
            }
        }
        else if (this.playerOne.choice == "lizard") {
            if (this.playerTwo.choice == "rock" || this.playerTwo.choice == "scissors") {
                result = 'p2Wins';
            }
            else if (this.playerTwo.choice == "lizard") {
                result = "draw";
            }
            else {
                result = "p1Wins";
            }
        }
        else if (this.playerOne.choice == "spock") {
            if (this.playerTwo.choice == "lizard" || this.playerTwo.choice == "paper") {
                result = "p2Wins";
            }
            else if (this.playerTwo.choice == "spock") {
                result = "draw";
            }
            else {
                result = "p1Wins";
            }
        }
        if (result === "p1Wins") {
            console.log(this.playerOne.name + " " + "Wins");
            this.playerOne.score += 1;
        } else if (result === "p2Wins") {
            console.log(this.playerTwo.name + " " + "Wins");
            this.playerTwo.score += 1;
        } else {
            console.log("It is a draw");
        }

    }
    //final score logic
    scoreModel() {
        let winner = "";
        if (this.playerOne.score === 2) {
            alert(this.playerOne.name + " " + "wins!");
            winner = this.playerOne.name;
        }else if (this.playerTwo.score === 2){
            alert(this.playerTwo.name + " " + "wins!");
            winner = this.playerTwo.name;
        }else{
            alert("Game was a draw!");
            winner = "The game was a draw!";
        }
        return winner;
    }
}


//-----------------game end----------------
class Player {
    constructor(name) {
        this.score = 0;
        this.name = name;
        this.choice = "";
        this.gestures = [new rock, new paper, new scissors, new lizard, new spock];
    }
    gestureChoice() {
        console.log("Override this method");
    }

}
class Human extends Player {
    constructor(name) {
        super(name);
    }

    chooseName() {
        let nameChoice = "";
        while (nameChoice = ""); {
            nameChoice = prompt("What is your name?");
        }
        this.name = nameChoice;
    }
    gestureChoice() {
        let gestureChoice = "";
        while (gestureChoice = ""); {
            gestureChoice = prompt("What do you choose: Rock, Paper, Scissors, Lizard, Spock?");
        }
        this.choice = gestureChoice.toLowerCase();
    }
}
class Ai extends Player {
    constructor() {
        super();
    }

    gestureChoice() {
        this.name = 'Computer';
        let gestureItems = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
        let randomNumber = Math.floor(Math.random() * this.gestures.length);
        let finalComputerselection = gestureItems[randomNumber];
        this.choice = finalComputerselection.toLowerCase();
    }

}
class Gesture { //this is to hold the values of what beats what
    constructor() {
        this.name = "";

    }
}
class rock extends Gesture {
    constructor() {
        super();
        this.name = "rock";
    }
}
class paper extends Gesture {
    constructor() {
        super();
        this.name = "paper";
    }
}
class scissors extends Gesture {
    constructor() {
        super();
        this.name = "scissors";
    }
}
class lizard extends Gesture {
    constructor() {
        super();
        this.name = "lizard";
    }
}
class spock extends Gesture {
    constructor() {
        super();
        this.name = "spock";
    }
}
// function gameMode() {
//     let gameMode = prompt("Would you like single or multi player?");
//     return gameMode;
//}
function displayWinner() {
    console.log("You have won!");
}
function gameCounter() {
    let gameCounter = 0;
    gameCounter++;
}

// function that prompts and validates user input
// function promptFor(gameMode, valid){
//     do{
//       var response = prompt(gameMode);
//     } while(!response || !valid(response));
//     return response;
// }

function displayRules() {
    console.log("Welcome to the Rock, Paper, Scissors, Lizard, Spock! \n Two players will choose one of five gestures. \n Gestures: Rock crushes Scissors; Paper covers Rock; Rock crushes Lizard; \n Lizard poisons Spock; Spock smashes Scissor; Scissors decapitates Lizard; \n Lizard eats Paper; Paper disproves Spock; Spock vaporizes Rock \n Best two out of three wins");
}
function thankYouMessage() {
    alert("Thank you for playing!");
}
//validation ------V
// function singleMulti(gameMode) {
//     if (gameMode !== 'single' || this.gameMode !== 'multi') {
//         alert("Invalid entry. Please select again");
//         return gameMode;
//     }
//}
function errorMessage() {
    if (gameType != int);
    alert("You must enter a '3' or a '5' as an integer");
    gameSetupRules();
}

// helper function to pass into promptFor to validate yes/no answers
let game = new Game();
game.runGame();   