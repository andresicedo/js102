/*
## Matrix Addition

Write a function matrixAdd which is given two two-dimensional arrays, 
and returns a new two-dimensional array containing their matrix sum.

```js
> matrixAdd([[[1, 3], [2, 4]], [[5, 2], [1, 0]]])//[ [ 6, 5 ], [ 3, 4 ] ]
```
*/
function matrixAdd(array1) {
    let arr1 = [];
    let sum1 = 0;
    let arr2 = [];
    let sum2 = 0;
    let arr3 = [];
    let sum3 = 0;
    let arr4 = [];
    let sum4 = 0;
    let finalArr = [[],[]];

    for (let i = 0; i< array1.length; i++) {
        arr1.push(array1[i][0][0]);
    }
    for(let i = 0; i < arr1.length; i++) {
        sum1+=arr1[i];
    }
    for (let i = 0; i< array1.length; i++) {
        arr2.push(array1[i][0][1]);
    }
    for(let i = 0; i < arr2.length; i++) {
        sum2+=arr2[i];
    }
    for (let i = 0; i< array1.length; i++) {
        arr3.push(array1[i][1][0]);
    }
    for(let i = 0; i < arr2.length; i++) {
        sum3+=arr3[i];
    }
    for (let i = 0; i< array1.length; i++) {
        arr4.push(array1[i][1][1]);
    }
    for(let i = 0; i < arr4.length; i++) {
        sum4+=arr4[i];
    }
    finalArr[0].push(sum1);
    finalArr[0].push(sum2);
    finalArr[1].push(sum3);
    finalArr[1].push(sum4);
    return finalArr;
}

var output = matrixAdd([[[1, 3], [2, 4]], [[5, 2], [1, 0]]])
//[ [ 6, 5 ], [ 3, 4 ] ]
console.log(output);