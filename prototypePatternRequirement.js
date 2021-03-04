function employees(name, age, designation) {
    // 2 Bytes...
    var name = name;

    // 2 Bytes...
    var designation = designation;

    // 2 Bytes...
    var age = age;

    // 5 Bytes...
    function getName() {
        console.log(name)
    }

    // 5 Bytes...
    function getData() {
        console.log(name);
        console.log(age);
        console.log(designation);
    }
    
    return {
        name: name,
        age: age, 
        designation: designation,
        getData: getData,
        getName: getName
    }
}


// 1000 Thousand = 16 * 1000 = 16K
var employeeOne = employees("Mayank", 20, "Devloper");
var employeeTwo = employees("Anshul", 20, "Manager");
var employeeThree = employees("Ankit", 20, "Vice President");

employeeOne.getData()
employeeTwo.getData()
employeeThree.getData()


debugger;


function employees(name, age, designation) {
    // 2 Bytes...
    var name = name;

    // 2 Bytes...
    var designation = designation;

    // 2 Bytes...
    var age = age;
    
    return {
        name: name,
        age: age, 
        designation: designation,
        getData: getData,
        getName: getName
    }
}

// 5 Bytes...
function getName() {
    console.log(this.name)
}

// 5 Bytes...
function getData() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.designation);
}


// 1000 Thousand = 16 * 1000 = 16K
var employeeOne = employees("Mayank", 20, "Devloper");
var employeeTwo = employees("Anshul", 20, "Manager");
var employeeThree = employees("Ankit", 20, "Vice President");

getData.call(employeeOne)
getData.call(employeeTwo)
getData.call(employeeThree)


debugger;