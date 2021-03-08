// Capability of function to access environment in which it is created....

// Inner Function capability to access variable from outer function scope   

function outerFunction() {

    var count = 10;
    function innerFunction() {
        console.log("Hello From Inner Function...")
        console.log(count)
    };

    innerFunction();

};

outerFunction()

innerFunction();