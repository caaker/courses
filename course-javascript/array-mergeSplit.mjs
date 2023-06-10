// used in merge sort
function mergeSplit(arr) {

  // base case is an array with 1 element which is considered sorted
  if(arr.length === 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // double recursion like dfs
  console.log('mergeSplit: ', left, right);
  mergeSplit(left);
  mergeSplit(right);
}

mergeSplit([0, 2, 4, 6, 20, 10, 12, 14]);
