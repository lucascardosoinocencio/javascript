let button = document.getElementById("btn");
let resultDiv = document.getElementById("result");

button.addEventListener("click", validate);

function validate() {
  let nameInput = document.getElementById("name");
  let ageInput = document.getElementById("age");
  let ageValue = Number(ageInput.value);
  if (nameInput.value === "") {
    resultDiv.innerText = "Please enter your name";
    resultDiv.className = "error";
  } else if (ageValue <= 0) {
    resultDiv.innerText = "Please enter your age";
    resultDiv.className = "error";
  } else {
    resultDiv.innerText = "Registration successful";
    resultDiv.className = "success";
  }
}
