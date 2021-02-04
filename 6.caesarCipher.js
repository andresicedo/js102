/*
## Caesar Cipher

Write a function cipher which is given a string, an offset, and returns 
the Caesar cipher of the string.

```js
cipher('Genius without education is like silver in the mine', 13);
```

```
'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'
```
*/
function cipher(string, offset) {
    // let lowerCase = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
    // 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
    // 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let newCipher = [];
    let splitted = string.split("");
    let lowerCase = {0: " ",1: "a",2: "b",3: "c",4: "d",5: "e",6: "f",
        7: "g",8: "h",9: "i",10: "j",11: "k",12: "l",13: "m",14: "n",
        15: "o",16: "p",17: "q",18: "r",19: "s",20: "t",21: "u",22: "v",
        23: "w",24: "x",25: "y",26: "z",
    }
    
}

cipher('Genius without education is like silver in the mine', 13);