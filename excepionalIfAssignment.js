function compareData(index) {
    if(((index = 100) && (index < 90)) || (index = 200)) {
        console.log(index)
    } else {
        console.log(index)
    }

    if( ((index = 100) && (index > 90)) || (index = 200)) {
        console.log(index)
    } else {
        console.log(index)
    }
}

function compareDataExceptional(index) {
    if(index = 100 && index < 50) {
        console.log(index)
    } else {
        console.log(index)
    }
}


compareDataExceptional(40);