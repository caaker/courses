const arr = [4, 6, 9, 2];

function linearSearch(arr, target) {
  let i = 0;
  let length = arr.length;
  arr.push(target);
  while(arr[i] !== target) {
    i++;
  }
  if( i < length ) {
    return i
  }
  return 'not found';
}

console.log(linearSearch(arr, 2));

/*

  Notes:

    Uses a sentinel to reduce comparisons from 2 to 1

  Algorithm:

    With the base case of 1 item, the first item is checked.
    Each iterative case simply increases the index by 1

  Complexity:

    Space complexity is 1
    Time complexity is n

*/
