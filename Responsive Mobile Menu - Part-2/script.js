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
    hideMenu();
}

// Sticky Header
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Active menu switcher
const navList = document.querySelector(".nav-list");

navList.addEventListener("click", (e) => {
    const navLink = e.target.parentElement;
    if (navLink.classList.contains("link")) {
        navList.querySelector(".active").classList.remove("active");
        navLink.classList.add("active");
    }
});

// Scroll to top
const scrollBtn = document.querySelector(".top");
const rootEl = document.documentElement;
scrollBtn.addEventListener("click", scrollToTop)

document.addEventListener("scroll", showBtn);

function showBtn() {
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
    if (rootEl.scrollTop / scrollTotal > 0.3) {
        scrollBtn.classList.add("show-btn");
    } else {
        scrollBtn.classList.remove("show-btn");
    }
}

function scrollToTop() {
    rootEl.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}

// Mobile Responsive Menu
const menuWrapper = document.querySelector(".nav-wrapper");
const menu = document.querySelector(".nav-list");
const hamberger = document.querySelector(".hamberder");
const close = document.querySelector(".close");

const showMenu = () => {
    hamberger.style.display = "none";
    close.style.transform = "translateY(0)";
    menuWrapper.style.transform = "translateX(0)";
    menu.style.transform = "translateX(0)";
};

const hideMenu = () => {
    close.style.transform = "translateY(-200rem)";
    hamberger.style.display = "block";
    menuWrapper.style.transform = "translateX(-200%)";
    menu.style.transform = "translateX(200%)";
};

hamberger.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);
menuWrapper.addEventListener("click", hideMenu);