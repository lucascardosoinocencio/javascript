let buttonLogin = document.getElementById("loginBtn");
buttonLogin.addEventListener("click", login);
function login() {
  let emailInput = document.getElementById("email");
  let passwordInput = document.getElementById("password");
  let emailValue = emailInput.value;
  let passwordValue = passwordInput.value;
  if (emailValue === "") {
    loginResult.innerText = "Please enter your email";
    loginResult.className = "message error";
  } else if (passwordValue.length < 6) {
    loginResult.innerText = "Password too short";
    loginResult.className = "message error";
  } else {
    loginResult.innerText = "Login successful";
    loginResult.className = "message success";
  }
}
