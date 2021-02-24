function executeSwitchCase(name) {
    if(name == "Mayank") {
        console.log("Consistent User...")
    } else if(name == "Anshul") {
        console.log("Not Frequent Visitor")
    } else {
        console.log("UnKnown....")
    }
}

function executeSwitchCaseImplementation(name) {
    switch(name) {
        case "Mayank":
            console.log("Consistent User...");
            break;
        case "Anshul":
            console.log("Not Frequent Visitor");
            break;
        default: 
            console.log("UnKnown....");
    }
}

function executeForNumber(number) {
    switch(number) {
        case 8:
            console.log("Number is Greater Than 1");
        case 9:
            console.log("Number is Greater Than 2");
        case 10:
            console.log("Number is Greater Than 3");
        case 11:
            console.log("Number is Greater Than 4");
    }
}

executeForNumber(8)

executeSwitchCaseImplementation("Mayank")

function executeForNumberConditional(number) {
    switch(number >= 8) {
        case true:
            console.log("Number is Greater Than Equal to 8");
            break;
        case false:
            console.log("Number is Smaller Than 8");
            break;
    }
}

executeForNumberConditional("100")