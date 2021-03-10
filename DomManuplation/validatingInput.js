function verifyInputData() {
  alert("Validating Input Data...");
  var userName = document.getElementById("user_name").value;
  var userPassword = document.getElementById("user_password").value;

  if(userName.length === 0 || userPassword.length === 0) {
    document.getElementById("invalid_input").style.display = "block";
  } else {
    window.location.href = "http://www.google.com";
  }
}

function callValidation(event) {
  if(event.target.value.indexOf("#") >= 0) {
    console.log(event.target.value.replaceAll("#", ""));
    event.target.value = event.target.value.replaceAll("#", "")
  }
}

function showButton() {
  var domElement = document.getElementsByClassName("input_element");
  if(domElement[0].value.length >= 6 && domElement[1].value.length >= 6) {
    document.getElementById("submit_button").disabled = false;
  }
  debugger;
}

document.getElementById("submit_button").disabled = true;