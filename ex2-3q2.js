// 2-3 Q2. You can put an array as element inside 
// another array. This is known as nested array, and 
// can represent two dimensional arrays, e.g. a matrix.
// Given a 2D matrix in the variable `mat`, write a
// JavaScript program to find its inverse. 
// See https://www.onlinemathlearning.com/matrices-maths.html 
// to review the mathematics of inverse of 2x2 matrix.

let mat = [ 
  [ 1, 0],
  [-1, 3]
];

let [[a, b], [c, d]] = mat;
let inv;  // inverse of mat

const det = a * d - b * c;
if (det == 0) {
  console.log("The matrix has no inverse");
} else {
  inv = [
    [  d / det, -b / det],
    [ -c / det,  a / det]  
  ];
  console.log(`The inverse of the matrix is ${inv}`);
}
