/*
## Just the positives

Write a function positiveNumbers which is given an array of 
numbers and returns a new array containing only the positive 
numbers within the given array.

positiveNumbers([1, -3, 5, -3, 0]); //[1, 5, 0]
positiveNumbers([1, 2, 3]);//[1, 2, 3]
positiveNumbers([-1, -2, -3]);//[]
```
*/
function positiveNumbers(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] >= 0) {
            newArray.push(array[i])
        }
    }
    return newArray;
}

var output = positiveNumbers([1, -3, 5, -3, 0]); //[1, 5, 0]
console.log(output)

var output = positiveNumbers([1, 2, 3]);//[1, 2, 3]
console.log(output)

var output = positiveNumbers([-1, -2, -3]);//[]
console.log(output)