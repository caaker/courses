
function testPromise() {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('promise resolved with out error');
      reject('promise rejected with error');
    }, 500);
  });
  return p1;
}

const p1 = testPromise();
p1.then((value) => {
  console.log(value);
}).catch((err) => {
  console.log(err);
});

console.log(p1);
