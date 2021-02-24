function workingWithFunctionAndConditions(count, age) {
    if(count >= 10 && age > 30) {
        console.log("Greater Than Expected both for age and count....")
    } else if(count >=10 && age < 30) {
        console.log("Count is Expected but not Age");
    } else if (count < 10 || age < 10) {
        console.log("Never Expected.....")
    } else {
        console.log("Exceptional...")
    }
}

workingWithFunctionAndConditions(10, 30)