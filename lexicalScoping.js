var designation = "Software Developer"

debugger;

function outerFunction(name, age) {

    var data = 10;

    function innerFunction() {

        var userinfo = 30;
        console.log(data);
        console.log(name);
        console.log(age);
        console.log(designation);

        console.log(userinfo)

        function innerinnerFunction() {

            var randomVar = "djfgsldjf"
            console.log(designation)
            console.log(randomVar)
            function innerinnerinnerFunction() {
                console.log(randomVar)
            }

            innerinnerinnerFunction()
        }

        innerinnerFunction()
    }

    innerFunction();
}

outerFunction()