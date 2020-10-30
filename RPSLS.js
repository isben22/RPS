"use strict"

class Game {

    constructor() {
        this.playerOne = new Player();
        this.playerTwo = new Player();
        //this.playerOne.chooseGesture();
        //this.playerTwo.chooseGesture();

    }
    runGame() {// "main" method
        displayRules();

        if (this.playerOne.score == 2 || this.playerTwo.score == 2) {
            console.log("Win");

        }

        let numberOfRounds = 0;
        let roundNumer = 0;
        let gameModeEntry = [];
        let gameType = prompt("Select the type of game, best of three [enter - 3] \n or best of 5 [enter - 5?] or [quit] to end", 3);
        switch (gameType) {
            case '3':
                numberOfRounds = 3;
                gameMode();
                gameModeEntry = gameMode();
                break;
            case '5':
                numberOfRounds = 5;
                gameMode();
                gameModeEntry = gameMode();
                break;
            default:
                thankYouMessage();
                break;
        }

// here we start by launching the single player dialog

while (gameModeEntry = 3) {
    
    
}






    }


//singlePlayer choice
var gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
function computerSelection() {
    let randomNumber = Math.floor(Math.random() * gestures.length);
    let finalComputerselection = gestures[randomNumber];
    return finalComputerselection;
}
function multiplayerSelection() {
    let playerSelection =[gestures];
    return playerSelection;
}
//-----------------game end----------------
class Player {
    constructor() {
        this.type = []; //computer or player
        this.score = 0;
        this.name = name;
    }
}
class Choice{
    constructor(){
        this.gestureSelection = [];

}
function gameMode() {
    let gameMode = prompt(" would you like single or multi player?");
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
    console.log("Welcome to the Rock, Paper, Scissors, Lizard, Spock!")
    console.log("Two players will choose one of five gestures.")
    console.log("Gestures: Rock crushes Scissors; Paper covers Rock; Rock crushes Lizard; \n Lizard poisons Spock; Spock smashes Scissor; Scissors decapitates Lizard; \n Lizard eats Paper; Paper disproves Spock; Spock vaporizes Rock .")
    console.log("Best two out of three wins");
}

function thankYouMessage() {
    alert("Thank you for playing!");
}


let game = new Game();
game.runGame();   