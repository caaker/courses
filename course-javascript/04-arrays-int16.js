// actual array with 16 bit integers, default value is 0
const arr_16 = new Int16Array(10);
for(let i = 0; i < arr_16.length; i++) {
  console.log(arr_16[i]);
}

// actual array with 32 bit integers
const arr_32 = new Int32Array(10);
for(let i = 0; i < arr_32.length; i++) {
  arr_32[i] = i;
  console.log(arr_32[i]);
}