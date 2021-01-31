// DOM

const stars = document.querySelectorAll(".fa-star");

// TRIGGER

document.addEventListener("click", (e) => {
    if (e.target.nodeName === "i") {
        stars.forEach((target) => {
            target.addEventListener("click", (e) => {
                setInactive();
                setActive(target);
            })
        })
    } else {
        setInactive();
    }
})




// FUNCTIONS

function setInactive() {
    stars.forEach(target => 
        target.classList.remove("active"));
}

function setActive(target) {
    target.classList.add("active");
}





// 3. When I CLICK anywhere else, the stars change to its original state. 
