var name = "Anshul";

var employeeDetails = {
    name: "Mayank",
    age: 20
}

function getDetails() {
    var name = "Ankit";
    console.log(this.name)
}

getDetails();