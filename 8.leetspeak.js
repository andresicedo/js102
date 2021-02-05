/*
## Leetspeak

Write a function leetspeak which is given a string, and returns 
the leetspeak equivalent of the string. To convert text to its 
leetspeak version, make the following substitutions:

> A => 4
> E => 3
> G => 6
> I => 1
> O => 0
> S => 5
> T => 7

```js
leetspeak('Leet');
```
l337
```
*/
const subs = {
    'A': 4,
    'E': 3,
    'G': 6,
    'I': 1,
    'O': 0,
    'S': 5,
    'T': 7
}
function leetspeak(string) {
    //create an empty array
    let arr = [];
    //create an empty result string
    let result = '';
    //turn string to uppercase letters and split at ''
    let upper = string.toUpperCase().split('');
    //iterate over the subs objet
    for(let i = 0; i < upper.length; i++) {
        if(subs[upper[i]]) {
            arr.push(subs[upper[i]]);
        }
        else {
            arr.push(upper[i]);
        }
    }
    console.log(arr)
 }

leetspeak('Leet');