const accountNumber = 41160702
let accountEmail = "pratikgupta@gmail"
var accountPassword = "11122"
accountCity = "Pune"  // not a ood practice, avoid using it
let accountState;  // undefined


// accountNumber = 34567  // TypeError: Assignment to constant variable is Not allowed

accountEmail = "guptapratik@com"
accountPassword = "323123"
accountCity = "Knp"

// console.table to print data in tabular form
console.table([accountNumber, accountEmail, accountPassword, accountCity, accountState])

/*

Prefer not to use var 
because of issue in block scope ({ }) and functional scope

*/