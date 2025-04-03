const myObject = {
    js : "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    java: "Java"
}

// for in loop

for (const key in myObject) {
    // console.log(key);  // we will get keys of object
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}
// myObject[key] -> we will get values of the related keys


// Can we use for-in loop on Arrays???

const programming = ["js", "cpp", "java", "ruby"]

for (const key in programming) {
    // console.log(key);
}
// Output -> we will get keys of array that are nothing but indexes only
// 0
// 1
// 2
// 3

for (const key in programming) {
    // console.log(programming[key]);
}
// Output
// js
// cpp
// java
// ruby


// Can we use for-in loop on Maps???

const map = new Map()
map.set('IN', "India")
map.set('RS', "Rassia")
map.set('FR', "France")
map.set('IN', "India")

// for (const key in map) {
//     // console.log(map[key]);
//     console.log(key);
// }
// This will not work because Map is not iteratable
// There are other ways for Map but this for-in loop will not work in Map
