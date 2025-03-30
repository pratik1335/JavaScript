// let a = 10
// const b = 20
// var c = 30

// scope {}
// when {} comes with if/else and functions then it is called scope

// block scope
// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }

// console.log(a);  // ReferenceError: a is not defined
// console.log(b);  // ReferenceError: a is not defined
// console.log(c);  // 30

// From above example, a and b works correctly by showing error 
// because there scope is only inside the if block, so if we try to 
// access them outside theiw scope then we will get error

// But this is not happening in case of var, it should also through an error
// but it is not doing that which is a problem 
// that is why let and const are used instead of var




// Another example

// global scope
var c = 300
let a = 100
let d = 500

// block scope
if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);  // 10   due to local scope
    // console.log("INNER : ", d);  // 500 due to global scope
    
}

// console.log(a);  // 100   due to global scope

// console.log(c);  // 30
// It should show 300 because c has a value as 300 in global scope but as it of type var
// it doesn't follow the block scope rules.

// console.log("OUTER : ", d);  // 500 due to global scope


// NOTE : The global scope in browser is different than the global scope in the node environment.



// Nested functions scope

function one(){
    const username = "pratik"

    function two(){
        const website = "youtube"
        // console.log("Username : ", username);
    }

    // console.log(website);  // ReferenceError: website is not defined
    
    two()
}

one()

// (Remember)Icecream example (Children can ask for icecream from Elders but Elders should not ask from children)
// In above example, one() is the elder one, and two() is the younger one.


// if/else scope

if(true){
    const username = "pratik"
    if(username === "pratik"){
        const website = " youtube"
        // console.log(username + website);  // pratik youtube
    }

    // console.log(website);  // ReferenceError: website is not defined (not is scope)
    
}

// console.log(username);  // ReferenceError: username is not defined (not is scope)



// ++++++++++++++++++ IMPORTANT ++++++++++++++++++++++++++++

// Two techniques of creating functions 

// Normal function
// function addOne(num){
//     return num + 1;
// }

// addOne(10)

// // Function Expression
// const addTwo = function(num){
//     return num + 2;
// }

// addTwo(20)



//Hoisting

console.log(addOne(10))  // 11  // no error

// function declaration only
function addOne(num){
    return num + 1;
}


addTwo(20)   // ReferenceError: Cannot access 'addTwo' before initialization

// function declaration and storing in a variable
const addTwo = function(num){
    return num + 2;
}
