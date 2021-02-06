/*
## Rock Paper Scissors

Write a function rockPaperScissors which takes the throw of 
player 1 and the throw of player 2. 

A throw can have the values of 'rock', 'paper', or 'scissors'. 
It will return 'player 1' if player 1 wins, 
'player 2' if player 2 wins, and 'draw' if there is no winner.
*/
function rockPaperScissors(player1, player2) {
    if (player1 === 'rock' && player2 === 'scissors') {
        return 'player 1';
    } else if (player1 === 'paper' && player2 === 'rock'){
        return 'player 1';
    } else if (player1 === 'scissors' && player2 === 'paper') {
        return 'player 1';
    } else if (player1 === 'scissors' && player2 === 'scissors') {
        return 'draw';
    } else if (player1 === 'paper' && player2 === 'paper') {
        return 'draw';
    } else if (player1 === 'rock' && player2 === 'rock') {
        return 'draw';
    } else {
        return 'player 2';
    }
}

var output = rockPaperScissors('rock', 'scissors');//'player 1'
console.log(output);

var output = rockPaperScissors('rock', 'paper');//'player 2'
console.log(output);

var output = rockPaperScissors('paper', 'paper');//'draw'
console.log(output);