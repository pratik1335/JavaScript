const numbers = [10, 20, 30]

const result = numbers.filter(number => number > 10)
.map(number => number * 2)
.reduce((sum, value) => sum + value, 0);

console.log(result);  // 100

////////////////////////////////////////////////////////////////////

// important interview questions

// 1.
const values = [1, 2, 3];

const answer = values.map(n => {
  n * 2;
});

console.log(answer);  // [ undefined, undefined, undefined ]

// Jab arrow function mein {} curly braces use karte hain, 
// toh return explicitly likhna padta hai. 
// return nahi hai, toh function undefined return karta hai.

// 1. Implicit return — bina {} ke
// const result = numbers.map(n => n * 2);
// [2, 4, 6]

// 2. Explicit return — {} ke saath
// const result = numbers.map(n => {
//   return n * 2;
// });
// [2, 4, 6]

// Interview shortcut:
// - () ya single expression → implicit return possible.
// - {} → explicit return chahiye, agar value return karni hai.

//////////////////////////////////////////////////////////////////////////////

// 2.
const numbers_2 = [1, 2, 3];

const result_2 = numbers_2.filter(n => {
  n > 1;
});

console.log(result);  // []

// Curly braces {} ke andar return nahi likha, 
// isliye callback har element ke liye undefined return karta hai.

// filter() sirf un elements ko rakhta hai jinke liye callback "truthy" value return kare. 
// undefined falsy hai, isliye koi bhi element select nahi hota.

// Yaad rakho:
// - map() mein callback undefined return kare → output array mein undefined aa sakta hai.
// - filter() mein callback undefined return kare → element reject ho jata hai.

//////////////////////////////////////////////////////////////////////////////

// 3.
const numbers_3 = [1, 2, 3];

const result_3 = numbers_3.filter(n => {
  return n > 1;
});

console.log(result_3);  // [2, 3]

/*
Dry run:
n	n > 1	Result
1	false	Reject
2	true	Keep
3	true	Keep
*/