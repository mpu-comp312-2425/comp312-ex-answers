// 2-6 Q2. The variable `comp312` is an array that contains 
// records of student marks in the comp312 class. Each student 
// record has three fields: name, test and exam. Write programs 
// to do the following. Use an Array iteration method 
// (i.e. `.map()`, `.filter()`, `.reduce()`, etc) at least once 
// in each case.
//
// 1. Get a list of student names in the comp312 class
// 2. Get a list of student record with test mark >= 75
// 3. Get a list of student name whose test mark is greater than 
//    exam mark
// 4. Assume final mark = 0.6 * test + 0.4 * exam. Make an array 
//    with records showing the final mark and name for each student.
// 5. Sort the list in descending order of exam mark
// 6. Show the student record with the highest exam mark
// 7. Calculate the average test mark

let comp312 = [
  { name: 'Peter', test: 80, exam: 70 },
  { name: 'John', test: 60, exam: 65 },
  { name: 'Mary', test: 90, exam: 85 },
  { name: 'Christine', test: 70, exam: 76 }
];

let a1 = comp312.map((p) => { return p.name; });
let a2 = comp312.filter((p) => { return p.test > 75; });
let a3 = comp312.filter(
  (p) => { return p.test > p.exam; }
).map(
  (p) => { return p.name; }
);

let a4 = comp312.map((p) => {
  return {
    name: p.name,
    final: p.test * 0.6 + p.exam * 0.4
  };
});

// sort in descending order of exam mark
let a5 = comp312.sort((p1, p2) => {
  if (p1.exam > p2.exam) return -1;
  if (p1.exam < p2.exam) return 1;
  return 0;
});

/* alternative solution */
// let a5 = comp312.sort((p1, p2) => {
//   return p2.exam - p1.exam
// });


let a6 = comp312.reduce((p1, p2) => {
  if (p1.exam > p2.exam) return p1;
  return p2;
});

/* alternative solution */
// sort in descending order of exam mark, then
// retrieve the first record, which has the highest exam mark
// let a6 = comp312.sort((p1, p2) => {
//   return p2.exam - p1.exam
// })[0];

let a7 = comp312.map(
  (p) => { return p.test; }
).reduce(
  (t1, t2) => { return t1 + t2; }
) / comp312.length;
