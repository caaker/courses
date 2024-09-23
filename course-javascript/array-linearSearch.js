const arr = [4, 6, 9, 2];

// optimized using a sentinel which is also the target; perhaps hard code it to null?
function linearSearch(arr, target) {
  let i = 0;
  let length = arr.length;
  arr.push(target);
  while(arr[i] !== target) {
    i++;
  }
  
  // target was found before we reached the end of the array; return it
  if( i < length ) {
    return i
  }
  
  // we have reached the sentinel value ( also the target ) and never found the target
  // our length was calculated before the sentinel value was added
  return 'not found';
}

console.log(linearSearch(arr, 2));

/*

  Notes:

    Use a sentinel to reduce comparisons from 2 to 1

  Algorithm:

    With the base case of 1 item, the first item is checked.
    Each iterative case simply increases the index by 1

  Complexity:

    Space complexity is O(1)
    Time complexity is O(n)

*/
