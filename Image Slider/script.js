const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let autoScroll = true;
let slideIntervel;
let intervelTime = 1000;

// Next btn
const nextSlide = () => {
    const current = document.querySelector(".current");
    current.classList.remove("current");

    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add("current");
    } else {
        slides[0].classList.add("current");
    }

    current.classList.remove("current");

};


// Prev btn
const prevSlide = () => {
    const current = document.querySelector(".current");
    current.classList.remove("current");

    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add("current");
    } else {
        slides[slides.length - 1].classList.add("current");
    }

    current.classList.remove("current");

};

// Add Event Listnes

next.addEventListener("click", () => {
    nextSlide();
    if (autoScroll) {
        clearInterval(slideIntervel);
        auto();
    }
});

prev.addEventListener("click", () => {
    prevSlide();
    if (autoScroll) {
        clearInterval(slideIntervel);
        auto();
    }
});

// auto scroll

if (autoScroll) {
    function auto() {
        slideIntervel = setInterval(nextSlide, intervelTime);
    }
}

auto();