// Singleton 
// Object.create


// Object Literals

// key-value pair, 
// by-default JS considers keys as String

// Object Declaration
const jsUser = {
    name : "Pratik",
    "full name" : "Pratik Gupta",
    age : 29,
    city : "Pune",
    isLoggedIn : false,
    email : "pratik@reddit.com",
    lastLoginDays : ["Monday", "Friday"]
}

// Access Object

// first way -> using dot operator (not a good way because key can be of more than one word)
console.log(jsUser.email);

// second way ->using square notation i.e. ["key"] (preferable way)
console.log(jsUser["email"]);

// Cases where we can't use the dot operator method to access object elements
// console.log(jsUser.full name);  // SyntaxError: missing ) after argument list

// we have to use the second way in such cases
console.log(jsUser["full name"]);  // Pratik Gupta



// Interview Question  (How to use a Symbol as a key in an object)

const mySymbol = Symbol("key1")

// const myUser = {
//     name : "Shivam",
//     mySymbol : "mykey1"
// }

// console.log(myUser);  // { name: 'Shivam', mySymbol: 'mykey1' }  // here "mySymbol" is used as a "string"

const myUser = {
    name : "Shivam",
    [mySymbol] : "mykey1"
}

console.log(myUser);  // { name: 'Shivam', [Symbol(key1)]: 'mykey1' }  // // here "mySymbol" is used as a "Symbol"

// Not a valid way
// console.log(myUser.mySymbol);  // mykey1
// console.log(typeof myUser.mySymbol);  // string

// Valid way
// In case of using a Symbol as a key in an object, we need to use the symbol in [] in the object -> [mySymbol]
// and we can use it with square notation only, not with the dot notation

// NOTE : BUT!!!!! Most of the times, we will use "dot notation" to access object's values
// And in some special cases where we can't use dot notation, there we will use square notation


console.log(myUser[mySymbol]);  // mykey1
console.log(typeof myUser[mySymbol]);  // string


// Modify Object values

jsUser.email = "shivam@yahoo.com"

console.log(jsUser["email"]);

// If we don't want to change any value of an object then we can lock that as well using freeze(object) method
// Object.freeze(jsUser)   // use it carefully
// jsUser.email = "shivam@google.com"
// console.log(jsUser["email"]);  // shivam@yahoo.com


// Using functions as key in an object

jsUser.greeting = function(){
    console.log("Hello JS user")
}

console.log(jsUser.greeting); // [Function (anonymous)] -> reference of function

console.log(jsUser.greeting()); 
// Got the TypeError: jsUser.greeting is not a function, because we have used the freeze() method above
// due to that, object jsUser values can't be modified, so make sure to comment the freeze() method

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);   // whenever we want to refer the same object, we can use "this" keyword because there can be multiple objects in a program.
}

console.log(jsUser.greetingTwo());  // Hello JS user, Pratik


