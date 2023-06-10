
// i like arrays
// arrayPush();
arrayLoop();

function arrayPush() {
  const arr = ['a', 'b', 'c', 'd'];

  // push returns the length and pop returns the value
  let ret = arr.push('e');
  console.log(ret);
  ret = arr.pop();
  console.log(ret);
  console.log(arr);

  // unshift returns the length and shift returns the value
  ret = arr.unshift('e');
  console.log(ret);
  ret = arr.shift();
  console.log(ret);
  console.log(arr);
}


function arrayLoop() {

  // looping
  const arr = [0, 1, 2, 3];
  for(let i = 0; i < arr.length; i++) {
  }

  // cloning
  const clone0 = arr.slice(0);
  const clone1 = [ ...arr ];

  // slicing - original array has not changed
  const mid = Math.round((arr.length - 1) / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // splicing - can change the original array
  const splice1 = [0, 1, 2, 3];

  // at index 2 add 'a' and remove 0 values
  let res = splice1.splice( 2, 0, 'a' );
  console.log(splice1);

  // at index 2 add a 'b' an remove 1 value
  const splice2 = [0, 1, 2, 3];
  res = splice2.splice( 2, 1, 'b' );
  console.log(splice2);
}