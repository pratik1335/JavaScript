// Primitive (Copy) (Ex : Call by Value)

//  7 types : Number, String, Boolean, Undefined, Symbol, Null, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  // false


const bigNumber = 236744623432527547265n
console.log(typeof bigNumber); // bigint



// Non-Primitive (Reference) (Ex: Call by reference)  
// Return type of Non-Primitve : function

// Objects, Arrays, Functions

const heroes = ["Batman", "Flash", "Superman"]

let myObj = {
    name: "Pratik",
    age: 18,

}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);  // function 
console.log(typeof myObj);  // object
console.log(typeof heroes);  // object


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitve), Heap (Non-Primitve)

let myYoutubeName = "pratikguptadotcom"

let anotherName = myYoutubeName  //  (anotherName gets a copy of myYoutubeName)

anotherName = "shivamgupta"

console.log(myYoutubeName)
console.log(anotherName)


// Objects


let userOne = {
    email: "pratikgupta@google.com",
    upi: "user@ybl"
}

// the variable "userOne" will be declared in the stack only
//  but its values(email, upi) will be stored in Heap memory (Reference)

console.log(userOne.email)

// now userTwo will also pointing to the values of userOne (reference only, no copy)
let userTwo = userOne

userTwo.email = "guptapratik@yahoo.com"

console.log(userOne.email)
console.log(userTwo.email)



