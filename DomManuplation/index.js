function updateName() {
  var domReference = document.getElementById("trainer_name");
  domReference.innerText = "Anshul Gupta";
  domReference.style.color = "red";
}

function addCourse() {
  document.getElementsByTagName("div")[0].innerHTML = '<h1>JavaScript</h1>';
}

function replaceHeaderType() {
  document.getElementsByTagName("div")[0].innerHTML = '<h3>JavaScript</h3>';
}

function addTechnology() {
  var inputValue = document.getElementById("technology").value;
  document.getElementsByTagName("div")[0].innerHTML += `<h2>${inputValue}</h2>`;
  document.getElementById("technology").value = "";
}