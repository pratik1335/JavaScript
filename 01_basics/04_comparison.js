// Normal Comparisons
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// Problem arises when we compare different datatypes
// So in production, we avoid these kind of comparisons becuae these create confusions
// clean code is the priority

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true

// The reason is that an equality check == and comparisons > <= >= work differently.
// Comparisons convert null to a number, treating it as 0.
// Thats why (3) null >= 0 is true and (1) null > 0 is false

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false


// Strict check (===) , check the datatype as well
console.log("2" == 2); // true
console.log("2" === 2); // false





