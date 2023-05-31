// main types - number, string, array, hash, function, null, undefined
const number = 1;
const string = 'string';
const array = ['val1', 'val2'];
const hash = {prop1: 'val1'};
const fun = function() {};
const nul = null;
const und = undefined;

// Note that only null and undefined will throw an error if you try to access a non-existent property on them
number.prop;
string.prop;
array.prop;
hash.prop;
fun.prop;


// Note that typeof is broken for array and null
console.log('TYPEOF\n');
console.log(typeof number);
console.log(typeof string);
console.log(typeof array);  // returns object
console.log(typeof hash);   // returns object
console.log(typeof fun);
console.log(typeof nul);    // returns object
console.log(typeof und);

// we can replace the operator typeof with the function typeOf to fix the null and array issue
function typeOf(test) {
  let ret;
  if(Array.isArray(test)) {
    ret = 'array';
  } else if (test === null) {
    ret = 'null';
  } else {
    ret = typeof test;
  }
  return ret;
}


console.log('\nTYPEOF IMPROVED\n');
console.log(typeOf(number));
console.log(typeOf(string));
console.log(typeOf(array));
console.log(typeOf(hash));
console.log(typeOf(fun));
console.log(typeOf(nul));
console.log(typeOf(und));


console.log('\nMORE TYPES\n');
const biggy = 1000000000000000000000000000000000000n;
console.log(biggy);
