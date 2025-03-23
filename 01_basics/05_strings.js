const name = "pratik"
const repoCount = 10

// console.log(name + repoCount + " value"); don't use this

// use string interpolation in place of above
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Another way of declaring string using "new" keyword
// const gameName = new String('pratikpg')

const gameName = new String('pratik-pg-com')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);


// String Methods

console.log(gameName.toUpperCase());   // No change in the gameName string
// console.log(gameName);

console.log(gameName.charAt(3)); // t

console.log(gameName.indexOf('i'));
console.log(gameName.indexOf('p')); // 0
console.log(gameName.lastIndexOf('p')); // 7


// console.log(gameName.substring(0, 4)); // prat
const newString = gameName.substring(0, 4)
console.log(newString);  // prat

console.log(gameName.substring(-2, 4));  // prat

// substring() doesn't work on negative indexes


// we can use slice() for negative indexes

// const anotherString = gameName.slice(2, 5)  // ati

const anotherString = gameName.slice(-8, 6)
console.log(anotherString); // ratik


// trim()
const newStrOne = "    pratikgupta       "
console.log(newStrOne);
console.log(newStrOne.trim());


// replace()
const url = "http://pratik.com/pratik%20gupta"
console.log(url);
console.log(url.replace('%20', '-'));

// includes()
console.log(url.includes('gupta')); // true
console.log(url.includes('shivam')); // false


// split() : used to convert a string into an array
console.log(gameName.split('-'));  // [ 'pratik', 'pg', 'com' ]


// Note : Read about the different methods of string from MDN 
// (first go to inspect and type String.prototype to see all the methos of String)










