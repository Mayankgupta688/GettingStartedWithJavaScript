var data = {
    otherDetails: {
        name: "Mayank",
        addressDetails: "India",
        otherAddressDetails: {
            city: "Delhi",
            age: 40
        }, professionalDetails: {
            designation: "Developer",
            otherImportantDetails: {
                salary: 30
            }
        }
    }
}

var details = {
    name: "",
    age: "",
    designation: "",
    salary: "",
    city: "",
    country: ""
}

function getEmployeeData(inputData) {
    var details = {
        name: inputData.otherDetails.name,
        age: inputData.otherDetails.otherAddressDetails.age,
        designation: inputData.otherDetails.professionalDetails.designation,
        salary: inputData.otherDetails.professionalDetails.otherImportantDetails.salary,
        city: inputData.otherDetails.otherAddressDetails.city,
        country: inputData.otherDetails.addressDetails
    };

    return details;
}

function getDetailsClosure() {
    var details = null;

    function getData(inputData) {
        if(details == null) {
            details = {
                name: inputData.otherDetails.name,
                age: inputData.otherDetails.otherAddressDetails.age,
                designation: inputData.otherDetails.professionalDetails.designation,
                salary: inputData.otherDetails.professionalDetails.otherImportantDetails.salary,
                city: inputData.otherDetails.otherAddressDetails.city,
                country: inputData.otherDetails.addressDetails
            };
        } 

        return details;
    }

    return {
        getData: getData
    }
}

var dataExtractor = getDetailsClosure();

console.time("MayankFirst");

for(var i = 0; i< 1000000000 ; i++) {
    dataExtractor.getData(data);
}


console.timeEnd("MayankFirst");

console.time("MayankSecond");

for(var i = 0; i< 1000000000 ; i++) {
    getEmployeeData(data);
}

console.timeEnd("MayankSecond");
