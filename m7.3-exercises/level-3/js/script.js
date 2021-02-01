// FORMS & SUBMIT FUNCTIONS

const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  resetContent();
  checkInputsSearch();
  validateSearch();
})

const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  resetContent();
  checkInputsRegister();
  validateRegister();
})

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  resetContent();
  checkInputsLogin();
  validateLogin();
})

// CHECK FUNCTIONS

// Search
function checkInputsSearch() {
  const search = document.getElementById("inputSearch");

  const searchValue = search.value.trim();

  if (searchValue.length < 3) {
    setErrorFor(search, "Search must contain at least three characters");
  } else {
    setSuccessFor(search);
    createContent("You've searched:", searchValue);
  }
}

// Register
function checkInputsRegister() {
  const email1 = document.getElementById("inputEmail");
  const password1 = document.getElementById("inputPassword");
  const password2 = document.getElementById("inputPassword2");
  const province = document.getElementById("inputSelect");

  const email1Value = email1.value.trim();
  const password1Value = password1.value.trim();
  const password2Value = password2.value.trim();
  const provinceValue = province.value;

  const emailRegex = /([a-zñ\d\.-]+)@([a-zñ\d\.-]+)\.([a-z]{2,8})/gi;
  const passwordRegex = /^(?=.*[ÑA-Z])(?=.*[0-9])(?=.{8,})/;

  if (email1Value.match(emailRegex)) {
    setSuccessFor(email1);
    createContent("Email:", email1Value);
  } else {
    setErrorFor(email1, "Email is not valid");
  }

  if (password1Value === "") {
    setErrorFor(password1, "Password can't be blank");
  } else if (password1Value.match(passwordRegex)) {
    setSuccessFor(password1);
    createContent("Password:", password1Value);
  } else {
    setErrorFor(password1, "Password must contain at least eight characters, including one uppercase and one digit");
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
    createContent("Province:", provinceValue);
  }
}

// Login
function checkInputsLogin() {
  const email2 = document.getElementById("inputEmail2");
  const password3 = document.getElementById("inputPassword3");

  const email2Value = email2.value.trim();
  const password3Value = password3.value.trim();

  const emailRegex = /([a-zñ\d\.-]+)@([a-zñ\d\.-]+)\.([a-z]{2,8})/gi;

  if (email2Value.match(emailRegex)) {
    setSuccessFor(email2);
    createContent("Email:", email2Value);
  } else {
    setErrorFor(email2, "Email is not valid");
  }

  if (password3Value === "") {
    setErrorFor(password3, "Password can't be blank");
  } else if (password3Value.length < 8) {
    setErrorFor(password3, "Incorrect password");
  } else {
    setSuccessFor(password3);
    createContent("Password:", password3Value);
  }
}

// SUCCESS OR ERROR FUNCTIONS 

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

// Show modal if Search is valid
function validateSearch() {
  const searchVal = document.getElementById("search-form-val");
  if (searchVal.classList.contains("sucess")) {
    $(".modal").modal("show");
    setFullContent();
    searchForm.reset();
    resetForm(searchVal);
  }
}

// Show modal if Register is valid
function validateRegister() {
  const emailVal = document.getElementById("email-val");
  const password1Val = document.getElementById("password1-val");
  const password2Val = document.getElementById("password2-val");
  const provinceVal = document.getElementById("select-val");

  if (emailVal.classList.contains("sucess") && password1Val.classList.contains("sucess") && password2Val.classList.contains("sucess") && provinceVal.classList.contains("sucess")) {
    $(".modal").modal("show");
    setFullContent();
    registerForm.reset();
    resetForm(emailVal, password1Val, password2Val, provinceVal);
  }
}

// Show modal if Login is valid
function validateLogin() {
  const email2Val = document.getElementById("email2-val");
  const password3Val = document.getElementById("password3-val");

  if (email2Val.classList.contains("sucess") && password3Val.classList.contains("sucess")) {
    $(".modal").modal("show");
    setFullContent();
    loginForm.reset();
    resetForm(email2Val, password3Val);
  }
}

// MODAL CONTENT FUNCTION
function createContent(line, value) {
  const modalContent = document.querySelector(".modal-body");
  const inputText = document.createElement("p");
  inputText.textContent = `${line} ${value}`;
  modalContent.appendChild(inputText);
}

function resetContent() {
  const modalContent = document.querySelector(".modal-body");
  if (modalContent.classList.contains("full")) {
    while (modalContent.hasChildNodes()) {  
      modalContent.removeChild(modalContent.firstChild);
    }
    modalContent.classList.remove("full");
  }
}

function setFullContent() {
  const modalContent = document.querySelector(".modal-body");
  modalContent.classList.add("full");
}

// FORM RESET FUNCTION
function resetForm(input1, input2, input3, input4) {
  const inputs = [input1, input2, input3, input4];
  inputs.forEach(item => item.classList.remove("sucess"));
}