// hof - higher order functions

// looping
const output2 = [];
[0, 1, 2, 3, 4].forEach((val, i)=>{
  output2.push(val);
});
console.log('Looping: ', output2);

// mapping - multiply all by 2
const output3 = [0, 1, 2, 3, 4].map((val)=>{
  return val * 2;
});
console.log('Mapping: ', output3);

// filtering - filter even numbers
const output4 = [0, 1, 2, 3, 4].filter((val)=>{
  if(val % 2 === 0) {
    return true;
  }
});
console.log('Filtering: ', output4);

// reducing - reduce an array to a single value
const initial = 0;
const output1 = [1, 2, 3, 4].reduce((previous, current, index, array)=>{
  return previous + current;
}, initial);
console.log('Reducing: ', output1);