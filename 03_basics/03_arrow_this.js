const user = {
    username : "Pratik",
    price : 999,

    welcomeMessage: function(){
        // console.log(`${username}, Welcome to website`);   // without using this keyword, it will show ReferenceError: username is not defined
        console.log(`${this.username}, Welcome to website`);
        // console.log(this);  // current context(all the current values(username, price, welcomeMessage: [Function: welcomeMessage]) of object "user")
        
    }
}

// this -> refers current context

// user.welcomeMessage()  // Pratik, Welcome to website

// user.username = "Shivam"  // context is changed  (example: what is the context of the movie)
// user.welcomeMessage()  // Shivam, Welcome to website

// user.username = "Uday"
// user.welcomeMessage()  // Uday, Welcome to website

// ++++++++IMPORTNT+++++++++++ //
// console.log(this); // {} -> empty object because there is no current context right now, because we are in node environment so empty object is the globl object


// In Browser when the engine runs, "window object" is the "global object" that is why we are able to capture all the events of the window object in the browser

// While in Node/Dino engine, "empty object" is the global object



// function chai(){
//     let username = "Pratik"
//     console.log(this);  // we will see lot of properties in the console
//     console.log(this.username);  // undefined
// }

// chai();
    
// const chai = function(){
//     let username = "Pratik"
//     console.log(this);  // we will see lot of properties in the console
//     console.log(this.username);  // undefined
// }

// chai()



// ++++++++++++++++Arrow function++++++++++++++++

// const chai = () => {
//     let username = "Pratik"
//     console.log(this.username); // undefined
//     console.log(this);  // {}
// }

// chai()


// Basic Arrow function  (Explicit return -> need to use return keyword)

// const addTwo = (num1, num2) => {
    // return num1 + num2
// }
// console.log(addTwo(10,20))  // 30


// Implicit return  -> no need to use return keyword

// const addTwo = (num1, num2) =>  num1 + num2  OR the below one.

// const addTwo = (num1, num2) =>  (num1 + num2)  // used too much in react 
// console.log(addTwo(10,20))  // 30

// NOTE : {} -> we have to use return keyword in arrow function
// NOTE : () -> no need to use return keyword in arrow function


// () is used if we want to return an object or used in array, loops as well

// const username = () => {username: "Pratik"}  // object
// console.log(username())  // undefined, because return keyword is not there in case of {}

const username = () => ({username: "Pratik"})
console.log(username())  // { username: 'Pratik' }  // because we use () as object has {}


// const myArray = [2, 4, 5, 7, 8]

// myArray.forEach(() => ({}))
// myArray.forEach(() => {})
