// Get the range input element and the element where the value will be displayed
const rangeInputElement = document.querySelector('input');
const valueElement = document.querySelector('.value');

// Set the initial value of the value element to the value of the range input element
valueElement.textContent = rangeInputElement.value;

// Update the value element whenever the range input element value changes
rangeInputElement.oninput = function() {
    valueElement.textContent = this.value;
}