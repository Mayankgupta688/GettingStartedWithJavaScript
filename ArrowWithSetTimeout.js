var data = (function() {
    var name = "Mayank";
    var age = 20;

    function getData() {

        console.log(this.name);
        console.log(this.age);
        var _this = this;
        setTimeout(() => {

            // Preserves the context of execution...
            
            console.log(this.name)
            console.log(this.age)
        }, 5000)

        setTimeout(function() {

            // Without Arrow Function, maintaining Context...

            console.log(_this.name)
            console.log(_this.age)
        }, 5000)
        
    }

    return {
        getData: getData,
        name: name,
        age: age
    }
})()

data.getData()
