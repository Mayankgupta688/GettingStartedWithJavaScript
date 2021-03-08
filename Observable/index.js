

var randomNumberGenerator = Rx.Observable.create((observer) => {
    setInterval(() => {
        observer.next(Math.floor(Math.random() * 100));
    }, 2000)
})

var cuurentTimeGenerator = Rx.Observable.create((observer) => {
    setInterval(() => {
        var time = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
        observer.next(time);
    }, 1000)
})

cuurentTimeGenerator.subscribe((data) => {
    document.getElementById("timer").innerText = `Current Time is: ${data}`;
})

randomNumberGenerator.subscribe((data) => {
    document.getElementById("root").innerText = `The Random Number is: ${data}`;
})