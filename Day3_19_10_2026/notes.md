## Hoisting
    - JavaScript mein hum generally variable declare karte hain aur phir use karte hain
    - Lekin JavaScript mein kuch declarations ko unki actual line execute hone se pehle bhi process kiya jata hai. Is behavior ko hoisting kehte hain
    - Important: Hoisting ka matlab ye nahi ki JavaScript literally tumhara code upar move kar deti hai. Ye declarations ke setup aur initialization behavior ko describe karne ka ek useful model hai.

1. var ke saath hoisting
    - var declaration hoist hoti hai aur shuru mein uski value undefined hoti hai. Assignment = 25 apni original execution line par hota hai.

2. let aur const ke saath hoisting
    - let aur const declarations bhi hoist hoti hain, lekin initialization se pehle unhe access nahi kar sakte. Is period ko Temporal Dead Zone (TDZ) kehte hain.
    - const ko declaration ke waqt initialize karna bhi zaroori hai.

## Scope
    - scope ka matlab hai kisi variable ko code ke kis part se access kar sakte hain

JavaScript mein abhi teen important scopes samjho:
- Global scope: variable ko surrounding script mein kai jagah access kar sakte ho.
- Function scope: function ke andar declared var us function tak limited hota hai.
- Block scope: {} ke andar declared let aur const us block tak limited hote hain.

###

| Code | Output | Kyun? |
|---|---|---|
|`var + setTimeout`| `3 3 3` | `Ek hi shared variable` |
|`let + setTimeout` | `0 1 2` | `Har iteration ki alag binding` |

- ek important baat: 
    - var khud problem nahi hai. Problem tab samajh aati hai jab asynchronous callback baad mein execute hota hai aur variable ki value tab tak change ho chuki hoti hai.

- Shared variable ka matlab hai ki teeno callbacks ek hi variable ko refer karte hain, teen alag variables ko nahi.

- Dhyan do: setTimeout har baar i ki value ki copy save nahi karta. Callback baad mein i ki current value read karta hai.

- binding ka simple matlab hai: variable ka woh specific reference jisse code uski value access karta hai. let wale for loop mein har iteration ke liye alag binding hoti hai.

###

## Functions in JS

1. Normal function vs Arrow function
    - Important: Arrow function aur normal function har situation mein interchangeable nahi hain. Inka this behavior alag hota hai.
    - Jab arrow function mein {} nahi hote, toh expression ka result automatically return hota hai.

2. Callback function
    - Callback ek function hota hai jise hum kisi doosre function ko argument ke roop mein pass karte hain, taaki woh use call kar sake.

3. Higher-order function
    - Higher-order function (HOF) aisa function hota hai jo kisi function ko argument ke roop mein leta hai, ya ek function return karta hai.
    - higher-order functions ka fayda — ek function ko reusable banakar alag-alag behavior de sakte hain.
    - JavaScript mein map(), filter() aur forEach() iske common examples hain.

    - map() higher-order function kyun hai?
        Kyuki map() ek function ko argument ke roop mein accept karta hai.
        - map() — higher-order function.
        - n => n * 2 — callback function (an arrow function)
        - map() har element ke liye callback chalata hai aur results ka ek naya array banata hai.
        - Ek important baat: map() aam taur par original array ko change nahi karta; woh transformed elements ka naya array return karta hai.

    - Yaad rakhne ka shortcut:
        - HOF = function jo doosre function ke saath kaam kare.
        - Callback = woh function jo pass kiya gaya hai.


## Closure in JS

1. important concept: Functions se function return karna
    - Humne higher-order functions ke do behaviors dekhe:
        - Function ko argument ke roop mein lena.
        - Ek function se doosra function return karna.

2. Simple definition: 
    Closure tab hota hai jab function apne surrounding lexical scope ke variables ko access kar sakta hai, chahe woh function apne original scope ke bahar execute ho raha ho.

    Closure ke liye function ko return karna zaroori nahi hai.

3. Closure = function + uske surrounding lexical scope ke variables tak access.

4. Ek aur important baat: closure koi alag syntax ya keyword nahi hai. Ye JavaScript functions ke kaam karne ka behavior hai.

5. Ye closure ka bahut important concept hai: 
   har baar outer() call karne par naya count variable banta hai.

6. Quick revision — sab concepts ek saath

    | Concept |	Simple meaning |
    |---|---|
    | Function |	Reusable code |
    | Callback |	Ek function jo doosre function ko pass hota hai |
    | HOF  |	Function jo doosra function leta hai ya return karta hai |
    | Closure |	Function jo apne surrounding scope ke variables access kar sakta hai |

7. Closure = Function + Remembered Scope
    - Inner function sirf variable ki initial value yaad nahi rakhta; woh us variable ko access aur update bhi kar sakta hai.

## this keyword in JS

1. JavaScript mein this ki value is baat par depend karti hai ki function kaise call hua hai.

2. Rule: this ka answer nikalne ke liye dekho function ko call kaise kiya gaya hai.

3. Ek simple rule yaad rakh

    | Function type	 | this kahan se aata hai? |
    |---|---|
    | Normal method	 | Call karne ka tareeka matter karta hai |
    | Arrow function | 	Surrounding scope se aata hai |

4. Note: Exact output environment par depend kar sakta hai. ES modules mein top-level this undefined hota hai; normal browser scripts mein bhi global this object hota hai, lekin usmein aam taur par name property nahi hoti.

5. Ab tak ka this recap
    - Normal method: this ko call karne ka tareeka determine karta hai.
    - Arrow function: surrounding scope se this leta hai.
    - Arrow function inside a method: method ka this use kar sakta hai.
    
6. Ek useful interview tip: JavaScript mein this ko samajhne ke liye sirf function kahan likha hai, ye mat dekho—ye bhi dekho ki function kaise call hua hai.

## Promises

1. Synchronous vs Asynchronous

    - Synchronous: Code ek ke baad ek execute hota hai.
    - Asynchronous: Kisi operation ke complete hone ka wait karte waqt JavaScript doosra available code execute kar sakti hai.

2. Promise kya hota hai?
    - maan lo tumne server se user ka data maanga. Request abhi complete nahi hui hai. Promise us operation ke future result ko represent karta hai.

        - Pending
            - Operation abhi chal raha hai.

        - Fulfilled
            - Operation successfully complete ho gaya.

        - Rejected
            - Operation fail ho gaya.

3. Next concept: .then() aur .catch()
    - .then() — successful result ko handle karta hai.
    - .catch() — chain mein aane wale rejection ya error ko handle karta hai.

    - fetchUser()
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

4. Ek important rule yaad rakho
    | Method |	Kaam |
    |---|---|
    | resolve(value) |	Promise successful |
    | reject(error) |	Promise failed |
    | .then() |	Success handle karna |
    | .catch() |	Rejection/error handle karna |
    | .finally() | Success ya failure, dono ke baad cleanup karna |


## Async/await

- Ye JavaScript mein Promises handle karne ka ek clean aur readable tareeka hai.

 1. async kya karta hai?
    - async function ko asynchronous function banata hai, jo hamesha Promise return karta hai.

 2. await kya karta hai?
    - await kisi Promise ke settle hone ka wait karta hai aur fulfillment par uski value deta hai.

 3. Errors handle kaise karein?
    - Promises mein .catch() use kiya tha. 
    - async/await mein hum try/catch use kar sakte hain.