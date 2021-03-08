debugger;

var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Application Data Retrieved....")
    }, 5000)
})