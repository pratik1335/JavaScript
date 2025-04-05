const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myNums = myNumbers.map((num) => num + 10)  // implicit return 
// const myNums = myNumbers.map((num) => {return num + 10})  // explicit return
// console.log(myNums);
// Output
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
// ]

// Map returns both true and false values


// Chaining concept:   value.map().map().filter().map() and so on...

// const newNums = myNumbers.map((num) => num * 10).map((num) => num + 1)


// const newNums = myNumbers
//                         .map((num) => num * 10)     // [10, 20, 30, 40,  50, 60, 70, 80, 90, 100] --> (updated array)
//                         .map((num) => num + 1)      // this "num" applies on the above updated array
// console.log(newNums);
// Output:
// [
//     11, 21, 31, 41,  51,
//     61, 71, 81, 91, 101
// ]


const newNums = myNumbers
                        .map((num) => num * 10)     
                        .map((num) => num + 1)
                        .filter((num) => num >= 40)     
console.log(newNums);
// Output:
// [
//     41, 51,  61, 71,
//     81, 91, 101
// ]