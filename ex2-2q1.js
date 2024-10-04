// 2-2 Q1. Write a program to calculate the sum of even 
// positive numbers up to 30.
// The answer should be 240.

const pi = 3.14
let sum = 0;
for (let k = 2; k <= 30; k = k + 2) {
  sum += k;
}
console.log("the answer is " + sum)
