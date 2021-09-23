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
