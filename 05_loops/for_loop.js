// for loop

for(let index=0; index <=10; index++){
    const element = index;  // In this case, element is a new constant for each iteration, and it doesn't get reassigned, so no error occurs.
    console.log(element);
}

// console.log(element); // ReferenceError: element is not defined


let myArray = ["flash", "superman", "batman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


for (let i = 1; i <= 5; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 5; j++) {
        console.log(`Inner loop value: ${j} and inner loop ${i}`);
    } 
}


// break

for (let i = 0; i <= 10; i++) {
    if(i == 5){
        console.log('Detected 5');
        break
    }
    console.log(`Value of i is ${i}`);
}


// continue   (ignore one mistake/ skip one time)

for (let i = 0; i <= 10; i++) {
    if(i == 5){
        console.log('Detected 5');
        continue
    }
    console.log(`Value of i is ${i}`);
}