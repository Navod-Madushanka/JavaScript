// console.log(window);
// console.log(Object.getOwnPropertyNames(window));

window.localStorage.setItem("firstname", "Navod");
localStorage.setItem("lastname", "Madushanka");

const person = {
    fullName: "Navod Madushanka",
    location: "kandy"
};

localStorage.setItem("user", JSON.stringify(person));

const fruits = ["Pinapple", "Mango", "Powpow"];

localStorage.setItem("fruits", JSON.stringify(fruits));

// GET ITOME FROM LOCAL STORAGE

// console.log(localStorage.getItem("firstname"));

// REMOVE ITEM FROM LOCAL STORAGE

localStorage.removeItem("fruits");

// CLEAR LOCAL STORAGE

localStorage.clear();


localStorage.setItem("name", "Navod");
localStorage.setItem("age", "23");

console.log(localStorage.key(0))