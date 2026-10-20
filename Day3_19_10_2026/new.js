async function test(){
    return 5;
}

console.log(test); // [AsyncFunction: test]
console.log(test()); // Promise { 5 }

// const data = await test();
// console.log(data);

test().then(value => console.log(value))
