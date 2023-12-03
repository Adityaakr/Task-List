// script.js

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
        };
    
        // Create a new "Delete" button
        var deleteButton = document.createElement("button");
        deleteButton.className = "add-text";
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = function () {
            // Remove the entire task container when the "Delete" button is clicked
            taskListContainer.removeChild(newTaskContainer);
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
    }
    