class Employee {
    constructor(name, age, designation) {
        this.name = name;
        this.age = age;
        this.designation = designation;
    }

    getDetails() {
        console.log(this.name)
    }

    getName() {
        console.log(this.name)
    }
}

class Manager extends Employee {
    constructor(name, age, designation, teamSize) {
        super(name, age, designation)
        this.teamSize = teamSize;
    }

    getDetails() {
        console.log(this.teamSize);
        super.getDetails();
        this.getName();
    }
}

var managerOne = new Manager("Mayank", 10, "Developer", 100);
managerOne.getDetails();

debugger;