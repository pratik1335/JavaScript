// Scope

function test() {
  var a = 10;
  let b = 20;

  if (true) {
    var c = 30;
    let d = 40;
  }

  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
//   console.log(d); // ReferenceError
}

test();

// c accessible hai kyunki var block-scoped nahi, function-scoped hai. 
// d sirf if block ke andar accessible hai.


///////////////////////////////////////////////////////////////////////////////////////////////////////////

if (true) {
  var x = 10;
  let y = 20;
}

console.log(x);  // 10
// console.log(y);  // ReferenceError: y is not defined

// Kyun?
// - var x = 10 — var block-scoped nahi hai, isliye if block ke bahar bhi accessible hai.
// - let y = 20 — let block-scoped hai, isliye if block ke bahar access nahi kar sakte.


//////////////////////////////////////////////////////////////////////////////////////////

for (var i = 0; i < 3; i++) {
  // loop
}

console.log(i);  // 3

// Loop khatam hone ke baad i ki value 3 hai. 
// Aur kyunki var block-scoped nahi hota, 
// hum loop ke bahar bhi i access kar sakte hain.

////////////////////////////////////////////////////////////////////////////////////////////////

console.log("\n");

for (let j = 0; j < 3; j++) {
  // loop
}

// console.log(j); // ReferenceError: j is not defined

// Yahan j sirf for loop ke scope mein available hai.


////////////////////////////////////////////////////////////////////////////

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

// Output : 3 3 3

/*
Step 1: Loop execute hota hai
Loop ke andar setTimeout() teen baar call hota hai. 
Har baar woh console.log(i) ko 100 milliseconds baad execute karne ke liye schedule karta hai.

Step 2: Loop complete ho jata hai
Jab loop finish hota hai, tab i ki value 3 ho chuki hoti hai.

Step 3: Callbacks execute hote hain
100 milliseconds baad teeno callbacks i ki value read karte hain. 
Kyunki var ek hi shared variable use karta hai, teeno ko value 3 milti hai.

Important: 
setTimeout() ke andar callback baad mein execute hota hai. 
Woh loop ke har iteration ki value automatically save nahi karta.
*/


///////////////////////////////////////////////////////////////////////////////

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

// Output: 0 1 2

/*
Kyun? 
let loop ke har iteration ke liye alag binding provide karta hai.
Isliye har callback apni iteration ki value access karta hai.

JavaScript let ke saath loop ki har iteration ke liye i ki alag binding banata hai.
- Pehli iteration ka callback apni value 0 access karta hai.
- Doosri iteration ka callback apni value 1 access karta hai.
- Teesri iteration ka callback apni value 2 access karta hai.
*/


///////////////////////////////////////////////////////////////////////////

for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);

// Output: 0 1 2 ReferenceError: i is not defined