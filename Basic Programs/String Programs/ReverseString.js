// Reverse a String

// 1. Using Built-in method

// function reverseString(str){
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("Pratik Gupta"));


// 2. Using Non Built-in method

// function reverseString(str){

//     if(str === '')
//         return 0;

//     let reverseString = ''

//     for(let i = str.length - 1; i >= 0; i--){
//         reverseString += str[i];
//     }
//     return reverseString;
// }
// console.log(reverseString(""));
// console.log(reverseString("Pratik Gupta"));



// Tried by me

function reverseString(str){
    
    let arr = str.split('')  // convert string into array
    console.log(arr);
    
    if(str === '')
        return 0;

    let i = 0;
    let n = str.length;

    while(i < n/2){
        let temp = arr[i];
        // str[i] = str[n-1-i]  // str[i] = str[n-1-i] // ❌ This does not work!, In JavaScript, str[i] gives you the character, but you cannot assign a new character back into a string like this. Strings are immutable.

    //✅ Solution:
    //Convert the string to an array (which is mutable), do the swapping, and then convert it back to a string:

        arr[i] = arr[n-1-i];
        arr[n-1-i] = temp;
        i++;
    }

    str = arr.join('')  // convert array into string

    return str;
}

console.log(reverseString("Hello"));


