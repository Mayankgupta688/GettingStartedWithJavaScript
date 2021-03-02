var commonObjectWithFunction = (() => {
    function firstCommonFunction() {
        console.log(this.name)
    }

    function secondCommonFunction() {
        console.log(this.name)
    }

    return {
        firstCommonFunction: firstCommonFunction,
        secondCommonFunction: secondCommonFunction
    }
})()

var dataOne = {
    name: "Mayank",
}

var dataTwo = {
    name: "Meha"
}

commonObjectWithFunction.firstCommonFunction.call(dataOne);
commonObjectWithFunction.firstCommonFunction.call(dataTwo);