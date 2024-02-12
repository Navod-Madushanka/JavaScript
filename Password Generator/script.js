const empty = "",
    uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lcase = "abcdefghijklmnopqrstuvwxyz",
    number = "0123456789",
    symbol = "!@#$%^&*-=_";

const plength = document.getElementById("p-length"),
    upperCase = document.getElementById("p-uppercase"),
    lowerCase = document.getElementById("p-lowercase"),
    pNumber = document.getElementById("p-number"),
    pSymbol = document.getElementById("p-symbol"),
    submit = document.getElementById("submit"),
    password = document.getElementById("password"),
    copy = document.getElementById("copy");

submit.addEventListener("click", () => {
    let initialPassword = empty;
    // ADD CHARACTER IF AN OPTION IS CHECKED
    upperCase.checked ? (initialPassword += uCase) : "";
    lowerCase.checked ? (initialPassword += lcase) : "";
    pNumber.checked ? (initialPassword += number) : "";
    pSymbol.checked ? (initialPassword += symbol) : "";

    password.value = generatePassword(plength.value, initialPassword);
});

function generatePassword(l, initialPassword) {
    let pass = "";
    for (let i = 0; i < l; i++) {
        pass += initialPassword.charAt(
            Math.floor(Math.random() * initialPassword.length)
        );
    }
    return pass;
};

// COPY FUNCTION

copy.addEventListener("click", () => {
    if (password.value == "") {
        alert("Please Generate a Password");
    } else {
        password.select();
        document.execCommand("copy");
        alert("Password has Been Copy to Clipboard")
    }
});