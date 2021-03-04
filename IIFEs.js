// Immediately Invoked Function Expression...

// What is function Expression

// How is Function Expression Immediately Invoked...

debugger;

var data = (function() {
    var name = "Mayank";
    var age = 20;
    console.log("Hello World...")

    function getName() {
        return name;
    }

    function setName(dummyName) {
        name = dummyName;
    }

    function getAge() {
        return age;
    }

    return {
        getName: getName,
        getAge: getAge,
        setName: setName
    }
})();

data.setName("Anshul")
console.log(data.getName())


debugger;