/*
Write a function printBanner which is given some text and prints a 
banner with a border surrounding the text. The border has to stretch 
to the length of the text.

```js
printBanner('Welcome to DigitalCrafts');
```

```
****************************
* Welcome to DigitalCrafts *
****************************
```
*/
function printBanner(text) {
    let border = "";
    for(let i = 1; i <= text.length + 4; i++) {
        border += "*";
    }
    console.log(border);
    console.log("+ " + text + " *");
    console.log(border);
}

printBanner('Welcome to DigitalCrafts');