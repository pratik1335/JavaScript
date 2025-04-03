// Array based loops

// ["", "", ""]  Array of Strings
// [{}, {}, {}]  Array of Objects


// for of loop syntax
// for (const element of object) {  
    
// }
// here object means on which thing you want to operate the loop (it can be an array most of the time)

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


// Maps
// it is also an object, everything is an object in JS
// holds key-value pair, unique values, calues are stored in order in which they are inserted in the map
// read about it on MDN docs

const map = new Map()
map.set('IN', "India")
map.set('RS', "Rassia")
map.set('FR', "France")

// console.log(map);  // Map(3) { 'IN' => 'India', 'RS' => 'Rassia', 'FR' => 'France' }

map.set('IN', "India")

// console.log(map);  // Map(3) { 'IN' => 'India', 'RS' => 'Rassia', 'FR' => 'France' }

// Can we apply for of loop on a map??
for (const key of map) {
    console.log(key);
}
// it will print like this
// [ 'IN', 'India' ]
// [ 'RS', 'Rassia' ]
// [ 'FR', 'France' ]

// So we have a shortcut here to get the desired values from a map using for of loop
for (const [key] of map) {  
    console.log(key); 
}
// Output
// IN
// RS
// FR

for (const [key, value] of map) {  // de-structuring array
    console.log(key, ':-', value);
}
// Output
// IN :- India
// RS :- Rassia
// FR :- France


// Can we apply "for of" loop on an object??
const myObj = {
    // 'game1' : "NFS",
    // 'game2' : "Spiderman"
    game1 : "NFS",
    game2 : "Spiderman"
}

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }
// It will give error : TypeError: myObj is not iterable
// that means we can't use for-of loop in case of objects

// But we have other loops to iterate an object
