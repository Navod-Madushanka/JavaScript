let pounds = document.querySelector(".pounds"),
    kilograms = document.querySelector(".kilograms"),
    grams = document.querySelector(".grams"),
    ounce = document.querySelector(".ounce"),
    form = document.querySelector("form");


form.addEventListener("input", convertWeight);

function convertWeight(e) {
    if (e.target.classList.contains("pounds")) {
        let x = e.target.value;
        kilograms.value = (x / 2.2046).toFixed(2);
        grams.value = (x / 0.0022046).toFixed(2);
        ounce.value = (x * 16).toFixed(2);
    }

    if (e.target.classList.contains("kilograms")) {
        let x = e.target.value;
        pounds.value = (x * 2.2046).toFixed(2);
        grams.value = (x * 1000).toFixed(2);
        ounce.value = (x * 35.274).toFixed(2);
    }

    if (e.target.classList.contains("grams")) {
        let x = e.target.value;
        kilograms.value = (x / 1000).toFixed(2);
        pounds.value = (x * 0.0022046).toFixed(2);
        ounce.value = (x * 0.035274).toFixed(2);
    }

    if (e.target.classList.contains("ounce")) {
        let x = e.target.value;
        kilograms.value = (x / 35.274).toFixed(2);
        grams.value = (x / 0.035274).toFixed(2);
        pounds.value = (x * 0.0625).toFixed(2);
    }
}