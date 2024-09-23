const arr = [ 5, 6, 7, 8, 9 ];

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length;
  while(start < end) {
    
	// calculate the middle index; 
	let mid = Math.round((start + end - 1) / 2);
    
	// console.log(start, mid, end)
	
	// target has been found; return the index
    if(target === arr[mid]) {
      return mid;
    }
	
	// target is less than the middle value; make the end index the new middle index
    if(target < arr[mid]) {
      end = mid;
    }
	
	// target is greater than the middle value;  make the start index the new middle index
    if(target > arr[mid]) {
      start = mid;
    }
  }
  return false;
}

console.log(binarySearch(arr, 7));

/*

  Notes:

    Write again using recursion.  Consider overflow for mid calculation.

  Algorithm:

    With the base case of 1 item, the item is the mid and it is returned

  Complexity:

    Space complexity is O(1)
    Time complexity is O(log n)

*/
