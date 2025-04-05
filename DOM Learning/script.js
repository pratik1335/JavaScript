
// getElementById

// document.getElementById("title").id  // 'title'

// document.getElementById('title').class  // undefined

// document.getElementById('title').className // 'heading'

// document.getElementById('title').getAttribute('id') // 'title'

// document.getElementById('title').getAttribute('class') // 'heading'

// document.getElementById('title').getAttribute('className') // null




// document.getElementById('title').setAttribute('class', 'test')

// Remember, this setAttribute will always override the existing class name
// so make sure to use it with the exisitng class like shown below

// document.getElementById('title').setAttribute('class', 'heading test')



// const title = document.getElementById('title')
// title.style.backgroundColor = 'green'
// title.style.padding = '10px'
// title.style.borderRadius = '20px'

// title.textContent  // 'DOM Learning on github test text'
// title.innerHTML // 'DOM Learning on github <span style="display: none;">test text</span>'
// title.innerText  // 'DOM Learning on github'


// Query Selector

// document.querySelector('h2')  // it will select only the first h2

// document.querySelector('#title')   // # is for selecting id

// document.querySelector('.heading')  // . is for selecting class

// document.querySelector('input[type="password"]')  // <input type="password" placeholder="Enter your name">


// const myUl = document.querySelector('ul')

// const turnGreen = myUl.querySelector('li')

// turnGreen.style.backgroundColor = 'green'

// turnGreen.innerText // one

// turnGreen.innerText = 'five'



// Query Selector All

document.querySelectorAll('li')  // NodeList(3) [li, li, li]

// NOTE: NodeList and HTML Collection are not pure Arrays, these are different than Array
// we can see that in NodeList, we don't have map but we have forEach only
// While in HTML Collection, we don't have map and forEach

// So always make sure to look into the properties ([Prototype]) of each data structure 
// for checking how many methods it supports

// In Arrys, we get the properties like map, forEach, filter by-default thats why 
// we are able to apply these methods in Array.

// We can convert NodeList and HTML Collection into Array using one Array method that is from()

// Array.from(<NodeList>)
// Array.from(<HTML Collection>)


const tempLiList = document.querySelectorAll('li')  // NodeList(3) [li, li, li]

// tempLiList.style.backgroundColor = 'orange'  // Uncaught TypeError: Cannot set properties of undefined (setting 'backgroundColor')

tempLiList[0].style.color = 'green'
tempLiList[1].style.color = 'blue'
tempLiList[2].style.color = 'red'


const myH1 = document.querySelectorAll('h1')  // NodeList [h1#title.heading]

// myH1.style.color = 'blue'  // Uncaught TypeError: Cannot set properties of undefined (setting 'color')

myH1[0].style.color = 'orange'


// As we know we can use forEach() in NodeList

tempLiList.forEach(function(l){
    l.style.backgroundColor = 'yellow'
})

// NOTE: Try to use forEach() in case of NodeList
// if you specifically want to use map in NodeList then first convert NodeList into Array and then apply map.



// getElementsByClassName

const tempClassList = document.getElementsByClassName('list-item')  // HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

// HTML Collection is different than the NodeList

// We can't use forEach() in case of HTML Collection

// tempClassList.forEach(function(l){
//     console.log(l)
// })  // Uncaught TypeError: tempClassList.forEach is not a function

// We have to convert it to an Array first

const myConvertedArray = Array.from(tempClassList)  // [li.list-item, li.list-item, li.list-item, li.list-item]

// Now we can use map() or forEach()

myConvertedArray.map(function(l){
    l.style.color = 'orange'
})

myConvertedArray.forEach(function(l){
    l.style.color = 'blue'
})