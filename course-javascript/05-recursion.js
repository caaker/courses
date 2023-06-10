// recursion can mimic simple loop
let count = 10;
function rec1() {
  console.log(count)
  if(count--) {
    rec1();
  }
}
rec1();


// we can us it to split an array in half and in half and in half
function rec2(arr) {

  // base case is when array has 1 item
  if(arr.length === 1) {
    return arr;
  }

  // iterative cases when array has 2 or more items
  const mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  console.log('mergeSplit: ', left);
  rec2(left);
}

rec2([0, 2, 4, 6, 20, 10, 12, 14]);

