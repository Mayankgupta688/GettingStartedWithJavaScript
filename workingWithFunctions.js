function operateData(a, b, c, d, e) {
    debugger;
    console.log(a + b + c - d * e)
}

function getSubString(inputString, startIndex, endIndex) {
    startIndex = startIndex + 1;
    endIndex = endIndex - 1;
    console.log(inputString.substring(startIndex, endIndex))
}

var getSubStringArrow = (inputString, startIndex, endIndex) => {
    startIndex = startIndex + 1;
    endIndex = endIndex - 1;
    console.log(inputString.substring(startIndex, endIndex));
}

var incrementByOne = (i) => { console.log(i + 1);}

getSubStringArrow("Mayank Gupta", -1, 7);
getSubStringArrow("Mayank Gupta", 6, 13);

incrementByOne(4)