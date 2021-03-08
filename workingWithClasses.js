class Employee {
    constructor(name, age, designation) {
        this.name = name;
        this.age = age;
        this.designation = designation;
    }
}

function Employee(name, age, designation) {
    this.name = name;
    this.age = age;
    this.designation = designation;
}

var employeeOne = new Employee("Mayank", 20, "Developer")
var employeeTwo = new Employee("Anshul", 20, "Developer")
var employeeThree = new Employee("Ankit", 20, "Developer")
debugger;