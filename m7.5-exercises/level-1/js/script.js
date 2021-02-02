// CLASS

class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
    
}

// SUBMIT

const productForm = document.querySelector(".product-form");
productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputsSearch();
  validateForm();
})

// CHECK INPUTS

function checkInputsSearch() {
    const name = document.getElementById("name");
    const price = document.getElementById("price");
    const year = document.getElementById("year");
  
    const nameValue = name.value.trim();
    const priceValue = price.value.trim();
    const yearValue = year.value.trim();
  
    if (nameValue.length < 3) {
      setErrorFor(name, "Error");
    } else {
      setSuccessFor(name);
      // function to add id to the object
    }

    if (priceValue.length < 3) {
      setErrorFor(price, "Error");
    } else {
      setSuccessFor(price);
      // function to add id to the object
    }

    if (yearValue.length < 3) {
      setErrorFor(year, "Error");
    } else {
      setSuccessFor(year);
      // function to add id to the object
    }
  }

// SUCCESS OR ERROR

function setErrorFor(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector("small");
    small.innerText = message;
  
    formGroup.classList.add("error");
  }
  
function setSuccessFor(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove("error");
    formGroup.classList.add("success");
}

// VALIDATE FORM
function validateForm() {
    const nameVal = document.getElementById("name-container");
    const priceVal = document.getElementById("price-container");
    const yearVal = document.getElementById("year-container");
  
    if (nameVal.classList.contains("success") && priceVal.classList.contains("success") && yearVal.classList.contains("success")) {
      productForm.reset();
      resetForm(nameVal, priceVal, yearVal);
    }
  }

// FORM RESET FUNCTION
function resetForm(input1, input2, input3) {
    const inputs = [input1, input2, input3];
    inputs.forEach(item => item.classList.remove("success"));
}