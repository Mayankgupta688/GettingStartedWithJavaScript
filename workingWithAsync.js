async function returnSimpleData() {
    return "Mayank Gupta";
}

var data = returnSimpleData();
data.then((resolvedValue) => {
    console.log(resolvedValue)
})

console.log("Hello...")