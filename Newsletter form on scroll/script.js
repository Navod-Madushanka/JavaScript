const links = document.querySelectorAll(".nav-list li a");

for (link of links) {
    link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
    });
}

// Sticky Header
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


// Scroll Indicator JS

window.onscroll = () => {
    scrollProgress();
}

function scrollProgress() {
    const currentState = document.body.scrollTop || document.documentElement.scrollTop;
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPresentage = (currentState / pageHeight) * 100;
    const progressBar = document.querySelector(".progress");
    progressBar.style.visibility = "visible";
    progressBar.style.width = scrollPresentage + "%";

    // Newsletter js
    const NewsLetter = document.querySelector(".newsletter");

    if (scrollPresentage > 80) {
        NewsLetter.style.transform = "translateX(0)";
    } else {
        NewsLetter.style.transform = "translateX(-100%)";
    }

    document.querySelector(".fa-times").addEventListener("click", () => {
        NewsLetter.style.transform = "translateX(-100%)";
    });
}