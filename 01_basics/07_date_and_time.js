// Date Object

let myDate = new Date()
console.log(myDate); // 2025-03-26T16:01:59.544Z  (doesn't look much understandable)

// we will use toString() method to simplify it
console.log(myDate.toString()); // Wed Mar 26 2025 16:03:26 GMT+0000 (Coordinated Universal Time)

// We can also use other methods as well

console.log(myDate.toDateString()); // Wed Mar 26 2025
console.log(myDate.toISOString()); // 2025-03-26T16:18:45.579Z (Returns a date as a string value in ISO format)
console.log(myDate.toJSON()); // 2025-03-26T16:19:33.257Z
console.log(myDate.toLocaleDateString()); // 3/26/2025
console.log(myDate.toLocaleString()); // 3/26/2025, 4:23:36 PM
console.log(myDate.toLocaleTimeString()); // 4:23:59 PM
console.log(myDate.toTimeString()); // 16:24:53 GMT+0000 (Coordinated Universal Time)

// Interview Question
// Date is an Object datatype
console.log(typeof myDate); // object


// How to set a specific date

// let myCreatedDate = new Date(2024, 0, 26)
// console.log(myCreatedDate.toDateString());  // Jan(index : 0) 26 2024

// let myCreatedDate = new Date(2024, 5, 26)
// console.log(myCreatedDate.toDateString());  // Jun(index : 5) 26 2024

let myCreatedDate = new Date(2024, 11, 26)
console.log(myCreatedDate.toDateString());  // Dec(index : 11) 26 2024

// How to set a specific date and time

// let myCreatedDateAndTime = new Date(2025, 3, 27, 10, 2)
// console.log(myCreatedDateAndTime.toLocaleString()); // 4/27/2025, 10:02:00 AM

let myCreatedDateAndTime = new Date(2025, 3, 27, 22, 2)
console.log(myCreatedDateAndTime.toLocaleString()); // 4/27/2025, 10:02:00 PM

//  How to set Date in a specific format (in YY/MM/DD)
// let myFormattedDate = new Date("2025-03-19")
// console.log(myFormattedDate.toLocaleString());  // 3/19/2025, 12:00:00 AM

//  How to set Date in a specific format (in MM/DD/YY)
let myFormattedDate = new Date("03-27-2025")
console.log(myFormattedDate.toLocaleString());  // 3/27/2025, 12:00:00 AM


// Time Stamp (used in desiging quizzes, poles)

let myTimeStamp = Date.now() // Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).
console.log(myTimeStamp); // 1743007157548 (date in milli seconds)

console.log(myFormattedDate.getTime());  // 1743033600000 (used in comparing different times) // Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC

// Interview Question : Get time in seconds
console.log(Math.floor(Date.now()/1000)); // 1743007400



// More methods in Date

let newDate = new Date
console.log(newDate); // 2025-03-26T16:47:37.251Z
console.log(newDate.getMonth()); // 2 (start from 0th index)
console.log(newDate.getMonth() + 1); // 3 (for avoiding index confusion)
console.log(newDate.getDay()); // 3
console.log(newDate.toDateString()); // Wed Mar 26 2025


// **Important** //
// More about LocaleString()

// We can do customization in Date and Time using LocaleString()

newDate.toLocaleString('default', {
    weekday : "narrow",  // do cntrl + space for suggestions
    hour : "2-digit"
})











