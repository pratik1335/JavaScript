// Array Object : can be of any data-type in JS

// JS Arrays are resizableand can contain a mix of different data-types

const arr = [0, 1, 2, true, "pratik"]

// console.log(arr[3]);
// console.log(arr[4]);

// Array elements can not be accessed using arbitrary strings as indexes
// console.log(arr["one"]); // undefined 

const myHeroes = ["Spiderman", "Batman"]

// const myArr = new Array(1, 2, 3, 4,)
const myArr = new Array(1, 2, 3, 4, 5, 6)

// Interview Question:
// JS Array copy operations create shallow copies

// What is Shallow & Deep Copy

// Shallow Copy : of an object is a copy whose properties share the same references
// original array will be changed if we do changes in the copy of it

// Deep Copy : of an object is a copy whose properties do not share the same references


// length property of Array
// console.log(myArr.length); // 4


// Array Methods

// 1. push()

// myArr.push(5)
// myArr.push(6)
// myArr.push(10)
// console.log(myArr); // [ 1, 2,  3, 4, 5, 6, 10 ]

// 2. pop()

// myArr.pop()
// console.log(myArr); // [ 1, 2, 3, 4, 5, 6 ]

// 3. unshift()

// myArr.unshift(15)  // Inserts new elements at the start of an array, and returns the new length of the array.
// console.log(myArr); // [ 15, 1, 2, 3, 4 ]

// 4. shift()

// myArr.shift()  // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(myArr); // [ 1, 2, 3, 4 ]

// 5. includes()

// console.log(myArr.includes(9)); // false

// 6. indexOf()

// console.log(myArr.indexOf(19)); // -1
// console.log(myArr.indexOf(2)); // 1

// 7. join()

// console.log(myArr);  // [ 1, 2, 3, 4, 5, 6 ]

// console.log(myArr.join()); // 1,2,3,4,5,6
// console.log(typeof myArr.join()); // string


// Interview Questions:
// 8. slice() and splice()

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1); // [ 2, 3 ]

console.log("B ", myArr); // B  [ 1, 2, 3, 4, 5, 6 ]

const myn2 = myArr.splice(1, 3)   // @returns — An array containing the elements that were deleted.
console.log(myn2); // [ 2, 3, 4 ]

console.log("C ", myArr); // C  [ 1, 5, 6 ]  (remaining array after splice() operation)


// slice() doesn't manipulate/modify the original array

// splice() manipulates/modifies the original array
















