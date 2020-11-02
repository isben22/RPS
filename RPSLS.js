"use strict"

class Game {

    constructor() {
        this.playerOne = null;
        this.playerTwo = null;
        this.gameRound = 0;
    }
    choosePlayers() {
        let gameMode = prompt("Select [single] for single player, or [multi] for multi player game.");
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
                break
            default:
                break;
        }
    }
    gameRounds() {
        let rounds = prompt("Select the type of game, best of three [enter - 3] \n or best of 5 [enter - 5?] or [quit] to end", 3);
        //TODO seperate into its own single function call
        if (rounds == 3 || rounds == 5) {
            this.numberOfRounds = rounds;
        } else {
            // this.gameRound = numberOfRounds;
            alert("You did not submit a valid entry, please try again.")
            this.gameRounds();
        }
        return this.numberOfRounds;
    }


    // "main" 
    runGame() {
        displayRules();
        this.choosePlayers();
        this.gameRounds();

        //TODO need to tie picks into win talley
        while (this.gameRound < this.numberOfRounds) {
            this.playerOne.gestureChoice();
            this.playerTwo.gestureChoice();
            this.gameRound++;
            this.gameGestureRules();
        }

    }
    //game logic
    gameGestureRules() { 
        if (this.playerOne.gestureChoice == "Rock") {
            if (this.playerTwo.gestureChoice == "Paper" || this.playerTwo.gestureChoice == "spock") {
                result = userWins;
            }
            else if (this.playerTwo.gestureChoice == "Rock") {
                result = draw;
            }
            else {
                result = aiWins;
            }
        }
        else if (this.playerOne.gestureChoice == "Paper") {
            if (this.playerTwo.gestureChoice == "scissor" || this.playerTwo.gestureChoice == "lizard") {
                result = userWins;
            }
            else if (this.playerTwo.gestureChoice == "paper") {
                result = draw;
            }
            else {
                result = aiWins;
            }
        }
        else if (this.playerOne.gestureChoice == "Scissor") {
            if (this.playerTwo.gestureChoice == "spock" || this.playerTwo.gestureChoice == "rock") {
                result = userWins;
            }
            else if (this.playerTwo.gestureChoice == "scissor") {
                result = draw;
            }
            else {
                result = aiWins;
            }
        }
        else if (this.playerOne.gestureChoice == "Lizard") {
            if (this.playerTwo.gestureChoice == "rock" || this.playerTwo.gestureChoice == "scissor") {
                result = aiWins;
            }
            else if (this.playerTwo.gestureChoice == "lizard") {
                result = draw;
            }
            else {
                result = aiWins;
            }
        }
        else if (this.playerOne.gestureChoice == "Spock") {
            if (this.playerTwo.gestureChoice == "lizard" || this.playerTwo.gestureChoice == "paper") {
                result = userWins;
            }
            else if (userthis.playerTwo.gestureChoice == "spock") {
                result = draw;
            }
            else {
                result = aiWins;
            }
        }
    }

}

// finalScore(){
//    alert("you won I think!");
//-----------------game end----------------
class Player {
    constructor(name) {
        this.score = 0;
        this.name = name;
        this.choice = "";
        this.gestures = [new Rock, new Paper, new Scissors, new Lizard, new Spock];
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
            gestureChoice = prompt("What do you choose: Rock, Paper, Scissor, Lizard, Spock?");
        }
        this.choice = gestureChoice;
    }
}
class Ai extends Player {
    constructor() {
        super();
    }

    gestureChoice() {
        let gestureItems = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
        let randomNumber = Math.floor(Math.random() * this.gestures.length);
        let finalComputerselection = gestureItems[randomNumber];
        return finalComputerselection;
    }

}
class Gesture { //this is to hold the values of what beats what
    constructor() {
        this.name = "";

    }
}
class Rock extends Gesture {
    constructor() {
        super();
        this.name = "Rock";
    }
}
class Paper extends Gesture {
    constructor() {
        super();
        this.name = "Paper";
    }
}
class Scissors extends Gesture {
    constructor() {
        super();
        this.name = "Scissors";
    }
}
class Lizard extends Gesture {
    constructor() {
        super();
        this.name = "Lizard";
    }
}
class Spock extends Gesture {
    constructor() {
        super();
        this.name = "Spock";
    }
}
function gameMode() {
    let gameMode = prompt("Would you like single or multi player?");
    return gameMode;
}
function displayWinner() {
    console.log("You have won!");
}
function gameCounter() {
    let gameCounter = 0;
    gameCounter++;
}
// placeholder for validation
// function that prompts and validates user input
// function promptFor(gameMode, valid){
//     do{
//       var response = prompt(gameMode);
//     } while(!response || !valid(response));
//     return response;
// }
// function validateGameType{
//       if (gameType != 3 || gameType != 5);
//       alert("You must select a '3' or a '5' ");

function displayRules() {
    console.log("Welcome to the Rock, Paper, Scissors, Lizard, Spock! \n Two players will choose one of five gestures. \n Gestures: Rock crushes Scissors; Paper covers Rock; Rock crushes Lizard; \n Lizard poisons Spock; Spock smashes Scissor; Scissors decapitates Lizard; \n Lizard eats Paper; Paper disproves Spock; Spock vaporizes Rock \n Best two out of three wins");
}
function thankYouMessage() {
    alert("Thank you for playing!");
}
///START HERE
function errorMessage() {
    if (gameType != int);
    alert("You must enter a '3' or a '5' as an integer");
    gameSetupRules();
}
// helper function to pass into promptFor to validate yes/no answers
function yesNo(input) {
    return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}
let game = new Game();
game.runGame();   