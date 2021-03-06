var companyDetails = (() => {
  var name = "TechnoFunnel";
  var age = 1;
  var specialization = "Training";
  var employees = [{
    id: 1,
    name: "Aditya",
    salary: 1000
  }, {
    id: 1,
    name: "Anshul",
    salary: 2000
  }, {
    id: 1,
    name: "Aniket",
    salary: 1000
  }, {
    id: 1,
    name: "Ankit",
    salary: 4000
  }]
  function* getSalary() {
    for(let emp of employees) {
      yield emp.salary;
    }
  }

  return {
    getSalary: getSalary
  }
})();

var salaryIterator = companyDetails.getSalary();
 
for(let data of salaryIterator) {
    console.log(data);
}