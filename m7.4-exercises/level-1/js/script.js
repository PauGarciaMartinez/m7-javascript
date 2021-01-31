// DOM

const stars = document.querySelectorAll(".fa-star");

// TRIGGER

stars.forEach((target) => {
    target.addEventListener("click", (e) => {
        setInactive();
        setActive(target);
    })
})

// FUNCTIONS

function setInactive() {
    stars.forEach(target => 
        target.classList.remove("active"));
}

function setActive(target) {
    target.classList.add("active");
}





// 2. When I CLICK a star, change the color and all of the previous.

// 3. When I CLICK anywhere else, the stars change to its original state. 
