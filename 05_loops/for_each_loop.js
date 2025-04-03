// for each loop (widely used in Arrays)
// this loop is by-default injected in Arrays, we can check in inspect
// this is an higher order function

const coding = ["js", "ruby", "java", "cpp", "python"]

// coding.forEach( function (item) {
//     console.log(item);   // js ruby java cpp python
// })
// here () inside the forEach() is called "callback function"
// A callback function doesn't have a name.


// Another variation of forEach loop using "Arrow function"
// coding.forEach( (item) => {
//     console.log(item);  // js ruby java cpp python
// } )


// We can also pass on a function in for Each loop as a parameter

function printMe(item){
    console.log(item); 
}


coding.forEach(printMe)   // don't call the function, just give its reference as a parameter

// coding.forEach(printMe())  // TypeError: undefined is not a function



// There are some more things that comes as parameter (index, arr) in forEach loop

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

// Output
// js 0 [ 'js', 'ruby', 'java', 'cpp', 'python' ]
// ruby 1 [ 'js', 'ruby', 'java', 'cpp', 'python' ]
// java 2 [ 'js', 'ruby', 'java', 'cpp', 'python' ]
// cpp 3 [ 'js', 'ruby', 'java', 'cpp', 'python' ]
// python 4 [ 'js', 'ruby', 'java', 'cpp', 'python' ]



// Most of the used case of forEach loop

// Array of Objects

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
})

// Output
// javascript
// js
// java
// java
// python
// py
