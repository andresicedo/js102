/*
## Sum the numbers
Write a function sumNumbers which is given an array of 
numbers and returns the sum of the numbers.
sumNumbers([1, 4, 8]);
*/
function sumNumbers(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum+= array[i];
    }
    return sum;
}

var output = sumNumbers([1, 4, 8]);//13
console.log(output)