/*
## Caesar Cipher 2

Write a function decipher which is given a string, an offset, and returns the original message.

```js
decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13);
```

```
'Genius without education is like silver in the mine'
```
*/
function decipher(str, offset) {
    //create alphabet string, split at '' 
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = abc.split("");
    //create a result str
    let result = '';
    //iterate over the string given
    for(let i = 0; i < str.length; i++) {
        //update 'i' to lowercase letters
        const currentABC = str[i].toLowerCase();
        //find index of current letter in alphabet
        const currentIndex = alphabet.indexOf(currentABC);
        //find index of new letter using modulo
        const newIndex = (currentIndex + offset) % 26;
        //find new letter in alphabet
        const newABC = alphabet[newIndex];
        //if iteration is at a ' ', add current value to result
        if(currentIndex === -1) {
            result += currentABC;
        //else add newLetter to result
        } else {
            result += newABC;
        }
    }
    //update result string to update first letter to uppercase
    //split result sting at ''
    let updatedStr = result.split('');
    //iterate over array of strings
    for(let i = 0; i < updatedStr.length; i++) {
        //update index at 0 to uppercase
        updatedStr[0] = updatedStr[0].toUpperCase();
    }
    //join the updated array of strings once more into a string
    let capCase = updatedStr.join('');
    //log the capCase
    console.log(capCase);
}

decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13);
//'Genius without education is like silver in the mine'