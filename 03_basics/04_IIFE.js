// Immediately Invoked Function Expressions (IIFE)

// USE CASES
// 1. To Avoid the pollution(variables and all which we don't want in our function) from Global scope
// 2. We want a function to be Immediately Invoked

// function chai(){
//     console.log("DB CONNECTED");
// }
// chai()

// IIFE

// Named IIFE
(function chai(){
    console.log("DB CONNECTED");
})();

// IIFE Syntax
// ()();

// NOTE: Make sure to add ; at the end of IIFE otherwise we will get error
// Because once IIFE is invoked, it doesn't know where to stop the context, so we need ; to stop its execution


// Un-named IIFE
// We can also write IIFE using arrow function
( () => {
    console.log("DB CONNECTED TWO");
} )();

// We can also pass parameters in an IIFE
( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
} )("Pratik");

// chai("Pratik")