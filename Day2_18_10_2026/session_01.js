// Use of map, filter, reduce

/*
Requirements:
1. Sirf IT department ke employees nikalo.
2. Un employees ke names ka array banao.
3. Unki total salary calculate karo.
4. Salary ₹60,000 se zyada wale employees nikalo.

*/

const employees = [
  { name: "Amit", salary: 50000, department: "IT" },
  { name: "Neha", salary: 70000, department: "HR" },
  { name: "Raj", salary: 80000, department: "IT" },
  { name: "Priya", salary: 60000, department: "IT" }
];

const itEmployees = employees.filter((emp) => emp.department === "IT")
console.log(itEmployees);

const names = itEmployees.map((emp) => emp.name)
console.log(names);

const totalSalary = itEmployees.reduce((acc, current) => current.salary + acc, 0)
console.log(totalSalary);

const employeesGreaterThanSixty = employees.filter((emp) => emp.salary > 60000)
console.log(employeesGreaterThanSixty);


/*
Level 2:

IT department ki total salary

Isi employees array par bina alag intermediate arrays banaye, ek hi expression mein:
1. Sirf IT employees select karo.
2. Unki salaries ko add karo.
3. Final result 190000 aana chahiye.
*/

const salary = employees.filter((emp) => emp.department === "IT").reduce((acc, current) => current.salary + acc, 0)
console.log(salary);


///////////////////////////////////////////////
// find, some, every, filter

const numbers = [10, 20, 30, 40];

console.log(numbers.find(n => n > 25));  // 30
console.log(numbers.filter(n => n > 25)); // [30, 40]
console.log(numbers.some(n => n > 35)); // true
console.log(numbers.every(n => n > 5)); // true
