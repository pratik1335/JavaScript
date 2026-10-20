////////////////////////////////////////////////////////////////////

// Question 1 — Array methods

const numbers = [2, 5, 8, 10, 13];

const result = numbers
  .filter(n => n > 5)
  .map(n => n * 2);

console.log(result);  // [16, 20, 26]

/*
Yaad rakho:
- filter() = elements select karna.
- map() = har element ko transform karna.
*/

////////////////////////////////////////////////////////////////////

// Question 2 — Promises & async/await

async function getData() {
  return "Hello Bhai";
}

console.log(getData()); // Promise {<fulfilled>: 'Hello Bhai'}

/*
async function hamesha Promise return karta hai.
Isliye output direct "Hello Bhai" nahi hoga, 
balki ek fulfilled Promise hoga jiske andar "Hello Bhai" value hai.
*/

// Agar humein actual string chahiye, toh await use kar sakte hain:
async function main() {
  const result = await getData();
  console.log(result);
}

main(); // Hello Bhai

/*
Yaad rakho: 
async → Promise return karta hai; 
await → Promise ki fulfilled value milne ka wait karta hai.
*/

////////////////////////////////////////////////////////////////////

// Question 3 — Event Loop

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

// Output:
// A -> D -> C -> B

/*
1. JavaScript pehle normal synchronous code execute karta hai. (A -> D)
2. Promise — Microtask queue
    .then() ka callback microtask queue mein schedule hota hai. 
    Ye synchronous code complete hone ke baad execute hota hai.
3. setTimeout — Task/macrotask queue 
    Iska callback timer complete hone ke baad task queue (commonly macrotask queue bhi kehte hain) mein execute hone ke liye ready hota hai.
    Microtasks ko process karne ke baad hi next timer task execute hota hai.

Interview shortcut
1. Synchronous code
2. Promise callbacks — microtasks
3. setTimeout callbacks — tasks

Ye order is example ke liye hai; 
real code mein await, nested callbacks aur additional tasks bhi execution order ko affect kar sakte hain.
*/


////////////////////////////////////////////////////////////////////

// Question 4 — reduce() practice

const prices = [100, 200, 50, 150];

const total = prices.reduce((sum, price) => {
  return sum + price;
}, 0);

console.log(total);  // 500

/*
sum = accumulator, jo ab tak ka result store karta hai.
price = current array element.
0 = initial value, yani sum ki starting value.

reduce() array ke elements ko process karke ek final result bana sakta hai — jaise total, count ya object.
*/

////////////////////////////////////////////////////////////////////

// Question 5 — find() vs filter()

const numbers_2 = [10, 15, 20, 25, 30];

const result_2 = numbers_2.find(n => n > 20);

console.log(result_2);  // 25

/*
find() condition match karne wala pehla element return karta hai;
filter() saare matching elements ka array deta hai.

Method	     Kya return karta hai?
find()	    Pehla matching element
filter()	Saare matching elements ka array
*/

// Angular project mein example:

const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Neha" },
  { id: 3, name: "Rahul" }
];

const user = users.find(u => u.id === 2);
// { id: 2, name: "Neha" }

const matchingUsers = users.filter(u => u.id > 1);
// Neha aur Rahul ka array

/*
Ek specific user dhoondhna hai → find()
Multiple matching users chahiye → filter()
*/


////////////////////////////////////////////////////////////////////

// Question 6 — Promise error handling

Promise.reject("Something went wrong")
  .then(result => {
    console.log("Success:", result);
  })
  .catch(error => {
    console.log("Error:", error);
  });

// Output: Error: Something went wrong

/*
Step-by-step:
1. Promise.reject() Promise ko rejected state mein le jaata hai.
2. .then() ka success callback skip ho jaata hai.
3. .catch() rejection ko handle karta hai.
4. Console output:

Interview tip: .catch() Promise chain mein rejection handle karta hai. 
Agar .then() ke andar error throw ho, toh woh bhi aage ke .catch() tak pahunch sakta hai.
*/


////////////////////////////////////////////////////////////////////

// Question 7 — async/await aur error handling

async function getUser() {
  try {
    const result = await Promise.reject("User not found");
    console.log("User:", result);
  } catch (error) {
    console.log("Caught:", error);
  }
}

getUser();

// Output: Caught: User not found

/*
Step-by-step:
1. Promise.reject("User not found") ek rejected Promise banata hai.
2. await rejection ko throw kiye gaye error ki tarah treat karta hai.
3. Isliye try block mein console.log("User:", result) execute nahi hota.
4. Control catch block mein chala jaata hai.
5. Output:

Interview shortcut:
- try → code execute karne ki koshish.
- await → Promise settle hone ka wait.
- catch → rejection ya thrown error handle karna.
*/


////////////////////////////////////////////////////////////////////

// Question 8 — JavaScript Event Loop (thoda challenging)

console.log("Start");

async function test() {
  console.log("Inside");

  await Promise.resolve();

  console.log("After await");
}

test();

console.log("End");

// Output: Start -> Inside -> End -> After Await

/*
async function ka code await tak synchronously run hota hai. 
await ke baad ka code baad mein continue hota hai.

tep-by-step execution:
1. console.log("Start") synchronously execute hota hai.
2. test() call hota hai, aur function await se pehle "Inside" print karta hai.
3. await ke baad ka code microtask ke through baad mein continue hota hai.
4. test() pause hota hai, toh main synchronous code aage badhta hai aur "End" print hota hai.
5. Synchronous code complete hone ke baad microtask execute hota hai aur "After await" print hota hai.

Important: 
await poore JavaScript program ko pause nahi karta. 
Woh sirf us async function ke aage ke execution ko suspend karta hai.
*/

////////////////////////////////////////////////////////////////////

// Question 9.1: Object Destructuring

const user_2 = { name: "Rahul", age: 25 };
const { name, age } = user_2;
console.log(name);  // Rahul
console.log(age);  // 25

/*
Object destructuring mein property names match hone chahiye. 
{ name, age } object ki properties se values nikaalta hai.
*/

// Question 9.2 — Array Destructuring

const colors = ["Red", "Green", "Blue"];
const [first, second] = colors;
console.log(second);  // Green

// Shortcut: Array destructuring mein order important hai.


////////////////////////////////////////////////////////////////////

// Question 10 — Spread Operator (...)

const a = [1, 2];
const b = [...a, 3, 4];

console.log(b);  // [1, 2, 3, 4]


/*
Yaad rakho:
- ... array ke elements ko expand karta hai.
- Original array a change nahi hota.
- Angular/JavaScript mein arrays ki copy banane aur naye elements add karne mein kaafi useful hai.
*/


////////////////////////////////////////////////////////////////////

// Question 11 — Rest Parameter (...)

function sum(...numbers) {
  return numbers.length;
}

console.log(sum(10, 20, 30));  // 3

/*
...numbers saare arguments ko array mein collect karta hai:
numbers = [10, 20, 30]
Isliye numbers.length ka result 3 hai.
*/

////////////////////////////////////////////////////////////////////

// final practice task

const user_3 = {
  name: "Amit",
  age: 28
};

const updatedUser = { ...user_3, city: "Kanpur" };

function printUser({ name, age, city }) {
  console.log(`${name} is ${age} years old and lives in ${city}`);
}

printUser(updatedUser);

/*
updatedUser mein kaun-kaun si properties hongi? -> name, age, city

Console mein kya print hoga? -> Amit is 28 years old and lives in Kanpur

Is code mein spread aur destructuring kahan use hue hain? -> 
    Spread -> ...user.
    Function ke parameter mein destructuring hai: printUser({ name, age, city })
        Ye rest parameter nahi hai, kyunki yahan ... use nahi hua.
*/


////////////////////////////////////////////////////////////////////

// REST Operator Recap:

// 1. Rest with Arrays

const [x, y, ...z] = [10, 20, 30, 40, 50, 60, 70, 80]

console.log(x);  // 10
console.log(y);  // 20
console.log(z);  // [30, 40, 50, 60, 70, 80]

// Yahan ...z bachi hui values ko ek array mein collect karta hai.


// 2. Rest with Objects
const user_4 = {
    name: "Ajay",
    age: 29,
    city: "Kanpur"
}

const {username, ...otherDetails} = user_4

console.log(otherDetails); // {age: 29, city: "Kanpur"}

// Yahan ...otherDetails bachi hui properties ko ek object mein collect karta hai.


// 3. Rest with Functions

function add(...numbers) {
  console.log(numbers);
}

add(10, 20, 30); // [10, 20, 30]

// Function ke rest parameter mein arguments ek array mein collect hote hain.

const user_5 = {
  name: "Rahul",
  age: 25,
  city: "Delhi"
};

const { name_2, ...details } = user_5;

console.log(details);  // { age: 25, city: "Delhi" }

