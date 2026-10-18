// sort()

const numbers = [30, 10, 20];

// const sorted = [...numbers]  // ... creates shallow copy of numbers array

// console.log(sorted);  // [30, 10, 20]
// console.log(numbers); // [30, 10, 20]

const sorted = [...numbers].sort((a,b) => a - b)
console.log(numbers); // [30, 10, 20]
console.log(sorted);  // [10, 20, 30]

// a - b -> sorting in ascending order
// b - a -> sorting in decending order

////////////////////////////////////////////////////////////////////////////////

// Next challenge: Objects ko price ke basis par sort karo

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 12000 }
];

const sortProducts = [...products].sort((a,b) => b.price - a.price).map(product => product.name)
console.log(sortProducts);

// Execution flow
// 1. [...products] → original array ki shallow copy.
// 2. .sort((a, b) => b.price - a.price) → highest price se lowest price tak sort.
// 3. .map(product => product.name) → sirf product names ka array.


//////////////////////////////////////////////////////////////////////////////////

// Next challenge: find() vs filter()

const allProducts = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 12000 }
];

console.log(allProducts.find(product => product.price > 1000)); // { name: "Laptop", price: 50000 },
console.log(allProducts.filter(product => product.price > 1000));
// [
//   { name: "Laptop", price: 50000 },
//   { name: "Keyboard", price: 1500 },
//   { name: "Monitor", price: 12000 }
// ]


/////////////////////////////////////////////////////////////////////////

// Next challenge: find() + optional chaining

const product = products.find(product => product.price < 100);

// console.log(product.name ?? "Product not found");  // TypeError: Cannot read properties of undefined (reading 'name')

console.log(product?.name ?? "Product not found");  // Product not found

// means: . ko ?. se replace karna hai, extra dot add nahi karna.


//////////////////////////////////////////////////////////////////////////////

// Final Challenge — Products Analysis

/*
Tumhare 4 tasks hain:
1. filter() — ₹1,000 se zyada price wale products select karo.
2. sort() — selected products ko lowest se highest price ke order mein sort karo. Original array change nahi hona chahiye.
3. map() — sorted products ke sirf names ka array banao.
4. reduce() — selected products ki total price calculate karo
*/
const newProducts = [
    {name : "Laptop", price: 50000},
    {name : "Mouse", price: 500},
    {name : "Keyboard", price: 1500},
    {name : "Monitor", price: 12000}
]

console.log("\n");

const filteredProducts = newProducts.filter(product => product.price > 1000);
console.log(filteredProducts);


const sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
console.log(sortedProducts);


const productNames = sortedProducts.map(product => product.name);
console.log(productNames);

const totalPrice = sortedProducts.reduce((acc, current) => acc + current.price, 0);
console.log(totalPrice);

