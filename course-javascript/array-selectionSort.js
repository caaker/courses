const arr = [ 5, 3, 7, 1, 9 ];

// searches for a minimum and swaps it once it reaches the end of the array
// sorts linearly from begninning to end
function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let min = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j
      }
    }
    swap(arr, i, min);
  }
  return arr;
}

// arr is passed by reference, so we do not need to return it
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(selectionSort(arr));

/*

  Notes:

    See wikipedia for full algorithm

  Algorithm:

    With the base case of 1 item, there is an excess swap with itself

  Complexity:

    Space complexity is O(1) as there is no additional space needed.  The values are swapped in place.
    Time complexity is O(n^2) as there is a for loop up to n, and an embedded for loop up to n.

*/
