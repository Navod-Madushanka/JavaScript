const toggleDarkMode = document.querySelector(".toggle-darkmode");
const toggletext = document.querySelector(".toggle-text");

let darkmode = localStorage.getItem("darkMode");

// set Dark Mode
const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    toggletext.textContent = "Light";
    localStorage.setItem("darkMode", "Enabled");
};

// Diseble Dark Mode
const disebleDarkMode = () => {
    document.body.classList.remove("darkmode");
    toggletext.textContent = "Dark";
    localStorage.setItem("darkMode", null);
};

// Save Dark Mode History
if (darkmode === "Enabled") {
    enableDarkMode();
}

// Add event Listner
toggleDarkMode.addEventListener("click", () => {
    let darkmode = localStorage.getItem("darkMode");

    if (darkmode != "Enabled") {
        enableDarkMode();
    } else {
        disebleDarkMode();
    }
});