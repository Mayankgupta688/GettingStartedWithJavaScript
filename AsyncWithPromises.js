function returnPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Application Data Retrieved....")
        }, 5000)
    })
}

function returnOtherPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Application Data Retrieved two....")
        }, 10000)
    })
}

async function getDataAndDisplayWithAwait() {
    var getData = await returnPromise();
    console.log(getData)
    getData = await returnOtherPromise();
    console.log(getData)
    console.log("Hello World...")
}

function getDataAndDisplay() {
    returnPromise().then((data) => {
        console.log(data)
    });
    console.log("Hello World...")
}

getDataAndDisplayWithAwait();
