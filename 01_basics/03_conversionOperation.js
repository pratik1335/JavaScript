// let score = 33
// console.log(typeof score);  // number


// let score = "33"
// console.log(typeof score); // string


// let score = "33abc"
// let valueInNumber = Number(score)
// console.log(typeof (valueInNumber)); // number
// console.log(valueInNumber);  // NaN


// Interview question
// console.log(typeof NaN); // number


// let score = null
// let valueInNumber = Number(score)
// console.log(typeof (valueInNumber)); // number
// console.log(valueInNumber);  // 0


// let score = undefined
// let valueInNumber = Number(score)
// console.log(typeof (valueInNumber)); // number
// console.log(valueInNumber);  // NaN


// let score = true
// let valueInNumber = Number(score)
// console.log(typeof (valueInNumber)); // number
// console.log(valueInNumber);  // 1


// let score = ""
// let valueInNumber = Number(score)
// console.log(typeof (valueInNumber)); // number
// console.log(valueInNumber);  // 0


// let score = "pratik"
// let valueInNumber = Number(score)
// console.log(typeof (valueInNumber)); // number
// console.log(valueInNumber);  // NaN


/*
// Convert in Numbers

1. "33" => 33
2. "33abc" => NaN
3. true/false => 1/0
4. undefined => NaN
5. null => 0
6. "pratik" => NaN
7. "" => 0

*/


// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // true


// let isLoggedIn = ""
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // false


// let isLoggedIn = "pratik"
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // true


// let isLoggedIn = undefined
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // false


// let isLoggedIn = null
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // false

/*
// Convert in Boolean

1. 1 => true, 0 => false
2. "" => false
3. "pratik" => true
4. undefined => false
5. null => false

*/

let someNumber = 23
let stringSomeNumber = String(someNumber)
console.log(stringSomeNumber);
console.log(typeof stringSomeNumber); // string


