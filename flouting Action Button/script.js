const fab = document.getElementById("fab");
const fabBtn = document.querySelector(".fab-btns");

fab.addEventListener("click", () => {
    fabBtn.classList.toggle("show");
});