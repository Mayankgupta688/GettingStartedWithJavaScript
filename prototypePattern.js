function employee(name, age, designation) {
    this.name = name;
    this.designation = designation;
    this.age = age;
}

employee.prototype.getName = function() {
    console.log(this.name)
}

employee.prototype.userName = "Mayank"

debugger;
var employeeOne = new employee("Mayank", 10, "Developer");
var employeeTwo = new employee("Anshul", 10, "Manager");

employeeOne.getName();
employeeTwo.getName();

employeeOne.toString()