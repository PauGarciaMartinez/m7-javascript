// DOM

const stars = document.querySelectorAll(".fa-star");

// TRIGGER

document.addEventListener("click", (e) => {
    if (!e.target.closest(".fa-star")) {
        setInactive();
    }
})

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
