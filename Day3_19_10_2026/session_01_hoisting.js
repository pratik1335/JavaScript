// hoisting with var

console.log(age);  // undefined
var age = 25;
console.log(age);  // 25

// Conceptually ise aise samajh sakte ho:
var age;           // declaration processed
console.log(age);  // undefined
age = 25;          // assignment
console.log(age);  // 25

////////////////////////////////////////////////////////////////////

// Hoisting with let and const

console.log(age); // ReferenceError
let age = 25;

console.log(age); // ReferenceError
const age = 25;

///////////////////////////////////////////////////////////////////

console.log(a); // undefined
console.log(b); // ReferenceError
console.log(c); // execute nahi hoga

var a = 10;
let b = 20;
const c = 30;

// Kya hua?
// 1. var a declaration hoist hoti hai aur shuru mein undefined hoti hai.
// 2. let b initialization se pehle Temporal Dead Zone (TDZ) mein hota hai. Access karne par ReferenceError aata hai.
// 3. Error aane ke baad normal execution ruk jata hai, isliye c wala console.log() execute nahi hota.