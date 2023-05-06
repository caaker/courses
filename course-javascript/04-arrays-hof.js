// looping
let output = [];
[0, 1, 2, 3, 4].forEach((val, i) => output.push(val));
console.log('Looping: ', output);

// mapping
output = [0, 1, 2, 3, 4].map((val) => val * 2);
console.log('Mapping: ', output);

// filtering
output = [0, 1, 2, 3, 4].filter((val) => val % 2 === 0 ? true : false);
console.log('Filtering: ', output);

// reducing - reduce an array to a single value
const initial = 0;
output = [1, 2, 3, 4].reduce((previous, current, index, array)=>{
  return previous + current;
}, initial);
console.log('Reducing: ', output);