var employeeList = [{
    username: "Mayank",
    userage: 20
}, 10, {
    username: "Ankit",
    userage: 20
}, {
    username: "Aniket",
    userage: 20
}];

console.log(employeeList[0].username)

// Way to detect, if it is an Array, the below code will give false
Array.isArray(employeeList[0])

// Way to detect, if it is an Array, the below code will give true
Array.isArray(employeeList)