// this keyword in JS

const user = {
  name: "Rahul",

  greet() {
    console.log(this.name);
  }
};

user.greet();

/*
Jab hum user.greet() call karte hain, 
toh method ke andar "this", user object ko refer karta hai.

*/

// 2. Ek important difference

const user_2 = {
  name: "Rahul",
  greet() {
    console.log(this.name);
  }
};

const anotherGreet = user_2.greet;

anotherGreet();  

// Output: undefined

/*
Yahan anotherGreet() ko directly call kiya gaya hai, user.greet() ki tarah nahi.
Normal browser script ke strict mode mein this undefined hoga, 
isliye this.name access karne par TypeError aayega. 
Non-strict mode mein behavior alag ho sakta hai.
*/

//////////////////////////////////////////////////////////////////////////

// 3. Ab arrow function ka twist

const user_3 = {
  name: "Rahul",

  greet: () => {
    console.log(this.name);
  }
};

user_3.greet();
// Arrow function apna this nahi banata. 
// Woh surrounding scope ka this use karta hai, jo yahan user object nahi hai.

// Hint: 
// Arrow functions apna khud ka this nahi banate. 
// Woh surrounding scope se this lete hain.


/////////////////////////////////////////////////////////////////////////////

const user_4 = {
  name: "Rahul",

  greet() {
    const inner = () => {
      console.log(this.name);
    };

    inner();
  }
};

user_4.greet();

/*
1. user.greet() call hota hai, isliye normal method ke andar this ka matlab user object hai.
2. inner ek arrow function hai. Arrow function apna this nahi banata.
3. Woh surrounding greet() method ka this use karta hai.
4. this.name ka result "Rahul" hota hai.
*/

