/*
## Long-long Vowels

Write a function, which is given a string, return the result of 
extending any long vowels to the length of 5.
```js
longLongVowels('Good'); //'Goooood'
longLongVowels('Cheese');//'Cheeeeese'
longLongVowels('Man');//'Man'
*/
function longLongVowels(string) {
    //split string and '' 
    let splitStr = string.split('');
    //iterate over the split string
    for(let i = 0; i < splitStr.length; i++) {
        //if i and i+1 are equal, append i three more times after i
        if(splitStr[i] === splitStr[i+1]) {
            splitStr.splice(i, 0, splitStr[i], splitStr[i], splitStr[i]);
            break;
        }
    }
    //join the updated string
    let joined = splitStr.join('');
    return joined;
}

var output = longLongVowels('Good'); //'Goooood'
console.log(output);

var output = longLongVowels('Cheese');//'Cheeeeese'
console.log(output);

var output = longLongVowels('Man');//'Man'
console.log(output);