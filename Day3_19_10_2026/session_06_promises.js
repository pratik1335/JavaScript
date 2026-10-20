// Promises

// Synchronous-Asynchronous
console.log("1. Start");

setTimeout(() => {
  console.log("2. Data received");
}, 2000);

console.log("3. End");

// Output:
// 1. Start
// 3. End
// 2. Data received

///////////////////////////////////////////////////////////////////

// Example of Promise

const promise = new Promise((resolve, reject) => {
  resolve("Data received!");
});

promise.then((result) => {
  console.log(result);
});

/*
Yahan:
- resolve() ka matlab operation successful hua.
- reject() ka matlab operation fail hua.
- .then() successful result ko handle karta hai.
Abhi ke liye bas itna yaad rakh: Promise = future mein milne wale result ka representation.
*/

/////////////////////////////////////////////////////////////////

console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

console.log("C");

console.log("\n");

// Output:
// A -> C -> B

/*
Step-by-step execution
1. console.log("A") turant execute hota hai → A print.
2. .then() ka callback microtask queue mein schedule hota hai. Woh abhi execute nahi hota.
3. JavaScript agli line execute karti hai → C print.
4. Synchronous code finish hone ke baad Promise ka callback execute hota hai → B print.
*/

/////////////////////////////////////////////////////////////////////////

// Next concept: .then() aur .catch()

Promise.reject("Something went wrong")
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Failed:", error);
  });

// Output:
// Failed: Something went wrong

/*
Step-by-step
1. Promise.reject("Something went wrong") Promise ko rejected state mein set karta hai.
2. .then() ka success callback skip ho jaata hai, kyunki Promise successful nahi hua.
3. .catch() rejection ko handle karta hai aur error message print karta hai.
*/

//////////////////////////////////////////////////////////////////////

// Ab Promises ka ek practical example

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => {
    console.log(user.name);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

/*
Is code mein:
- fetch() server se request karta hai aur Promise return karta hai.
- response.json() response body ko JavaScript data mein convert karta hai; 
  ye bhi Promise return karta hai.
- Agla .then() user ka naam print karta hai.
- .catch() network jaise errors ko handle karta hai.

Interview tip:
fetch() aam taur par HTTP 404 ya 500 status par automatically reject nahi hota.
HTTP status check karne ke liye response.ok bhi check karna chahiye.
*/


//////////////////////////////////////////////////////////////////////////

// Async/await in JS

// 1. Pehle .then() wala code yaad kar
/*
function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(user => {
      console.log(user.name);
    });
}

getUser();

Ye code sahi hai, lekin multiple .then() hone par kabhi-kabhi padhna mushkil ho sakta hai.
*/

// 2. Wahi code async/await ke saath

async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await response.json();

  console.log(user.name);
  

}

getUser();


/////////////////////////////////////////////////////////////////////

// async function ko asynchronous function banata hai, 
// jo hamesha Promise return karta hai.

async function greet() {
  return "Hello Bhai";
}

console.log(greet()); // Promise { 'Hello Bhai' }

greet().then(message => console.log(message));
// Hello Bhai
// String return hui, lekin caller ko Promise mila jo "Hello Bhai" se fulfill hua.


//////////////////////////////////////////////////////////////////////////

// await kisi Promise ke settle hone ka wait karta hai 
// aur fulfillment par uski value deta hai.

// const response = await fetch(url);

/*
Yahan function ka execution us point par pause hota hai jab tak Promise settle na ho. 
Poora JavaScript program block nahi hota—doosra available code chal sakta hai.

Ek important rule: 
await ko aam taur par async function ke andar use karte hain. 
JavaScript modules mein top-level await bhi allowed hai.
*/

///////////////////////////////////////////////////////////////////////////

// 3. Errors handle kaise karein?
// Promises mein .catch() use kiya tha. 
// async/await mein hum try/catch use kar sakte hain.

async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }

    const user = await response.json();

    console.log(user.name);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getUser();

/*
- try — normal operation.
- throw new Error() — apni error generate karna.
- catch — error handle karna.

Humne response.ok check kiya hai, 
kyunki fetch() HTTP 404 ya 500 par automatically reject nahi hota.
*/


//////////////////////////////////////////////////////////////////////

async function test() {
  return 10;
}

const value = await test();
console.log(value);  // 10

// Or we can also use then here
test().then(value => console.log(value));  // 10

/*
Step-by-step
1. Humne function ko async banaya
2. async function hamesha Promise return karta hai. 
Isliye return 10 ka result ek fulfilled Promise hota hai, jiski value 10 hai.
3. .then() us Promise ki resolved value receive karta hai

Ek important rule yaad rakh
| Code	                    |     Meaning                        |
| return 10 inside async    |	Promise fulfilled with 10        |
| await test()              |	Promise ki value 10 milegi       |
| test().then(value => ...)	|   Callback ko 10 milega            |
*/


//////////////////////////////////////////////////////////////////////

async function getNumber() {
  return 5;
}

async function main() {
  const result = await getNumber();
  console.log(result + 2);  // 7
}

main();

/*
Step-by-step:
1. getNumber() ek Promise return karta hai jo 5 se fulfill hota hai.
2. await getNumber() us Promise ki fulfilled value 5 deta hai.
3. result = 5 ho jata hai.
4. result + 2 ka result 7 hai.
*/