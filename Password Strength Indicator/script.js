let state,
    password = document.getElementById("password"),
    passwordStrength = document.getElementById("password-strangth"),
    lowUpperCase = document.querySelector(".low-upper-case i"),
    number = document.querySelector(".number i"),
    specialChar = document.querySelector(".spacial-char i"),
    eightChar = document.querySelector(".eight-char i"),
    showPassword = document.querySelector(".show-pass"),
    eyeIcon = document.querySelector("#eye");

showPassword.addEventListener("click", toggle);
eyeIcon.addEventListener("click", toggleEye);
password.addEventListener("keyup", () => {
    let pass = password.value;
    checkStrenght(pass);
});

// Toggle Password Visibility
function toggle() {
    if (state) {
        password.setAttribute("type", "password");
        state = false;
    } else {
        password.setAttribute("type", "text");
        state = true;
    }
}

// Toggle Icon in password field
function toggleEye() {
    eyeIcon.classList.toggle("fa-eye-slash");
}

// Check password Strangth
function checkStrenght(password) {
    let strangth = 0;

    // Check lower and Upper case
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        strangth += 1;
        addCheck(lowUpperCase);
    } else {
        removeCheck(lowUpperCase)
    }

    // check for numbers
    if (password.match(/([0-9])/)) {
        strangth += 1;
        addCheck(number);
    } else {
        removeCheck(number)
    }

    // check for Spacial Characters
    if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/)) {
        strangth += 1;
        addCheck(specialChar);
    } else {
        removeCheck(specialChar)
    }

    // check if password > 7
    if (password.length > 7) {
        strangth += 1;
        addCheck(eightChar);
    } else {
        removeCheck(eightChar)
    }

    // Update Progress Bar
    if (strangth == 1) {
        removePassStranght();
        passwordStrength.classList.add("pb-danger");
        passwordStrength.style = "width: 25%";
    } else if (strangth == 2) {
        removePassStranght();
        passwordStrength.classList.add("pb-warning");
        passwordStrength.style = "width: 50%";
    } else if (strangth == 3) {
        removePassStranght();
        passwordStrength.classList.add("pb-primary");
        passwordStrength.style = "width: 75%";
    } else if (strangth == 4) {
        removePassStranght();
        passwordStrength.classList.add("pb-success");
        passwordStrength.style = "width: 100%";
    } else {
        removePassStranght();
        passwordStrength.style = "width: 0%";
    }
}

// Remove password Stranght classes
function removePassStranght() {
    passwordStrength.classList.remove("pb-danger", "pb-warning", "pb-primary", "pb-success");
}

// Add check Icon
function addCheck(charRequired) {
    charRequired.classList.remove("fa-circle");
    charRequired.classList.add("fa-check");
}

// Remove check icon
function removeCheck(charRequired) {
    charRequired.classList.remove("fa-check");
    charRequired.classList.add("fa-circle");
}