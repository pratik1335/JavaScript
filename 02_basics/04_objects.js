// Singleton (Create objects using constructor)

// const user = new Object()   // Singleton Object
// console.log(user); // {}

const user = {}  // Non Singleton Object or Object Literal
// console.log(user); // {}

user.email = "pratik@microsoft.com"
user.age = 19
user.name = "pratik"
user.isLoggedIn = false

// console.log(user);

// Nested Objects

const regularUser = {
    email : "pratikgupta@google.com",
    fullname: {
        userfullname : {
            firstname : "Pratik",
            lastname : "gupta"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.lastname);

// Optional Chaining -> will discuss in later sections
console.log(regularUser.fullname?.userfullname.firstname);


// How to merge two or more objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } // this is not what we expected


// using assign()  -> very less used

// const obj3 = Object.assign({}, obj1, obj2)   // {} -> target object
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }  // this is what we expected

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4)  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


// using spread (...) -> mostly used
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4)  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }



// Array of Objects (Data coming from APIs in the form of array of objects)

const users = [
    {
        id: 1,
        emil: "pg@gmail.com"
    },
    {
        id: 1,
        emil: "pg@gmail.com"
    },
    {
        id: 1,
        emil: "pg@gmail.com"
    }
]

console.log(users[1].emil)

console.log(user);

console.log(Object.keys(user)); // [ 'email', 'age', 'name' ] (Array of Keys)
console.log(typeof Object.keys(user)); // object

console.log(Object.values(user)); // [ 'pratik@microsoft.com', 19, 'pratik' ] (Array of values)

console.log(Object.entries(user)); // less used

// Output
// [
//     [ 'email', 'pratik@microsoft.com' ],
//     [ 'age', 19 ],
//     [ 'name', 'pratik' ]
// ]


console.log(user.hasOwnProperty("isLoggedIn"));  // true
console.log(user.hasOwnProperty("isLogged"));  // false
