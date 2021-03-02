var name = "Anshul";

var employeeDetails = (() => {

    var name = "Mayank";
    var age = 10;

    function getDetailsForEmployee(){
        debugger;
        console.log(this.name);
    }

    return {
        getDetailsForEmployee: getDetailsForEmployee,
        name: name
    }
})()

var otherDetails = {
    name: "Meha"
}

//employeeDetails.getDetailsForEmployee()

// vs 

var datafunction = employeeDetails.getDetailsForEmployee;
datafunction.call(otherDetails);
