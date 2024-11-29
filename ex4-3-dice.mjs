function tossDice() {
  const timeTaken = 2000;
  const tossFailed = Math.random() < 0.1;
  const tossResult = Math.floor(Math.random() * 6) + 1;
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (tossFailed) {
        reject("toss fails");
      } else {
        resolve(tossResult);
      }
    }, timeTaken)
  });
  return promise;
}

// Promise style
console.log("will run tossDice()...");
tossDice().then((res) => { console.log(`promise-style result: ${res}`); })
  .catch((err) => { console.log('promise-style error: ' + err); })

// async and await

async function toss() {
  console.log("running toss()...");
  const result = await tossDice();
  return result;
}

try {
  const t = await toss();
  console.log(`async/await style result: ${t}`);
} catch (error) {
  console.log('async/await style error: ' + error);
}
