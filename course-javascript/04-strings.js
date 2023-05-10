/* looping
*/

const string0 = 'i am a string0';
for(let i = 0; i < string0.length; i++) {
}

/* string literals
*/

const string1 = 'single quote';
const string2 = "double quote"; // not allowed by google style guide
const string3 = `back tick ${ string1 }`;

/* concatenation
*/

const string4 = string1 + string2;

/* slicing - original string has not changed
*/
const first = string1.slice(0, 1);
const last = string1.slice((string1.length - 1));

/* splicing
*/

// no splicing like an array as strings are immutable

/* type conversion
*/
const number = parseInt('99');
// console.log(typeof +'99')

/* ascii values
*/
const ascii = 'z'.charCodeAt(0); // a is 97, z is 122, for 26 letters
console.log(ascii);