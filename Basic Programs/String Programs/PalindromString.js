// Palindrome String -> reverse string === original string

// 1. Built-in method

// function palindromeString(str){
    // let revString = str.split('').reverse().join('');
    // if(revString === str) return true;
    // return false;

//     // using regex
//     let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     let revString = cleaned.split('').reverse().join('')

//     if(cleaned === revString) return true;

//     return false;
// }


// 2. Normal method

function palindromeString(str){

    let clean = str.toLowerCase().replace(/[^a-z0-9]/g, '')

    let left = 0;
    let right = clean.length - 1;

    while(left < right){
        if(clean[left] != clean[right]) return false;
        left++;
        right--;
    }

    return true;
}



console.log(palindromeString("madam"));  // true
console.log(palindromeString("MalAyaLam")); // true 




// Regular expression

// let str2 = "Hello !!World@&*"

// let clean = str2.replace(/[^a-z0-9]/g, '');
// let clean = str2.toLowerCase().replace(/[^a-z0-9]/, '')  // hello!!world@&*

// let clean = str2.toLowerCase().replace(/[a-z0-9]/g, '')  // !!@&*

// let clean = str2.toLowerCase().replace(/[^a-z0-9]/g, '')  // helloworld
 
// console.log(clean);  // helloworld

