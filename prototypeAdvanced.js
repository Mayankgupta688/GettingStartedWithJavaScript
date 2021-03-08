function Employee(name, age, designation) {
    this.name = name;
    this.age = age;
    this.designation = designation;
    var salary = 1000;

    this.getSalary = function() {
        console.log(salary)
    }
}

Employee.prototype.getDetails = function() {
    console.log(this.name);
}

Employee.prototype.getSalaryDetails = function() {
    console.log(this.salary);
}

var employeeOne = new Employee("Mayank", 20, "Developer");
employeeOne.getSalary();
employeeOne.getSalaryDetails();

var employeeTwo = new Employee("TechnoFunnel", 20, "Programmer");

Employee.prototype.getNameDetails = function() {
    console.log(this.name + " " + this.age)
}

var employeeThree = new Employee("Anshul", 20, "Programmer");

employeeOne.getDetails();

// Will this be accessible ?
employeeOne.getNameDetails();
employeeThree.getNameDetails();