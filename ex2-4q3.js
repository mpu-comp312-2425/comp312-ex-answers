// 2-4 Q3. Write a function `search(num, n)` to search for 
// an number `n` in the array `num`. Return the position
// of the element if it is found. If it is not found, 
// return -1. Test your function with the following code.

function search(num, n) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] === n) return i;
  }
  return -1;
}

// another version
function search2(num, n) {
  for ([idx, val] of num.entries()) {
    if (val === n) return idx;
  }
  return -1;
}

let x = [6, 8, 3, -2];
console.log(search(x, 3)); // should print 2
console.log(search(x, 1)); // should print -1
