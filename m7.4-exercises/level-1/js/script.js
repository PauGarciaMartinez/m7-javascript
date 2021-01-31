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