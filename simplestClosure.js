var a = 10;


// Inner Function has capability to access variable from outer function scope 
// Capability of function to access environment in which it is created....
function getData() {
    console.log(a)
}

getData();