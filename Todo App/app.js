window.onload = function() {
    displayTasks();
}

const input = document.getElementById("input"),
    btn = document.getElementById("btn"),
    todolist = document.querySelector(".todo-list"),
    clear = document.querySelector(".clear");

let tasks;

btn.addEventListener("click", addTask);

function addTask(e) {
    e.preventDefault();
    if (input.value !== "") {
        addTaskToLS();
        displayTasks();
    } else {
        alert("Please Enter a Task");
    }
}

// Get tasks from the local storage

function getTasks() {

    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
}

// seve task to local storage

function addTaskToLS() {
    getTasks();

    tasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
}

// Display tasks on the page

function displayTasks() {
    todolist.innerHTML = "";
    getTasks();

    tasks.forEach((task, index) => {
        const newli = document.createElement("li");
        const delBtn = document.createElement("button");

        delBtn.innerHTML = `<i class="fas fa-trash-alt" id = "${index}"  onclick="deleteTask(this.id)"></i>`;

        newli.appendChild(document.createTextNode(task));
        newli.appendChild(delBtn);
        todolist.appendChild(newli);
    })
}

// Delete Task

function deleteTask(index) {
    const del = confirm("You are about to delete this task");
    if (del == true) {
        getTasks();
    }
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
}

// clear Task
clear.addEventListener("click", clearTasks);

function clearTasks() {
    const delTasks = confirm("Delete all task");
    if (delTasks == true) {
        localStorage.clear();
        todolist.innerHTML = "";
        displayTasks();
    }
}