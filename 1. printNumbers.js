/*
Write a function printNumbers which is given a start number and 
an end number. It will print the numbers from one to the other, one 
per line:

```js
printNumbers(1, 10);
```

```
1
2
3
4
5
6
7
8
9
10
```

Write two versions of the above function. One using a while loop 
and the other using a for loop.
*/
function printNumbers(start, end) {
    while (start <= end) {
        console.log(start);
        start++;
    }
}

printNumbers(1,10);

function printNumbers(start, end) {
    for(let i = start; i <= end; i++) {
        console.log(start);
        start++;
    }
}
printNumbers(1,10);