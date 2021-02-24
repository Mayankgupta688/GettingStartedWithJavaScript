function incrementDataByOne(index) {

    var incrementedValue = index + 10;
    var decrementedValue = index - 10;
    var originalValue = index;
    var multipliedValue = index * 10;
    return [incrementedValue, decrementedValue, originalValue, multipliedValue]
}

function incrementDataByOneDemo(index) {
    return [index, index + 10, index - 10, index * 10]
}

var incrementDataByOneDemoArrow = (index) => [index, index + 10, index - 10, index * 10];

var data = incrementDataByOneDemoArrow(10)


function getSubString(inputString, startIndex, endIndex) {
    startIndex = startIndex + 1;
    endIndex = endIndex - 1;
    console.log(inputString.substring(startIndex, endIndex))
}

var getSubStringArrow = (stringInput, start, endIndex) => stringInput.substring(start + 1, endIndex -1)

var getSubStringArrowOther = (stringInput, start, endIndex) => {
    return stringInput.substring(start + 1, endIndex -1)
}

function consoleDataFunctionTwo() {
    console.log("Hello All...")
}

var consoleDataFunction = () => console.log("hello All...")

var consoleDataFunctionOne = () => {
    console.log("hello All...")
}

consoleDataFunction()


debugger;