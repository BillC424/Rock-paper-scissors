//create function computer play
function computerPlay() {
    //define array that lists options
    const choices = ["rock", "paper", "scissors"];
    //create a variable that chooses one of the three strings from the array at random
        const random = Math.floor(Math.random() * choices.length);
    //return either Rock, Paper, or Scissors
    return choices[random];
}
console.log(computerPlay());

//create a function that plays a single round of rock,paper,scissors
function playRound(playerSelection, computerSelection) {
    //Make your function’s playerSelection parameter case-insensitive

    //Conditional statement for Rock vs. Paper
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper" ) {
       return "You Lose! Paper beats Rock";
       //Conditional statement for Paper vs. Scissors
      } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
          return "You Lose! Scissors beats Paper";
          //Conditional statement for Rock vs. Scissors
      } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
          return "You Win! Rock beats Scissors";
          //Conditional statement for Rock vs. Rock
      } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock") {
          return "It's a Tie! You both chose Rock";
      } //Conditional statement for Paper vs. Paper
      else if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper") {
          return "It's a Tie! You both chose Paper";
      } //Conditional statement for Scissors vs. Scissors 
      else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors") {
          return "It's a Tie! You both chose Paper";
      } // Conditional statment for scissors vs. rock 
      else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
          return "You Lose! Rock beats Scissors.";
      } // Conditional statment for scissors vs. paper 
      else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
          return "You Win! Scissors beats Paper";
      } // conditional statement for paper vs. rock 
      else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
          return "You Win! Paper beats Rock";
      }

    //return a string that declares the winner of the roundß
}

const playerSelection = "ROCK";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
