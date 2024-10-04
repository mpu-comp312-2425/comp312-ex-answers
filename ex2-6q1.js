// 2-6 Q1. Given an array `N` as below, write a program to do the 
// following. You should use callback functions.
// 
// 1. Obtain an array of hexadecimal representation of the 
//    numbers in `N`. (Hints: use `n.toString(16)` to convert 
//    a number `n` to hexadecimal)
// 2. Obtain an array of the numbers in `N` between 20 and 40 
//    inclusively
// 3. Count how many of the numbers in `N` are odd
// 4. Calculate the sum of the numbers in `N`. Try to use 
//    `.reduce()` in Array. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

let N = [32, 53, 42, 25, 48, 10];

let a1 = N.map((n) => { return n.toString(16); });
/* alternative solutions */
// let a1 = N.map((n) => n.toString(16));
// let a1 = N.map(function (n) { return n.toString(16); });

let a2 = N.filter((n) => { return (n >= 20) && (n <= 40); });

let a3 = N.filter((n) => { return (n % 2 == 0); }).length;

let a4 = N.reduce((a, b) => { return (a + b); });
