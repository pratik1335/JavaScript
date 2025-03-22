"use strict"  // treat all JS code as newer version

// alert(3 + 3)  // ReferenceError: alert is not defined, we are using nodejs, not browser

// code readability should be high
console.log(3 
    + 
    3)   // don't do like this

// ECMA standards (tc39.es) & MDN docs(Mozilla Docs)


let name = "Pratik"
let age = 29
let isLoggedIn = false

/*
// DataTypes

1. Primitive
 a. number => upto 2^53
 b. bigInt 
 c. string => ""
 d. boolean => true/false
 e. null => standalone value (null means empty)
 f. undefined => value is not defined
 g. symbol => uniqueness (used in react and figma scripts)

2. Non-Primitive
 objects

*/

console.log(typeof undefined);  // undefined

// Interview question
console.log(typeof null) // object

