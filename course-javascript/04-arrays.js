pushAndPop();
arrayFun();

function pushAndPop() {
  const arr = ['a', 'b', 'c', 'd'];

  // push and pop
  let ret = arr.push('e');
  console.log(ret);
  ret = arr.pop();
  console.log(ret);
  console.log(arr);

  // unshift and shift
  ret = arr.unshift('z');
  console.log(ret);
  ret = arr.shift();
  console.log(ret);
  console.log(arr);
}


function arrayFun() {

  // looping
  const arr = [0, 1, 2, 3];
  for(let i = 0; i < arr.length; i++) {
  }

  // cloning
  const clone0 = arr.slice(0);
  const clone1 = [ ...arr ];

  // slicing
  const mid = Math.round((arr.length - 1) / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // splicing
  const splice1 = [0, 1, 2, 3];
  let res = splice1.splice( 2, 0, 'a' );
  console.log(splice1);
  const splice2 = [0, 1, 2, 3];
  res = splice2.splice( 2, 1, 'b' );
  console.log(splice2);
}