// Function to add a new task
function addTask() {
    // Get the input value from the "Add a new task" input field
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;

    // Check if the input is empty
    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Retrieve tasks from localStorage or initialize an empty array
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Add the new task to the tasks array
    tasks.push(taskText);

    // Save the updated tasks array to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Create a new container for the task and buttons
    var newTaskContainer = document.createElement("div");
    newTaskContainer.className = "form-task";

    // Create a new input field for the task
    var taskInputField = document.createElement("input");
    taskInputField.type = "text";
    taskInputField.value = taskText;
    taskInputField.className = "text-input"; // Set a new class for styling
    taskInputField.setAttribute("readonly", "true"); // Make the input readonly by default

    // Create a new "Edit" button
    var editButton = document.createElement("button");
    editButton.className = "clear-text";
    editButton.innerHTML = "Edit";
    editButton.onclick = function () {
        // Toggle the readonly state of the task input field when the "Edit" button is clicked
        taskInputField.readOnly = !taskInputField.readOnly;
        updateLocalStorage(); // Update localStorage when task is edited
    };

    // Create a new "Delete" button
    var deleteButton = document.createElement("button");
    deleteButton.className = "add-text";
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function () {
        // Remove the entire task container when the "Delete" button is clicked
        taskListContainer.removeChild(newTaskContainer);
        // Remove the task from the tasks array
        tasks = tasks.filter(taskItem => taskItem !== taskText);
        // Save the updated tasks array to localStorage
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    // Add the new input field and buttons to the task container
    newTaskContainer.appendChild(taskInputField);
    newTaskContainer.appendChild(editButton);
    newTaskContainer.appendChild(deleteButton);

    // Get the task list container where tasks will be added
    var taskListContainer = document.getElementById("taskListContainer");

    // Add the new task container to the task list container
    taskListContainer.appendChild(newTaskContainer);

    // Clear the input field after adding the task
    taskInput.value = "";

    // Function to update localStorage with the latest tasks
    function updateLocalStorage() {
        tasks = Array.from(taskListContainer.children).map(container => {
            return container.firstChild.value;
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

// Load tasks from localStorage on page load
function loadTasksFromLocalStorage() {
    // Clear existing tasks in the task list container
    taskListContainer.innerHTML = "";

    // Retrieve tasks from localStorage or initialize an empty array
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function (task) {
        // Create a new container for the task and buttons
        var taskContainer = document.createElement("div");
        taskContainer.className = "form-task";

        // Create a new input field for the task
        var taskInputField = document.createElement("input");
        taskInputField.type = "text";
        taskInputField.value = task;
        taskInputField.className = "text-input"; // Set a new class for styling
        taskInputField.setAttribute("readonly", "true"); // Make the input readonly by default

        // Create a new "Edit" button
        var editButton = document.createElement("button");
        editButton.className = "clear-text";
        editButton.innerHTML = "Edit";
        editButton.onclick = function () {
            // Toggle the readonly state of the task input field when the "Edit" button is clicked
            taskInputField.readOnly = !taskInputField.readOnly;
            updateLocalStorage(); // Update localStorage when task is edited
        };

        // Create a new "Delete" button
        var deleteButton = document.createElement("button");
        deleteButton.className = "add-text";
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = function () {
            // Remove the entire task container when the "Delete" button is clicked
            taskListContainer.removeChild(taskContainer);
            // Remove the task from the tasks array
            tasks = tasks.filter(taskItem => taskItem !== task);
            // Save the updated tasks array to localStorage
            localStorage.setItem("tasks", JSON.stringify(tasks));
        };

        // Add the new input field and buttons to the task container
        taskContainer.appendChild(taskInputField);
        taskContainer.appendChild(editButton);
        taskContainer.appendChild(deleteButton);

        // Add the new task container to the task list container
        taskListContainer.appendChild(taskContainer);
    });
}

// Get the task list container where tasks will be added
var taskListContainer = document.getElementById("taskListContainer");

// Call the function to load tasks from localStorage on page load
loadTasksFromLocalStorage();

// Event listener for the form to prevent default form submission
document.getElementById("taskForm").addEventListener("submit", function (event) {
    event.preventDefault();
    addTask();
});
