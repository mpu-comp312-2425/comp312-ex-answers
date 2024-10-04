// 2-4 Q2. Write a function `odd(n)` to generate an array
// of odd numbers less than or equal to `n`. Test your 
// function with the following code.

function odd(upper) {
  let ans = [];
  let k = 1;
  while (k <= upper) {
      ans.push(k);
      k = k + 2;
  }
  return ans;
}

let a = odd(1);
console.log(a); // should print [1]
console.log(odd(9)); // should print [1,3,5,7,9]
