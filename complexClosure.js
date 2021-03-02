var getCalculator = (function calculator() {

    var data = "dskjfgdjkfs";
    var total = 0;

    function getTotal() {
        return total;
    }

    function getData() {
        return data;
    }

    function add(val) {
        console.log(data);
        total = total + val;
        console.log(total)
    }

    function substract(val) {
        total = total - val;
        console.log(total)
    }

    function multiply(val) {
        total = total * val;
        console.log(total)
    }

    function divide(val) {
        total = total / val;
        console.log(total)
    }

    return {
        add: add,
        substract: substract,
        multiply: multiply,
        divide: divide,
        getTotal: getTotal,
        getData: getData
    }
})();

getCalculator.add(10);
getCalculator.substract(5); 
