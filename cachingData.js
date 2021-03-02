// You can create Private Variable...

// This is Module Pattern..

var dataExtractor = (function() {
    var cacheObject = {};

    function addNumber(inputValue) {

        if(cacheObject[inputValue] == undefined) {
            cacheObject[inputValue] = (
                inputValue * 10 / 3 + 10 - 15 * 20 * Math.log(10) * Math.sqrt(2) * Math.tan(65) + 
                inputValue * 10 / 3 + 10 - 15 * 20 * Math.log(13) * Math.sqrt(2) * Math.tan(25) + 
                inputValue * 10 / 3 + 10 - 15 * 20 * Math.log(16) * Math.sqrt(2) * Math.tan(35) +
                inputValue * 10 / 3 + 10 - 15 * 20 * Math.log(5) * Math.sqrt(2) * Math.tan(36)
            )
        } 

        return cacheObject[inputValue]
    }

    return {
        addNumber: addNumber
    }
})();

function addNumber(inputValue) {

    if(cacheObject[inputValue] == undefined) {
        cacheObject[inputValue] = (
            inputValue * 10 / 3 + 10 - 15 * 20 * Math.log(10) * Math.sqrt(2) * Math.tan(65) + 
            inputValue * 10 / 3 + 10 - 15 * 20 * Math.log(13) * Math.sqrt(2) * Math.tan(25) + 
            inputValue * 10 / 3 + 10 - 15 * 20 * Math.log(16) * Math.sqrt(2) * Math.tan(35) +
            inputValue * 10 / 3 + 10 - 15 * 20 * Math.log(5) * Math.sqrt(2) * Math.tan(36)
        )
    } 

    return cacheObject[inputValue]
};

console.log(dataExtractor.addNumber(1))
console.log(dataExtractor.addNumber(12))
console.log(dataExtractor.addNumber(1))
console.log(dataExtractor.addNumber(1))
console.log(dataExtractor.addNumber(12))
console.log(dataExtractor.addNumber(1))
console.log(dataExtractor.addNumber(1))
console.log(dataExtractor.addNumber(12))
console.log(dataExtractor.addNumber(1))
console.log(dataExtractor.addNumber(1))
console.log(dataExtractor.addNumber(12))
console.log(dataExtractor.addNumber(1))
console.log(dataExtractor.addNumber(1))
console.log(dataExtractor.addNumber(12))
console.log(dataExtractor.addNumber(1))
console.log(dataExtractor.addNumber(1))
console.log(dataExtractor.addNumber(12))
console.log(dataExtractor.addNumber(1))
console.log(dataExtractor.addNumber(1))
console.log(dataExtractor.addNumber(12))
console.log(dataExtractor.addNumber(1))
console.log(dataExtractor.addNumber(1))
console.log(dataExtractor.addNumber(12))
console.log(dataExtractor.addNumber(1))
console.log(dataExtractor.addNumber(1))
console.log(dataExtractor.addNumber(12))
console.log(dataExtractor.addNumber(1))
console.log(dataExtractor.addNumber(1))
console.log(dataExtractor.addNumber(12))
console.log(dataExtractor.addNumber(1))
console.log(dataExtractor.addNumber(1))
console.log(dataExtractor.addNumber(12))
console.log(dataExtractor.addNumber(1))
