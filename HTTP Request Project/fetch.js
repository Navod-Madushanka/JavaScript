// LOAD ALL USERS

const btn = document.getElementById("btn");

btn.addEventListener("click", getUsers);

function getUsers(e) {
    e.preventDefault();

    fetch("USERS.json").then(function(response) {
        return response.json();
    }).then(function(data) {
        // console.log(data);
        let output = "";
        data.forEach(function(user) {
            output += `
                <hr>
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>NAME: ${user.name}</li>
                    <li>AGE: ${user.age}</li>
                    <li>EMAIL: ${user.email}</li>
                </ul>
                `;
        });
        document.getElementById("users").innerHTML = output;
    })
}