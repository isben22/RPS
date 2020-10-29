"use strict"

//Need to build four classes of objects: game object (logic) player class and a human class and a computer class. 

class Game{

    constructor() {
        this.playerOne = new Player();
        this.playerTwo = new Player();
        this.playerOne.chooseGesture();
        this.playerTwo.chooseGesture();
        
    }
    
    runGame() {  // "main" method
    displayRules();
    
    if(this.playerOne.score == 2 || this.playerTwo.score == 2){
        console.log("Win");
    }
    
    
    let numberOfRounds = 0;
    let gameModeentry = [];    
    let gameType = prompt("Select game type, best of three [enter - 3] or best of 5 [enter - 5?", 3);
            switch(gameType){
              case '3':
                  numberOfRounds = 3;
                  gameModeEntry = gameMode; //start here
                break;
              case '5':
                  numberOfRounds = 5;
                  gameModeEntry(gameMode);
                break;
              default:
                break;
            }
        }
    }

//-----------------game end----------------


class Player{
    constructor() {
      this.playerNumer;
      this.type = [];
      this.score = 0;
      this.name = name;
    }
    chooseGesture(){

    }
}

function gameMode() {
    let gameMode = prompt(" would you like single or multi player?");
    return gameMode;
}
function displayWinner(){
        console.log(" ")
    }


function displayRules() {
    console.log("Welcome to the Rock, Paper, Scissors, Lizard, Spock!")
    console.log("Two players will choose one of five gestures.")
    console.log("Gestures: Rock crushes Scissors; Paper covers Rock; Rock crushes Lizard; Lizard poisons Spock; Spock smashes Scissor; Scissors decapitates Lizard; Lizard eats Paper; Paper disproves Spock; Spock vaporizes Rock .")
    console.log("Best two out of three wins");

    
}


let game = new Game();
game.runGame();