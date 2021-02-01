// DOM

const search = document.getElementById("inputSearch");
const email1 = document.getElementById("inputEmail");
const password1 = document.getElementById("inputPassword");
const password2 = document.getElementById("inputPassword2");
const province = document.getElementById("inputSelect");
const email2 = document.getElementById("inputEmail2");
const password3 = document.getElementById("inputPassword3");

const searchForm = document.getElementById("search-form");
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");

const modal = document.querySelector(".modal");

const emailRegex = /([a-zñ\d\.-]+)@([a-zñ\d\.-]+)\.([a-z]{2,8})/gi;
const passwordRegex = /^(?=.*[ÑA-Z])(?=.*[0-9])(?=.{8,})/;

// SUBMIT FUNCTIONS

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputsSearch();
  validateSearch();
})

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputsRegister();
  validateRegister();
})

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputsLogin();
  validateLogin();
})

// CHECK FUNCTIONS

// Search
function checkInputsSearch() {
  const searchValue = search.value.trim();

  if (searchValue.length < 3) {
    setErrorFor(search, "Search must contain at least three characters");
  } else {
    setSuccessFor(search);
  }
}

// Register
function checkInputsRegister() {
  const email1Value = email1.value.trim();
  const password1Value = password1.value.trim();
  const password2Value = password2.value.trim();
  const provinceValue = province.value;

  if (email1Value.match(emailRegex)) {
    setSuccessFor(email1);
  } else {
    setErrorFor(email1, "Email is not valid");
  }

  if (password1Value === "") {
    setErrorFor(password1, "Password can't be blank");
  } else if (password1Value.match(passwordRegex)) {
    setSuccessFor(password1);
  } else {
    setErrorFor(password1, "Password must contain at least eigth characters, including one uppercase and one digit");
  }

  if (password2Value !== password1Value) {
    setErrorFor(password2, "Password does not match");
  } else if (password2Value === "") {
    setErrorFor(password2, "Password can't be blank");
  } else {
    setSuccessFor(password2);
  }

  if (provinceValue === "") {
    setErrorFor(province, "Please select an option");
  } else {
    setSuccessFor(province);
  }
}

// Login
function checkInputsLogin() {
  const email2Value = email2.value.trim();
  const password3Value = password3.value.trim();

  if (email2Value.match(emailRegex)) {
    setSuccessFor(email2);
  } else {
    setErrorFor(email2, "Email is not valid");
  }

  if (password3Value === "") {
    setErrorFor(password3, "Password can't be blank");
  } else if (password3Value.length < 8) {
    setErrorFor(password3, "Incorrect password");
  } else {
    setSuccessFor(password3);
  }
}

// SUCESS OR ERROR FUNCTIONS 

function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");
  small.innerText = message;

  formGroup.classList.add("error");
}

function setSuccessFor(input) {
  const formGroup = input.parentElement;
  formGroup.classList.remove("error");
  formGroup.classList.add("sucess");
}

// MODAL FUNCTIONS
function validateSearch() {
  const searchVal = document.getElementById("search-form-val");
  if (searchVal.classList.contains("sucess")) {
    $(".modal").modal("show");
  }
}

function validateRegister() {
  const emailVal = document.getElementById("email-val");
  const password1Val = document.getElementById("password1-val");
  const password2Val = document.getElementById("password2-val");
  const provinceVal = document.getElementById("select-val");

  if (emailVal.classList.contains("sucess") && password1Val.classList.contains("sucess") && password2Val.classList.contains("sucess") && provinceVal.classList.contains("sucess")) {
    $(".modal").modal("show");
  }
}

function validateLogin() {
  const email2Val = document.getElementById("email2-val");
  const password3Val = document.getElementById("password3-val");

  if (email2Val.classList.contains("sucess") && password3Val.classList.contains("sucess")) {
    $(".modal").modal("show");
  }
}