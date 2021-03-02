var name = "Anshul";

function getData() {
    var name = "Meha";

    function getDetails() {
        var name = "Ankit";
        console.log(this.name);
    }

    getDetails()
}

getData();