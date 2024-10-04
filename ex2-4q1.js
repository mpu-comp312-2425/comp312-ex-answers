// 2-4 Q1. Write a **function** `sum(num)` to calculate the
// sum of elements in an array `num`.

function sum(num) {
  let ans = 0;
  for (let k of num) { ans += k; }
  return ans;
}

let x = [1, 2, 3, 4, 5];
let ans = sum(x);
console.log('Correct? ', ans == 15);
