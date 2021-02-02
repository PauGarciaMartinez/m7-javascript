// CLASS

class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
    addProduct() {
        const productList = document.querySelector(".list-container");

        const productContainer = document.createElement("article");
        const product = document.createElement("p");
        const deleteButton = document.createElement("button");

        productContainer.classList.add("product-container");
        product.classList.add("product");
        deleteButton.classList.add("delete-btn");

        product.textContent = `Name: ${this.name} Price: ${this.price} Year: ${this.year}`;
        deleteButton.textContent = "Delete";

        productList.appendChild(productContainer);
        productContainer.appendChild(product);
        productContainer.appendChild(deleteButton);
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

    const nameRegex = /[ña-z]{2,25}/gi;
    const priceRegex = /[0-9]/gi;
    const yearRegex = /[0-9]{4}/gi;
  
    if (!nameValue.match(nameRegex)) {
      setErrorFor(name, "Name is not valid");
    } else {
      setSuccessFor(name);
    }

    if (!priceValue.match(priceRegex)) {
      setErrorFor(price, "Price is not valid");
    } else {
      setSuccessFor(price);
    }

    if (!yearValue.match(yearRegex)) {
      setErrorFor(year, "Year is not valid");
    } else {
      setSuccessFor(year);
    }

    validateForm(nameValue, priceValue, yearValue);
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
function validateForm(nameValue, priceValue, yearValue) {
    const nameVal = document.getElementById("name-container");
    const priceVal = document.getElementById("price-container");
    const yearVal = document.getElementById("year-container");
  
    if (nameVal.classList.contains("success") && priceVal.classList.contains("success") && yearVal.classList.contains("success")) {
      const product = new Product(nameValue, priceValue, yearValue);
      product.addProduct();
      productForm.reset();
      resetForm(nameVal, priceVal, yearVal);
    }
  }

// FORM RESET FUNCTION
function resetForm(input1, input2, input3) {
    const inputs = [input1, input2, input3];
    inputs.forEach(item => item.classList.remove("success"));
}