
debugger;
function* infiniteRandomNumberGenerator() {
    debugger;
    while(true) {
        debugger;
        yield Math.floor((Math.random() * 100))
    }
}

var randomIterator = infiniteRandomNumberGenerator()

debugger
console.log(randomIterator.next())
debugger
console.log(randomIterator.next())
debugger
console.log(randomIterator.next())
debugger
console.log(randomIterator.next())