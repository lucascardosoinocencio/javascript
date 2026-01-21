// ===== SPA NAVIGATION =====
function animate(screenId) {
  const screen = document.getElementById(screenId);
  screen.classList.remove("screen");
  void screen.offsetWidth; // força reflow
  screen.classList.add("screen");
}

function showHome() {
  document.getElementById("home").classList.remove("hidden");
  document.getElementById("login").classList.add("hidden");
  document.getElementById("register").classList.add("hidden");

  animate("home");
}

function showLogin() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
  document.getElementById("register").classList.add("hidden");

  animate("login");
}

function showRegister() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("login").classList.add("hidden");
  document.getElementById("register").classList.remove("hidden");

  animate("register");
}


// ===== LOGIN =====
let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", login);

function login() {
  let emailValue = document.getElementById("email").value.trim();
  let passwordValue = document.getElementById("password").value;
  let loginResult = document.getElementById("loginResult");

  if (emailValue === "") {
    loginResult.innerText = "Please enter your email";
    loginResult.className = "message error";
  } else if (!emailValue.includes("@") || !emailValue.includes(".")) {
    loginResult.innerText = "Invalid email format";
    loginResult.className = "message error";
  } else if (passwordValue.length < 6) {
    loginResult.innerText = "Password too short";
    loginResult.className = "message error";
  } else {
    loginResult.innerText = "Login successful";
    loginResult.className = "message success";
  }
}

// ===== REGISTER =====
let registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", register);

function register() {
  let nameValue = document.getElementById("name").value.trim();
  let ageValue = Number(document.getElementById("age").value);
  let registerResult = document.getElementById("registerResult");

  if (nameValue === "") {
    registerResult.innerText = "Please enter your name";
    registerResult.className = "message error";
  } else if (ageValue <= 0) {
    registerResult.innerText = "Please enter your age";
    registerResult.className = "message error";
  } else {
    registerResult.innerText = "Registration successful";
    registerResult.className = "message success";
  }
}
