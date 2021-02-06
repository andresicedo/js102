/*
## Tic Tac Toe

Write a function ticTacToe which takes a two-dimensional array 
of size 3x3. Each cell in the two dimensional array can be one of 
'O', 'X', or null. The ticTacToe function will determine the winner by:

returning 'O' if O makes a row
returning 'X' if X makes a row
return null if neither makes a row

```js


*/
function ticTacToe(array) {
    if(array[0][0] === 'O' && array[0][1] === 'O' && array[0][2] === 'O') {
        return 'O';
    }
    if(array[1][0] === 'O' && array[1][1] === 'O' && array[1][2] === 'O') {
        return 'O';
    }
    if(array[2][0] === 'O' && array[2][1] === 'O' && array[2][2] === 'O') {
        return 'O';
    }
    if(array[0][0] === 'O' && array[1][0] === 'O' && array[2][0] === 'O') {
        return 'O';
    }
    if(array[0][1] === 'O' && array[1][1] === 'O' && array[2][1] === 'O') {
        return 'O';
    }
    if(array[0][2] === 'O' && array[1][2] === 'O' && array[2][2] === 'O') {
        return 'O';
    }
    if(array[0][0] === 'O' && array[1][1] === 'O' && array[2][2] === 'O') {
        return 'O';
    }
    if(array[0][2] === 'O' && array[1][1] === 'O' && array[2][0] === 'O') {
        return 'O';
    }
    


    if(array[0][0] === 'X' && array[0][1] === 'X' && array[0][2] === 'X') {
        return 'X';
    }
    if(array[1][0] === 'X' && array[1][1] === 'X' && array[1][2] === 'X') {
        return 'X';
    }
    if(array[2][0] === 'X' && array[2][1] === 'X' && array[2][2] === 'X') {
        return 'X';
    }
    if(array[0][0] === 'X' && array[1][0] === 'X' && array[2][0] === 'X') {
        return 'X';
    }
    if(array[0][1] === 'X' && array[1][1] === 'X' && array[2][1] === 'X') {
        return 'X';
    }
    if(array[0][2] === 'X' && array[1][2] === 'X' && array[2][2] === 'X') {
        return 'X';
    }
    if(array[0][0] === 'X' && array[1][1] === 'X' && array[2][2] === 'X') {
        return 'X';
    }
    if(array[0][2] === 'X' && array[1][1] === 'X' && array[2][0] === 'X') {
        return 'X';
    }

    else {
        return null;
    }
}

var output = ticTacToe([
    ['O', 'O', 'O'],
    ['X', null, 'X'],
    [null, 'X', null],
  ]);//'O'
console.log(output);
  
var output = ticTacToe([
    ['O', 'X', 'O'],
    ['O', 'X', null],
    [null, 'X', null],
  ]);//'X'
console.log(output);

var output = ticTacToe([
    ['O', 'X', 'O'],
    ['O', 'O', null],
    [null, 'X', 'X'],
  ]);//null
console.log(output);