const marvel_heroes = ["thor", "hulk", "ironman"]
const dc_heroes = ["superman", "batman", "flash"]

// marvel_heroes.push(dc_heroes) // this will NOT merge both the arrays
// console.log(marvel_heroes);  // [ 'thor', 'hulk', 'ironman', [ 'superman', 'batman', 'flash' ] ] // Array inside Array (Array as an element)
// console.log(marvel_heroes.length); // 4

// console.log(marvel_heroes[3]); // [ 'superman', 'batman', 'flash' ]
// console.log(marvel_heroes[3][1]); // batman  // Not a good way 

// marvel_heroes.concat(dc_heroes)  // Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(marvel_heroes); // [ 'thor', 'hulk', 'ironman' ]

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes) // [ 'thor', 'hulk', 'ironman', 'superman', 'batman', 'flash' ]

// limitations in concat : if arrays are more than 2 then it will be difficult to concat all of them
// so it is better to use spread operator

// So In place of concat, we can use "spread operator"  (ex. drop a cup of glass and it will spread/scatter)
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes); // [ 'thor', 'hulk', 'ironman', 'superman', 'batman', 'flash' ]

// if arrays are more that 2
// const all_arrays = [...arr1, ...arr2, ...arr3]


// flat() method

const newArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [4, 5]]]
console.log(newArray); // [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 8, 9, [ 4, 5 ] ] ]

// const flatArray = newArray.flat(1) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 4, 5 ] ]
// const flatArray = newArray.flat(2) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5]
const flatArray = newArray.flat(Infinity)
console.log(flatArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5]

// Note: It is better to give depth (flat(depth)) but if array is very long then we can use Infinity as depth


// if data is coming in other forms like in string or object but if we want array only.

console.log(Array.isArray("pratik")); // false

// how to covert strings or objects into Array

console.log(Array.from("pratik")); // [ 'p', 'r', 'a', 't', 'i', 'k' ]

// **Important** //
console.log(Array.from({name: "pratik"})); // [], if from() is not able to covert into array then it gives empty array
// so in case of objects, we need to define first if we want array of keys or array of values


// of() method  -> Returns a new array from a set of elements.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]

 



