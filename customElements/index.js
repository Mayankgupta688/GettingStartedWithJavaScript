class MayankElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<h1>This is Custom Component by Mayank</h1>";
    this.style.color = "red";
    this.style.position = "relative";
    // this.style.top = "100px";
    // this.style.left = "100px";
  }
}

class EmployeeList extends HTMLElement {
  connectedCallback() {
    fetch("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees")
      .then((res) => {
        res.json().then((data) => {
          for(let emp of data) {
            this.innerHTML += `<h1>User Name is: ${emp.name}</h1><hr/>`
          }
        });
      })
  }
}

customElements.define("mayank-element", MayankElement)
customElements.define("employee-list", EmployeeList)