// Functions

//  function definition
function anyName(){
    console.log("Hello Random User");
}

// function execution
// console.log(anyName)  // [Function: anyName] it is function's reference
// anyName()  // execution of function
// anyName()


// function sumTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// sumTwoNumbers()  // NaN

// sumTwoNumbers(10, 20)  // 30

// sumTwoNumbers("10", 20)  // 1020 (due to internal type conversion in JS)


// In JS, we can store the function in a variable as well but only when the function returns something
// const result = sumTwoNumbers(10, 20)
// console.log(result);  // undefined, because this function hasn't return anything, it just print on console


function sumTwoNumbers(number1, number2){
    return number1 + number2;
}

const result = sumTwoNumbers(10, 20)
console.log(result); // 30



// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// loginUserMessage("Pratik")   // it will not print anything until we do console log on it or we store it any varaiable
// console.log(loginUserMessage("Pratik"))  // Pratik just logged in
// const user = loginUserMessage("Pratik")
// console.log(user); // Pratik just logged in


// Interview Question
// What happen if we donn't pass any value
// console.log(loginUserMessage())  // undefined just logged in

// what if we pass empty string
// console.log(loginUserMessage(""));  //  just logged in


// For covering corner cases like above, we use if-else

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return 
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage());  // Please enter a username


// Prodution code
// function loginUserMessage(username){
//     if(!username){   // undefined and empty strings are considered as "false" values in JS
//         console.log("Please enter a username");
//         return 
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage());  // Please enter a username
// console.log(loginUserMessage(""));  // Please enter a username


// In order to avoid the undefined case, we can use the default values/parameters
function loginUserMessage(username = "James"){
    if(!username){   
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());   // James just logged in
console.log(loginUserMessage(""));  // Please enter a username

// if we pass any value in the function then the default value will be overwritten by the passing value. it could be empty string as well.
console.log(loginUserMessage("Pratik"));  // Pratik just logged in