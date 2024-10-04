// 2-3 Q1. Given an array `num`, write a JavaScript program 
// to find the largest number in the array.

let num = [32, 15, 20, 41, 2, 39];
let largestSoFar = num[0];
for (let k of num) {
  // compare k with largestSoFar
  if (k > largestSoFar) {
    largestSoFar = k;
  }
}
console.log(largestSoFar);
