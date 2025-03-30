// truthy -> we assume that a value is true
// falsy -> we assume that a value is false


// const userEmail = "pratik.ai"

// if(userEmail){
//     console.log("Got user email");   // this will print
// }else{
//     console.log("Don't have user email");   
// }


// const userEmail = ""

// if(userEmail){
//     console.log("Got user email");
// }else{
//     console.log("Don't have user email");   // this will print
// }


// const userEmail = []

// if(userEmail){
//     console.log("Got user email");  // this will print
// }else{
//     console.log("Don't have user email");  
// }

const userEmail = " "

if(userEmail){
    console.log("Got user email");  // this will print
}else{
    console.log("Don't have user email");  
}


// Example of falsy:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Other than falsy values, all are truthy values

// Some Examples of truthy:
// "0", " ", "false", [], {}, function(){}


// How to check for empty Array
const emptyArray = []

if(emptyArray.length === 0){
    console.log("Array is empty");
}


// ++++++++++IMPORTANT+++++++++++++

// How to check for empty object

const emptyObj = {}

// console.log(Object.keys(emptyObj));   // this will return an empty array of keys because the object is empty

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??) -> it is used for code safety (only focus on "null" and "undefined")
// this is designed to handle the responses coming from database (we get two responses, sometimes it can be null or undefined)

let val1;

// val1 = 5 ?? 10
// console.log(val1);  // 5

// val1 = null ?? 10
// console.log(val1);  // 10

// val1 = undefined ?? 10
// console.log(val1);  // 10

// val1 = null ?? 10 ?? 30
// console.log(val1);  // 10  (it will print the first valid response from left side)


// Ternary operator (?:)
// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("Price is less than 80") : console.log("Price is greator than 80")

