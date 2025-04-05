const myNums = [1, 2, 3, 4]


// Reduce() Using Normal function

// Here 0 is the initial value and acc is the accumulator which stores the initial value at the first time.

// const total = myNums.reduce(function(acc, currVal) {
//     console.log(`acc is ${acc} and currVal is ${currVal}`);
//     return acc + currVal
// }, 0)
//Output:
// acc is 0 and currVal is 1
// acc is 1 and currVal is 2
// acc is 3 and currVal is 3
// acc is 6 and currVal is 4
// 10

/////////////////////////////////////////////////////////////////////////////////////
// Wrong Implementation of Reduce()

// const total = myNums.reduce(function(acc, currVal) {
//     console.log(`acc is ${acc} and currVal is ${currVal}`);
    
//     return acc + currVal
// })
// Output:
// acc is 1 and currVal is 2   -> here we can see that if we don't give initial value then acc will contain the first element of the array 
// acc is 3 and currVal is 3      and current value will be the second element of the array, which is wrong.
// acc is 6 and currVal is 4      So it is mandatory to have an initial value 
// 10


//////////////////////////////////////////////////////////////////////////////////////
// Reduce() Using Arrow function

const total = myNums.reduce((acc, currVal) => acc + currVal, 0)
console.log(total);  // 10


// Reduce() is widely used in shopping cart related functionalities

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999 
    },
    {
        itemName: "py course",
        price: 999 
    },
    {
        itemName: "java course",
        price: 1999 
    },
    {
        itemName: "data science course",
        price: 12999 
    }
]

// User wants the total amount of purchased courses


const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)   // here "item" represents each "object" of the Array
console.log(`Total price is : ${totalPrice}`);
