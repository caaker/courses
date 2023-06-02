const arr = [0, 1];

function reverseArray(arr) {
  for(let i = 0; Math.floor(i < arr.length) / 2; i++) {
    // swap i with arr.length - 1 for second base case
    // and  swap i with arr.length - 1 - i for iterative cases
    swap(arr, i, arr.length - 1)
  }
  return arr;
}

function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

console.log(reverseArray(arr));

/*

  Algorithm:

    base case of 1 item - the loop will not run and the original array is returned
    iterative case of 2 items ( even ) - there will be one swap
    iterative case of 3 items ( odd ) - use Math.floor to ensure that the middle element is not swapped with itself

  Complexity:

    Time Complexity is O(n) with a constant of 1/2
    Space complexity is O(1) as there is no additional space needed.  The values are swapped in place.

*/
