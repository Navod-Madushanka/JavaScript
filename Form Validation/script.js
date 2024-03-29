const form = document.getElementById("form"),
    username = document.getElementById("username"),
    email = document.getElementById("email"),
    password = document.getElementById("password"),
    password2 = document.getElementById("password2");


// Form event listner
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 6, 16);
    checkLength(password, 8, 16);
    checkEmail(email);
    matchPassword(password, password2)
});

// Check required fields
function checkRequired(inputAll) {
    inputAll.forEach((input) => {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is Required`);
        } else {
            showSuccess(input);
        }
    });
}

// Check the input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be atleast ${min} characters.`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters.`);
    } else {
        showSuccess(input);
    }
}

// Validate email
function checkEmail(input) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid")
    }
}

// Check Password
function matchPassword(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Password do not match");
    }
}

// Show Error Message
function showError(input, msg) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = msg;
}

// show Success Message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// Get Field Name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}