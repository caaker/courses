const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('promise resolved with out error');
    reject('promise rejected with error');
  }, 500);
});

p1.then((value) => {
  console.log(value);
}).catch((err) => {
  console.log(err);
});

console.log(p1);
