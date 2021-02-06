/*
## Matrix Multiplication

Write a function matrixMultiply which is given two two-dimensional 
arrays - you can assume the matricies are of size 2x2. It will return 
the result of matrix multiplication between the two given matricies.

https://www.khanacademy.org/math/precalculus/precalc-matrices/
multiplying-matrices-by-matrices/v/matrix-multiplication-intro
*/
function matrixMultiply(array1, array2) {
    let matrix = [[],[]];
    let sum1 = (array1[0][0] * array2[0][0]) + (array1[0][1] * array2[1][0]);
    let sum2 = (array1[0][0] * array2[0][1]) + (array1[0][1] * array2[1][1]);
    let sum3 = (array1[1][0] * array2[0][0]) + (array1[1][1] * array2[1][0]);
    let sum4 = (array1[1][0] * array2[0][1]) + (array1[1][1] * array2[1][1]);
    matrix[0].push(sum1);
    matrix[0].push(sum2);
    matrix[1].push(sum3);
    matrix[1].push(sum4);
    
    return matrix;
}

var output = matrixMultiply([[2, 4],[3, 4],],[[5, 2],[3, 1],]);
//[ [22,  8], [27, 10] ]
console.log(output);
