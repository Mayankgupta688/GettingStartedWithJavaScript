
var firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Function One...")
    }, 1500)
})

var secondPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Function Two...")
    }, 1000)
})

var thirdPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Function Three...")
    }, 500)
})

// firstPromise.then((data) => {
//     secondPromise.then((data) => {
//         thirdPromise.then((data) => {
//             debugger;
//         })
//     })
// })

Promise.any([firstPromise, secondPromise, thirdPromise]).then((data) => {
    console.log(data)
    debugger;
}).catch(reject => {
    debugger;
})

// Promise.all = All Promise Resolved
// Promice.any = Any of the promise from the list is resolved
// Promise.race = Any of the promise from the list is resolved or rejected...