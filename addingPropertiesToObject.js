
var employee = {
    name: "Mayank",
    age: 10
}

var emptyObject = {};
var emptyData = null;

console.log(employee.age);

employee.salary = 10000;
employee["bonus"] = 1000;
employee["bonus"] = 12000;

delete employee.name;
delete employee.age;
delete employee.salary;
delete employee.bonus;

console.log(employee)