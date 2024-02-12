let celsius = document.querySelector(".celsius"),
    fahrenheit = document.querySelector(".fahrenheit"),
    kelvin = document.querySelector(".kelvin"),
    form = document.querySelector("form");


form.addEventListener("input", convertTemperature);

function convertTemperature(e) {
    if (e.target.classList.contains("celsius")) {
        let x = e.target.value;
        fahrenheit.value = ((x * 1.8) + 32).toFixed(2);
        kelvin.value = (parseFloat(x) + 273.15).toFixed(2);
    }

    if (e.target.classList.contains("fahrenheit")) {
        let x = e.target.value;
        celsius.value = ((x - 32) / 1.8).toFixed(2);
        kelvin.value = ((x - 32) / 1.8 + 273.15).toFixed(2);
    }

    if (e.target.classList.contains("kelvin")) {
        let x = e.target.value;
        fahrenheit.value = ((x - 273.15) * 1.8 + 32).toFixed(2);
        celsius.value = (parseFloat(x) - 273.15).toFixed(2);
    }

    // if (e.target.classList.contains("ounce")) {
    //     let x = e.target.value;
    //     kilograms.value = (x / 35.274).toFixed(2);
    //     grams.value = (x / 0.035274).toFixed(2);
    //     pounds.value = (x * 0.0625).toFixed(2);
    // }
}