// JavaScript is Single Threaded...
// Javascript is Single Threade Execution Model...

var data = 10;
console.log(data);

setTimeout(() => {
    var delayedOutput = 30;
    console.log(delayedOutput);
}, 5000)

setTimeout(() => {
    var delayedOutput = 40;
    console.log(delayedOutput);
}, 5000)

setTimeout(() => {
    var delayedOutput = 50;
    console.log(delayedOutput);
}, 5000)

setTimeout(() => {
    var delayedOutput = 60;
    console.log(delayedOutput);
}, 5000)

var otherData = 20;
console.log(otherData)