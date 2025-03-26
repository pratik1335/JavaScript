const score = 400
console.log(score); // 400
console.log(typeof score);

const balance = new Number(200)
console.log(balance); // [Number: 200]

const balanceString = balance.toString()

console.log(balanceString); // 200  // Returns a string representation of an object.
console.log(typeof balanceString); // string

// As the balance is converted to a string, we can use all the string properties on it.

console.log(balanceString.length); // 3

console.log(balance.toFixed(2)); // 200.00

// const otherName = 23.8966
// console.log(otherName.toPrecision(3))  // 23.9  // Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

// const otherName = 123.8966
// console.log(otherName.toPrecision(3))  // 124

// const otherName = 1123.8966
// console.log(otherName.toPrecision(3))  // 1.12e+3

const otherName = 1123.8966
console.log(otherName.toPrecision(4))  // 1124

const hundreds = 10000000
console.log(hundreds.toLocaleString()); // 10,000,000 (US standard)
console.log(hundreds.toLocaleString('en-IN')); // 1,00,00,000 (Indian standard)

const maxValue = Number.MAX_VALUE
console.log(maxValue); // 1.7976931348623157e+308

const minValue = Number.MIN_VALUE
console.log(minValue); // 5e-324

// console.log(5 ** 2); // 25

console.log("");

console.log("///////////////////////////////////////////////////////////////////////////////////");

console.log("");

// +++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++

// Math is a library which comes with JS by-default

console.log(Math); // Object [Math] {} , run it on browser

console.log(Math.PI); // 3.141592653589793

console.log(Math.abs(-200)); // 200
console.log(Math.abs(200)); // 200

console.log(Math.round(4.3)); // 4
console.log(Math.round(4.7)); // 5
console.log(Math.round(4.5)); // 5

// We can control if we want upper value or lower value
console.log(Math.ceil(4.6)); // 5 (Ceiling means Top so it will choose the upper value) // Returns the smallest integer greater than or equal to its numeric argument
console.log(Math.ceil(4.2)); // 5

console.log(Math.floor(4.2)); // 4 (Floor means Bottom so it will choose the lower value) // Returns the greatest integer less than or equal to its numeric argument
console.log(Math.floor(4.5)); // 4

console.log(Math.sqrt(729)); // 27

// Min & Max Values
console.log(Math.min(20, 45, 23, 10, 5)); // 5
console.log(Math.max(20, 45, 23, 10, 5)); // 45

// Math is mostly used for random()
console.log(Math.random()); // Returns a pseudorandom number between 0 and 1

console.log(Math.random() * 10); 
// But if we use above then there is a possibilty of occurance of 0
// so we add 1 after it to avoid 0 value

console.log(Math.random() * 10 + 1);  // this guarentees that minimum value will be 1 and not 0.

console.log((Math.random() * 10) + 1); // avoiding BODMAS rule

// we also use floor() in random() sometimes for getting integer values, because it floor() will round of to the lowest value
console.log(Math.floor(Math.random() * 10) + 1);  // with this, we will get values between 1 to 10


// Formula needs to be remembered
const min = 10
const max = 20

// 1 is added to avoid 0, in case min == max.
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // we will get value between 10(min) to 20(max)


















