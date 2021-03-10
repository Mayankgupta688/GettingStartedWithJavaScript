
var trainer = [{
  trainerName: "Mayank",
  technology: ["React", "Angular"]
}, {
  trainerName: "Anshul",
  technology: ["Python", "Java", "Golang", "TypeScript"]
}]


function displayTechnology() {
  document.getElementById("trainer_technology").innerHTML = "";
  var trainerName = document.getElementById("choose_trainer").value;

  var trainerDetails = trainer.filter((emp) => {
    return emp.trainerName === trainerName
  })

  for(let i = 0; i< trainerDetails[0].technology.length; i++) {
    document.getElementById("trainer_technology").innerHTML += `
      <div style="padding: 10px;">
        <strong style="width: 100px; display: inline-block;">${trainerDetails[0].technology[i]}</strong>
        <input id='${trainerDetails[0].technology[i]}' type="button" value="Add to Basket" onclick="addToCart(event)" />
      </div>
    `
  }
}

function addToCart(event) {
  var selectedCourse = event.target.id;
  alert(`Course Selected is ${selectedCourse}`);
  event.target.style.display = "none";

  document.getElementById("selected_course").innerHTML += `
      <div style="padding: 10px;">
        <strong style="width: 100px; display: inline-block;">${selectedCourse}</strong>
        <input id='selected_${selectedCourse}' type="button" value="Remove From Basket" />
      </div>
    `
}