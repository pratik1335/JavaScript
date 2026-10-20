// Part 1: Normal function vs Arrow function

function add(a, b) {
  return a + b;
}

const result = add(10, 20);
console.log(result); // 30


// const add_arrow = (a, b) => {
//  return a + b
// };
const add_arrow = (a, b) => a + b;
console.log(add_arrow(10,20));  // 30
console.log(add_arrow());  // NaN


///////////////////////////////////////////////////////////////

// Part 2: Callback function kya hota hai?

console.log("\n");

function greet(name, callback){
    console.log("Hello", name);
    callback();
}

function sayBye(){
    console.log("Good bye!!");   
}

greet("Pratik", sayBye);  // Function pass kiya

// Output: 
// Hello Pratik
// Good bye!!

console.log("\n");

function greet_2(name, callback){
    console.log("Hello", name);
    callback;
}

function sayBye_2(){
    console.log("Good bye!!");   
}

greet_2("Pratik", sayBye_2()); // Function ko turant execute kar diya

// Output: 
// Good bye!!
// Hello Pratik


//////////////////////////////////////////////////////////////////////

// Part 3: Higher-order function

console.log("\n");

function calculate(a, b, operation){
    return operation(a,b);
}

function add(a,b){
    console.log(a+b);
}

function multiply(a,b){
    console.log(a * b);
}

calculate(10, 20, add);
calculate(10, 20, multiply);

/*
1. calculate ek higher-order function hai.
2. add aur multiply functions hain jinhe hum argument ke roop mein pass kar rahe hain.
3. operation callback ko refer karta hai.
4. Ek hi calculate() function se addition aur multiplication dono karwa sakte hain.
*/

// Real-world JavaScript mein bhi ye pattern milta hai:
// map() ek higher order function hai, kyunki hum isko callback function 
// (i.e. maybe an arrow-function) dete hain

////////////////////////////////////////////////////////////////////////

// Ab callback aur higher-order function ka difference

const numbers = [1, 2, 3];

const result_2 = numbers.map(n => n * 2);

// Higher-order function: map() — kyunki ye ek function ko argument mein leta hai.
// Callback function: n => n * 2 — kyunki ise map() ko pass kiya gaya hai aur map() ise call karta hai.


///////////////////////////////////////////////////////////////////////////////

// Next practice: khud callback likho

function calculate(a, b, callback){
    return callback(a,b);
}

const addition = calculate(10, 20, (x,y) =>  x + y);  // 30
const subtraction = calculate(20, 10, (x,y) => x - y); // 10
const multiplication = calculate(10, 20, (x,y) => x * y); // 200

console.log("\n");

console.log(addition);
console.log(subtraction);
console.log(multiplication);


//////////////////////////////////////////////////////////////////////////

// 3. Next challenge: function pass karna vs function call karna

function sayHello() {
  console.log("Hello!");
}

function execute(callback) {
  callback();
}

execute(sayHello);

/*
Yahan dhyan do: hum sayHello likh rahe hain, sayHello() nahi.
- sayHello → function ko pass karna.
- sayHello() → function ko turant execute karna.
execute() ke andar callback parameter ko sayHello function mil jata hai.

Yaad rakhne ka shortcut:
- sayHello = function pass karna.
- sayHello() = function call karna.
- callback() = passed function ko call karna.
*/

