const coding = ["js", "cpp", "java", "python"]

// coding.forEach( (item) => {
//     console.log(item);
// })

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);  // undefined

// NOTE : forEach loop doesn't return any value

// We can use filter if we want to return any value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4 )    // Implicit return
console.log(newNums);   // [ 5, 6, 7, 8, 9, 10 ]

// const newNums = myNums.filter( (num) => {
//     num > 4
// } )    
// console.log(newNums);   // []    // because of {}, a new scope is created so we need to explicitely return

// const newNums = myNums.filter( (num) => {
//     return num > 4    // Explicit return 
// } )    
// console.log(newNums);  // [ 5, 6, 7, 8, 9, 10 ]

// We can also do the above thing using forEach loop but that requires some extra logic because it doesn't return 

// const newNums = []
// myNums.forEach((num) => {
//     if(num > 4)
//         newNums.push(num);
// })

// console.log(newNums);  // [ 5, 6, 7, 8, 9, 10 ]



// Other use cases of filter

const books = [
    {title: 'Book One', genre: 'fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1982, edition: 2005},
    {title: 'Book Three', genre: 'History', publish: 1993, edition: 2008},
    {title: 'Book Four', genre: 'fiction', publish: 1989, edition: 2006},
    {title: 'Book Five', genre: 'Science', publish: 1980, edition: 2001},
    {title: 'Book Six', genre: 'Non-fiction', publish: 1987, edition: 2002},
    {title: 'Book Seven', genre: 'Drama', publish: 1993, edition: 2005},
    {title: 'Book Eight', genre: 'Suspense', publish: 1978, edition: 2004},
    {title: 'Book Nine', genre: 'History', publish: 1987, edition: 2009}
]

// This is how we grab data from the Database in real world//

// User wants all those books whose genre is History
let userBooks = books.filter((book) => book.genre === 'History' )     // here "book" represnts each "object" of the Array books
// console.log(userBooks);
// Output
// [
//     {
//         title: 'Book Three',
//         genre: 'History',
//         publish: 1983,
//         edition: 2008
//     },
//     {
//         title: 'Book Nine',
//         genre: 'History',
//         publish: 1967,
//         edition: 2009
//     }
// ]

// User wants all those books whose pulish year is greator than or equal to 1985

// const userBooks = books.filter((book) => book.publish >= 1985)  // implicit return
userBooks = books.filter((book) => {return book.publish >= 1985})  // explicit return 
// console.log(userBooks);
// Output :
// [
//     {
//       title: 'Book Four',
//       genre: 'fiction',
//       publish: 1989,
//       edition: 2006
//     },
//     {
//       title: 'Book Six',
//       genre: 'Non-fiction',
//       publish: 1987,
//       edition: 2002
//     },
//     { title: 'Book Seven', genre: 'Drama', publish: 1993, edition: 2005 }
//   ]


// User wants all those books whose pulish year is greator than or equal to 1985 AND whose genre is History
userBooks = books.filter((book) => {
   return book.publish >= 1985 && book.genre === 'History'
})
console.log(userBooks);


// NOTE : filter returns the true values only

