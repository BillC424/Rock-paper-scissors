//Computer choice function
function computerPlay() {
    //Variable with array that lists options for computer
    let choices = ["rock", "paper", "scissors"];
    //Variable that chooses one of the three strings from the array at random
        let random = Math.floor(Math.random() * choices.length);
    //return either Rock, Paper, or Scissors
    return choices[random];
}

//Plays a single round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {

    const results = document.getElementById("results");
   
    // Rock vs. Paper
    if (playerSelection === "rock" && computerSelection === "paper" ) { 
        computerScore++;
       return results.textContent = "You Lose! Paper beats Rock";
       //Paper vs. Scissors
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
          return results.textContent = "You Lose! Scissors beats Paper";
          //Rock vs. Scissors
      } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
          return results.textContent = "You Win! Rock beats Scissors";
          //Rock vs. Rock
      } else if (playerSelection === "rock" && computerSelection === "rock") {
          return results.textContent = "It's a Tie! You both chose Rock";
      } //Paper vs. Paper
      else if (playerSelection === "paper" && computerSelection === "paper") {
          return results.textContent = "It's a Tie! You both chose Paper";
      } //Scissors vs. Scissors 
      else if (playerSelection === "scissors" && computerSelection === "scissors") {
          return results.textContent = "It's a Tie! You both chose Scissors";
      } //Scissors vs. rock 
      else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
          return results.textContent = "You Lose! Rock beats Scissors";
      } //Scissors vs. paper 
      else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
          return results.textContent = "You Win! Scissors beats Paper";
      } //Paper vs. rock 
      else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
          return results.textContent = "You Win! Paper beats Rock";
      }
}
        //keep track of score
        let computerScore = 0;
        let playerScore = 0;

        // Display score for each player
        function getScore () {
            document.getElementById('#cScore');
            cScore.innerHTML = "Computer score:  " + computerScore
    
            document.getElementById('#pScore');
            pScore.innerHTML = "Player score:  " + playerScore
        }

        function endGame () {
            if (computerScore === 5) {
                location.reload();
                alert("You lose!");
            } else if (playerScore === 5) {
                location.reload();
                alert("You win!");
        }
    }

    

        // Event for playing game 

        const buttons = document.querySelectorAll('button');
        
        buttons.forEach(  (button) => { button.addEventListener ('click', e => playRound (e.target.id, computerPlay() )   );  }   );
        
        buttons.forEach(  (button) => { button.addEventListener ('click', e => getScore() );  }   );

        buttons.forEach(  (button) => { button.addEventListener ('click', e => setTimeout(endGame, 2) );  }   );

        