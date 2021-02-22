var propertyToAccess = "user";

var employeeOne = {
    username: "Mayank",
    userage: 30,
    userdesignation: "Developer",
    address: {
        street: "A-8",
        otherDetails: {
            country: "India",
            city: "Delhi"
        }
    }
}

console.log(employeeOne.address.city)

// Special Scenerios for Square Bracket Notation...
console.log(employeeOne[propertyToAccess + "name"]);

console.log(employeeOne["address"]["otherDetails"]["country"])

// employeeOne["address"]["otherDetails"]["country"]: "India"
// employeeOne["address"].otherDetails["country"]: "India"
// employeeOne.address["otherDetails"].country: "India"

// All of the above fetch same result....