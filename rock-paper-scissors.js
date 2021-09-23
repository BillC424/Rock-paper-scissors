//create function computer play
function computerPlay() {
    //define array that lists options
    const choices = ["Rock", "Paper", "Scissors"];
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
    if (playerSelection === "rock" && computerSelection === "Paper" ) {
       return "You Lose! Paper beats Rock";
       //Conditional statement for Paper vs. Scissors
      } else if (playerSelection === "paper" && computerSelection === "Scissors") {
          return "You Lose! Scissors beats Paper";
          //Conditional statement for Rock vs. Scissors
      } else if (playerSelection === "rock" && computerSelection === "Scissors") {
          return "You Win! Rock beats Scissors";
          //Conditional statement for Rock vs. Rock
      } else if (playerSelection === "rock" && computerSelection === "Rock") {
          return "It's a Tie! You both chose Rock";
      } //Conditional statement for Paper vs. Paper
      else if (playerSelection === "paper" && computerSelection === "Paper") {
          return "It's a Tie! You both chose Paper";
      } //Conditional statement for Scissors vs. Scissors 
      else if (playerSelection === "scissors" && computerSelection === "Scissors") {
          return "It's a Tie! You both chose Paper";
      } // Conditional statment for scissors vs. rock 
      else if (playerSelection === "scissors" && computerSelection === "Rock") {
          return "You Lose! Rock beats Scissors.";
      } // Conditional statment for scissors vs. paper 
      else if (playerSelection === "scissors" && computerSelection === "Paper") {
          return "You Win! Scissors beats Paper";
      } // conditional statement for paper vs. rock 
      else if (playerSelection === "paper" && computerSelection === "Rock") {
          return "You Win! Paper beats Rock";
      }

    //return a string that declares the winner of the round
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
