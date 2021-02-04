/*
## Print a box

Write function printBox which is given a width and height and prints 
a hollow box of those given dimensions.

```js
printBox(6, 4);
```

```
******
*    *
*    *
******
```
*/
function printBox(width, height) {
    for(let i = 1; i <= height; i++) {
        let row = "";
        for (let j = 1; j <= width; j++) {
            if(i === 1 || i === height) {
                row = row + "*";
            } else {
                if (j === 1 || j === width) {
                    row = row + "*";
                } else {
                    row = row + " ";
                }
            }
        }
        console.log(row);
    }
}

printBox(6, 4);
