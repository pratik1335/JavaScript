// Objects, references, shallow vs deep copy

const user = {
  name: "Amit",
  address: {
    city: "Kanpur"
  }
};

const copy = { ...user };

copy.name = "Raj";
copy.address.city = "Noida";

console.log(user.name); // Amit
console.log(user.address.city); // Noida

//////////////////////////////////////////////////////////////////////

const original = {
  name: "Amit",
  skills: ["JS", "Angular"]
};

const copy_2 = { ...original };

copy_2.name = "Raj";
copy_2.skills.push("TypeScript");

console.log(original.name);  // Amit
console.log(original.skills); // ["JS", "Angular", "TypeScript"]

// copy.name = "Raj" — name top-level property hai, isliye original ka name change nahi hua.
// copy.skills.push("TypeScript") — skills ek nested array hai. 
// Shallow copy mein original aur copy dono same array ko refer karte hain, 
// isliye original array bhi update ho gaya.

///////////////////////////////////////////////////////////////////////////////

// Next practice: Deep copy

const original_2 = {
  name: "Amit",
  skills: ["JS", "Angular"]
};

const copy_3 = structuredClone(original_2);

copy_3.skills.push("TypeScript");

console.log(original_2.skills);  // ["JS", "Angular"]
console.log(copy_3.skills); // ["JS", "Angular", "TypeScript"]

// structuredClone(original) ne nested array ki bhi independent copy bana di.
// Isliye copy.skills.push("TypeScript") karne par original.skills change nahi hua.


//////////////////////////////////////////////////////////////////////////////////////

// Object Destructuring

const user_2 = {
  name: "Amit",
  age: 28,
  city: "Kanpur"
};

const { name: userName, age, country = "India" } = user_2;

console.log(userName);  // Amit
console.log(age);  // 28
console.log(country);  // India
// console.log(name);  // ReferenceError: name is not defined

// name: userName variable ka naam badal raha hai.
// country = "India" default value hai.

// Yahan name: userName ka matlab hai: object ki name property ki value lekar userName naam ka variable banao.
// Isse name naam ka variable create nahi hota. Isliye console.log(name) par ReferenceError aayega.

// Interview notes:
// - name: userName → variable renaming
// - country = "India" → default value, jab property missing ya undefined ho
// - Destructuring original object ko modify nahi karta.


//////////////////////////////////////////////////////////////////////////////////

// Array Destructuring

const skills = ["JavaScript", "TypeScript", "Angular"];

const [first, second] = skills;

console.log(first);       // JavaScript
console.log(second);      // TypeScript
console.log(skills[2]);   // Angular

// Yaad rakho: Array destructuring mein values position ke basis par assign hoti hain.
// - first → index 0
// - second → index 1
// - skills[2] → index 2


//////////////////////////////////////////////////////////////////////////////////

// Rest Operator

const userSkills = ["JavaScript", "TypeScript", "Angular", "Node.js"];

const [firstSkill, ...remaining] = userSkills;

console.log(firstSkill);  // JavaScript
console.log(remaining);  // [ 'TypeScript', 'Angular', 'Node.js' ]

// Quick notes
// - first → pehla element.
// - ...remaining → bache hue saare elements ko ek naye array mein collect karta hai.
// - Destructuring mein ...remaining ko "rest operator" kehte hain.

//////////////////////////////////////////////////////////////////////////////////////

// Spread vs Rest Operator

// Spread operator  (...a -> Array ke elements ko spread krna)
const a = [1, 2];
const b = [...a, 3, 4];

console.log(b); // [1, 2, 3, 4]

// Rest Operator  (...numbers -> Saare Arguments ko ek array me collect krna)
function sum(...numbers) {
  console.log(numbers);
}

sum(10, 20, 30); // [10, 20, 30]

//////////////////////////////////////////////////////////////////////////////////

// Default Parameters + Rest

function greet(name = "Guest") {
  return `Hello, ${name}`;
}

console.log(greet("Amit")); // Hello, Amit
console.log(greet());       // Hello, Guest

// Quick notes
// Default parameters tab use hote hain jab function ko argument nahi milta ya argument undefined hota hai.

function greet(name = "Guest") {
  return name;
}

greet("Amit"); // "Amit"
greet();       // "Guest"
greet(undefined); // "Guest"
greet(null);   // null

// null dene par default value apply nahi hoti.

////////////////////////////////////////////////////////////////////////////////////

// Object Spread

const user_4 = {
  name: "Amit",
  age: 28
};

const updatedUser = {
  ...user_4,
  age: 29,
  city: "Kanpur"
};

console.log(updatedUser);  // { name: 'Amit', age: 29, city: 'Kanpur' }
console.log(user_4);  // { name: 'Amit', age: 28 }


///////////////////////////////////////////////////////////////////////////////

// Optional Chaining (?.)
// ?. ka matlab: Agar left side ki value null ya undefined hai, 
// toh error throw karne ke bajay undefined return karo.

// Angular mein use: Jab API response mein nested properties missing ho sakti hain, 
// tab optional chaining useful hoti hai.

const user_5 = {
  name: "Amit",
  address: {
    city: "Kanpur"
  }
};

console.log(user_5.address.city);      // "Kanpur"
console.log(user_5.contact?.phone);    // undefined
console.log(user_5.address?.pincode);  // undefined
console.log(user_5.address?.email);  // undefined

// Normal access vs Optional Chaining
// console.log(user.contact.phone);
// TypeError: Cannot read properties of undefined

console.log(user.contact?.phone);
// undefined


////////////////////////////////////////////////////////////////////////////////

// Nullish Coeliscing (??)
// Rule: ?? right-side ki default value tab use karta hai 
// jab left-side value null ya undefined ho.

console.log("\n");

const username = null;
const displayName = username ?? "Guest";

const count = 0;
const total = count ?? 10;

console.log(displayName);  // Guest
console.log(total);  // 0

/////////////////////////////////////////////////////////////////////////////////

// `??` vs `||` in JavaScript
const x = 0;
const y = "";
const z = undefined;

console.log("\n");

console.log(x || 5);  // 5
console.log(x ?? 5);  // 0

console.log(y || "Hello");  // Hello
console.log(y ?? "Hello");  // ""

console.log(z ?? "Guest");  // Guest


/////////////////////////////////////////////////////////////////////////////////

// JavaScript map() vs forEach()

const numbers = [1, 2, 3];

const mp = numbers.map(n => n * 2);
const fe = numbers.forEach(n => n * 2);

console.log(mp); // [2, 4, 6]
console.log(fe); // undefined, callback ke results ko collect karke array return nahi karta.