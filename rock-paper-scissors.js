//create function computer play
function computerPlay() {
    //create a variable with array that lists options for computer
    let choices = ["rock", "paper", "scissors"];
    //create a variable that chooses one of the three strings from the array at random
        let random = Math.floor(Math.random() * choices.length);
    //return either Rock, Paper, or Scissors
    return choices[random];
}



//create a function that plays a single round of rock,paper,scissors
function playRound(playerSelection, computerSelection) {

    //Conditional statement for Rock vs. Paper
    if (playerSelection === "rock" && computerSelection === "paper" ) { 
        computerScore++;
       return console.log("You Lose! Paper beats Rock");
       //Conditional statement for Paper vs. Scissors
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
          return console.log("You Lose! Scissors beats Paper");
          //Conditional statement for Rock vs. Scissors
      } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
          return console.log("You Win! Rock beats Scissors");
          //Conditional statement for Rock vs. Rock
      } else if (playerSelection === "rock" && computerSelection === "rock") {
          return console.log("It's a Tie! You both chose Rock");
      } //Conditional statement for Paper vs. Paper
      else if (playerSelection === "paper" && computerSelection === "paper") {
          return console.log("It's a Tie! You both chose Paper");
      } //Conditional statement for Scissors vs. Scissors 
      else if (playerSelection === "scissors" && computerSelection === "scissors") {
          return console.log("It's a Tie! You both chose Scissors");
      } // Conditional statment for scissors vs. rock 
      else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
          return console.log("You Lose! Rock beats Scissors");
      } // Conditional statment for scissors vs. paper 
      else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
          return console.log("You Win! Scissors beats Paper");
      } // conditional statement for paper vs. rock 
      else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
          return console.log("You Win! Paper beats Rock");
      }
}
        //keep track of score

        let computerScore = 0;
let playerScore = 0;
        
        const buttons = document.querySelectorAll('button');

buttons.forEach(  (button) => { button.addEventListener ('click', e => playRound (e.target.id, computerPlay() )   );  }   );

/*function game() {
    //add loop to run playRound function 5 times
    for (i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = playerChoice();
        console.log(playRound(playerSelection, computerSelection));
        
        // use console.log() to display the results of each round
        console.log(computerScore);
        console.log(playerScore);
        
        // End game if player doesn't pick rock, paper, or scissors
        if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
            console.log("You did not pick rock, paper, or scissors! Refresh the browser to restart the game.");
            break;
            //use conosle.log() to display a message showing the result of the 5 rounds
        } else if (i>=4 && computerScore > playerScore) {
            console.log("You lose!");
        } else if (i>=4 && playerScore > computerScore) {
            console.log("You win!");
        } else if (i>=4 && playerScore === computerScore) {
            console.log("It's a tie!")
           
        }

    }
}
  
// Run game 
game();*/

