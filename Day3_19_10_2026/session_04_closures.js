// Closure

// important concept: Functions se function return karna

function outer() {
  function inner() {
    console.log("Hello from inner!");
  }

  return inner;
}

const myFunction = outer();  // inner

myFunction();  // Hello from inner!

/*
Step-by-step:
1. outer() call hua.
2. outer() ne inner function return kiya.
3. Returned function myFunction mein store hua.
4. myFunction() call karne par inner() execute hua.

return inner;   // Function return karo
return inner(); // Function abhi execute karo aur uska result return karo
*/

/////////////////////////////////////////////////////////////////////////////

// 3. Practice: Function return karna

function outer() {
  return function() {
    return 10;
  };
}

const result = outer();  // outer() ek doosra, anonymous function return karta hai. Woh function result variable mein store ho jata hai.

console.log(result());  // 10

/*
Yaad rakho:
- outer() → inner function return karta hai.
- result → returned function ko hold karta hai.
- result() → returned function execute karta hai.
*/

//////////////////////////////////////////////////////////////////////////////

// Ab isi concept se closure samjho

function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter();  // 1
counter();  // 2
counter();  // 3

/*
Ab sawal hai: outer() toh execute hokar khatam ho gaya. Phir inner() ko count kaise mil raha hai?
Yahi closure ka main concept hai!

Step-by-step samjho:

Step 1: outer() chalta hai
count = 0 banta hai aur inner function return hota hai.

Step 2: counter function ko store karta hai
inner apne outer lexical scope ke count variable ko access kar sakta hai. 
Closure isi relationship ko maintain karta hai.

Step 3: counter() baar-baar call hota hai
Har call mein wahi preserved count increment hota hai: 1, phir 2, phir 3.
*/

///////////////////////////////////////////////////////////////////////////////

// More Questions

function outer() {
  let message = "Hello";

  return function() {
    console.log(message);
  };
}

const greet = outer();  
// Ab greet ek function hai, outer() ka execution complete ho gaya, 
// lekin returned function abhi bhi apne surrounding/lexical scope ke message ko access kar sakta hai.

greet();  

// Output: Hello


////////////////////////////////////////////////////////////////////////////////

function outer() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const counter1 = outer();

counter1();
counter1();

const counter2 = outer();

counter2();

// Ye closure ka bahut important concept hai: 
// har baar outer() call karne par naya count variable banta hai.

/*
Ek line mein yaad rakho:
- counter1 ki calls ek hi count ko share karti hain.
- counter2 ke paas alag count hota hai.
- Har outer() call ek naya closure environment bana sakta hai.
Yehi wajah hai ki closures counters, private state aur function factories mein useful hote hain.
*/


/////////////////////////////////////////////////////////////////////////////

// Next challenge: Closure ko khud predict karo

function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// Hint: double aur triple alag-alag values of multiplier ko remember karte hain.

/*
Step 1: double function banta hai
Yahan multiplier = 2 hai.
createMultiplier() ek inner function return karta hai jo multiplier ko access kar sakta hai.

Isliye double effectively ye kaam karta hai:

const double = function(number) {
  return number * 2;
};

Step 2: triple function banta hai
Is baar multiplier = 3 hai.

Isliye triple effectively ye kaam karta hai:

const triple = function(number) {
  return number * 3;
};
*/


//////////////////////////////////////////////////////////////////////////////

// 2. Real project mein iska use kahan hota hai?

// Closures ki help se hum reusable functions bana sakte hain.
// For example, discount calculator:

function createDiscount(discountPercent){
    return function(price){
        return price - (price * discountPercent / 100)
    }
}

const tenPercentOff = createDiscount(10)
const twentyPercentOff = createDiscount(20)

console.log(tenPercentOff(1000));
console.log(twentyPercentOff(2000));

// Ek hi function se alag-alag discount calculators ban gaye. 
// Har returned function apna discount percentage retain karta hai.

//////////////////////////////////////////////////////////////////////

// next step: Closure vs normal function

function outer() {
  let message = "Hello";

  return function() {
    console.log(message);
  };
}

const greet_2 = outer();

greet_2();  // Hello
greet_2();  // Hello

/*
Aisa kyun hota hai? 
outer() execute hokar finish ho gaya, 
lekin returned function ko message variable abhi bhi accessible hai. 
Isi concept ko closure kehte hain.
*/

////////////////////////////////////////////////////////////////////////////////

function createCounter() {
  let count = 0;

  return () => {
    count++;
    return count;
  };
}

const counter_2 = createCounter();

console.log(counter_2());  // 1
console.log(counter_2());  // 2

/*
Step-by-step kya hua?
1. createCounter() call hua aur count = 0 bana.
2. Function ne inner arrow function return kar diya.
3. counter() ki first call par count badhkar 1 ho gaya.
4. Second call par wahi count phir badhkar 2 ho gaya.

Closure ki wajah se inner function apne outer function ke count variable ko yaad rakhta hai,
even after createCounter() finish ho chuka hai.
*/