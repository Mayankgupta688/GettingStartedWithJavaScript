var name = "Aniket";
var age = 200;

var randomObject = {
    name: "Meha",
    age: 40
}
var randomObjectOther = {
    name: "Anshul",
    age: 40
}

var data = (function() {
    var name = "Mayank";
    var age = 20;

    function getData() {
        console.log(this.name)
        console.log(this.age)
    }

    return {
        getData: getData,
        name: name,
        age: age
    }
})()

var firstFunction = data.getData.bind(randomObject);
var secondFunction = data.getData.bind(randomObjectOther);

firstFunction()
secondFunction()