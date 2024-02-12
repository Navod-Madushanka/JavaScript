const search = document.getElementById("input");
const form = document.querySelector("form");
const serachResult = document.querySelector(".results");
const errorMsg = document.querySelector(".alert");
const line = document.querySelector("hr");

const apiUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchValue = input.value;
    // alert(searchValue);
    if (searchValue === "") {
        errorMessage("Search cannot be empty, Please enter a search term");
    } else {
        getResult(searchValue);
    }
});

// error message

function errorMessage(msg) {
    errorMsg.style.display = "block";
    line.style.display = "block";
    errorMsg.textContent = msg;
}

// getResult

async function getResult(searchVal) {
    const response = await fetch(apiUrl + searchVal);
    const results = await response.json();

    // console.log(results);
    if (results.query.search.length == 0) {
        return errorMessage("Invalid Search, Please enter the another search term");
    } else {
        displayResult(results);
    }
}

// display Result

function displayResult(results) {
    line.style.display = "block";
    let output = "";
    results.query.search.forEach((result) => {
        let resultURL = `https://en.wikipedia.org/?curid=${result.pageid}`;
        output += `<div class="reuslt p-2">
        <a href="${resultURL}" target="_blank" rel="noopener" class="h3 fw-bold text-primary">${result.title}</a>
        <br>
        <a href="${resultURL}" target="_blank" rel="noopener" class="fs-5 text-success">${resultURL}</a>
        <p class="fs-5">${result.snippet}</p>
    </div>`;
        serachResult.innerHTML = output;
    });
}