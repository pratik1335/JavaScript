// if
const isLoggedIn = true

if(isLoggedIn){
    // console.log("executed");
}

// <, >, <=, >=, ==, !=, ===, !==

if(2 != 3){
    console.log("executed");
}

// === -> type check as well

if (2 == "2"){
    console.log("yes!!");
}

if (2 === "2"){
    console.log("yes!!");
}else{
    console.log("no!!");
}

const score = 200

if(score > 100){
    // var power = "fly"   (better to not use it as it has a global scope)
    const power = "fly"
    console.log(`User power : ${power}`);
}

// console.log(`User power : ${power}`); // ReferenceError: power is not defined (in case of var, it will not give any error)


const balance = 1000

// implicit scope
// if(balance > 500) console.log("test");

// if(balance > 500) console.log("test"), console.log("test 2"); // not a readable code so never use this

// if (balance < 500){
//     console.log("less tahn 500");
// } else if(balance < 800){
//     console.log("less than 800");
// } else if(balance < 950){
//     console.log("less than 950");
// } else{
//     console.log("less than 1200");
// }


// Real world use case

const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = true
const loggedInFromGoogle = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}
