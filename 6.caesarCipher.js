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
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let result = ''
    for (let i = 0; i < string.length; i++) {
        //turn i into lowercase
      const currentLetter = string[i].toLowerCase(); 
      //find index of current letter in alphabet
      const currentIndex = alphabet.indexOf(currentLetter);
      //find index of new character, modulo wraps to beginning when > 26
      const newIndex = (currentIndex + offset) % 26; 
      //find new letter in alphabet via index
      const newLetter = alphabet[newIndex]; 
      // if we could not find the current letter, it was a symbol
      if (currentIndex === -1) { 
        // so just use that
        result += currentLetter; 
        // otherwise
      } else { 
        // add the new character to the result
        result += newLetter; 
      }
    }
    let newResult = result.split("")
    for(let i = 0; i < newResult.length; i++) {
        newResult[0] = newResult[0].toUpperCase();
        } 
    let caps = newResult.join('');
    console.log(caps); // print the result
  }

cipher('Genius without education is like silver in the mine', 13);
//'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'

