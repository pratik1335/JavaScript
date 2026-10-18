// Array of objects

/*
Task 1: Sirf un products ko select karo jinki price 1000 se zyada hai.
Task 2: Un selected products ke sirf names ka array banao.
Task 3: Sabhi products ki total price calculate karo.
*/
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 12000 }
];

const filteredProducts = products.filter((product) => product.price > 1000);
console.log(filteredProducts);

const names = filteredProducts.map((product) => product.name)
console.log(names);

const totalPrice = products.reduce((acc, current) => current.price + acc, 0);
console.log(totalPrice);

// acc — ab tak calculate hua total.
// current.price — current product ki price.
// 0 — accumulator ki initial value.

// reduce() har product ki price add karta hai aur final result 64000 deta hai.


/////////////////////////////////////////////////////////////////////////////////////

// Next challenge — Method chaining
// Hint: filter() + reduce() use karo

// ab bina intermediate variables banaye, 
// ek hi expression mein un products ki total price calculate karo
// jinki price ₹1,000 se zyada hai.

// Expected result: 63500

const price = products.filter(product => product.price > 1000).reduce((acc, current) => acc + current.price, 0)
console.log(price);

// Interview takeaway:
// Method chaining mein ek method ka returned result next method ko milta hai.
// filter() array return karta hai, isliye uske baad reduce() laga sakte hain.


/////////////////////////////////////////////////////////////////////////////////

// Next challenge: Ab ek hi expression mein ₹1,000 se zyada price wale products ke sirf names return karo.
// Hint: filter() + map() use karo

const productNames = products.filter(product => product.price > 1000).map(product => product.name)
console.log(productNames);
