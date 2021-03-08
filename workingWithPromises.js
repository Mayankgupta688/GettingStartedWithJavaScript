var data = false;
var isFinished = false;

var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise rejected for no Reason...");
    }, 10000);
});

myPromise.then((data) => {
    console.log(data);
    return "Random Data";
}, (rejectionReason) => {
    console.log(rejectionReason)
}).then((data) => {
    console.log("My Resolution: " + data);
}, (rejectionReason) => {
    console.log("My Rejection: " + rejectionReason)
});

myPromise.then((data) => {
    console.log(data);
    return "Random Data";
}, (rejectionReason) => {
    console.log(rejectionReason)
})

myPromise.then((data) => {
    console.log("My Resolution: " + data);
}, (rejectionReason) => {
    console.log("My Rejection: " + rejectionReason)
});

console.log("Hello...")