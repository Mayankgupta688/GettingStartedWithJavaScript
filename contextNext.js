var name = "Aniket";
var age = 200;

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

var functionReference = data.getData;

// Here the value of this would be "window"
functionReference();

// Here the value of this would be "data"
data.getData()