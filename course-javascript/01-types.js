// JavaScript has 7 primitive types
// https://developer.mozilla.org/en-US/docs/Glossary/Primitive
const number = 1;
const string = 'string';
// boolean
// symbol
// bigint
const und = undefined;
const nul = null;

//
const array = ['val1', 'val2'];
const hash = {prop1: 'val1'};
const fun = function() {};


// Note that only null and undefined will throw an error if you try to access a non-existent property on them
number.prop;
string.prop;
array.prop;
hash.prop;
fun.prop;


// Note that typeof is broken for null
console.log('TYPEOF\n');
console.log(typeof number);
console.log(typeof string);
console.log(typeof array);  // returns object
console.log(typeof hash);   // returns object
console.log(typeof fun);
console.log(typeof nul);    // returns object
console.log(typeof und);

// we can replace the operator typeof with the function typeOf to fix the null issue
// furthermore, it can now differentiate between an object literal and and array literal
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
