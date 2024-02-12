// VARIABLES

const input = document.getElementById("input"),
    btn = document.getElementById("btn"),
    todolist = document.querySelector(".todo-list"),
    clear = document.querySelector(".clear");


// add List item
const addTask = (e) => {
    e.preventDefault();
    const newli = document.createElement("li");
    const delBtn = document.createElement("button");

    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

    if (input.value !== "") {
        newli.textContent = input.value;
        newli.appendChild(delBtn);
        todolist.appendChild(newli);
        input.value = "";
    } else {
        alert("Please Enter a Task");
    }

    // delete function
    delBtn.addEventListener("click", function() {
        const del = confirm("You are about to delete this task");
        if (del == true) {
            const parent = this.parentNode;
            parent.remove();
        }
    });
}

btn.addEventListener("click", addTask);

clear.addEventListener("click", () => {
    todolist.innerHTML = "";
});