// Function to create task elements
function createTaskElement(taskText) {
        // Create a new container for the task and buttons
        var taskContainer = document.createElement("div");
        taskContainer.className = "form-task";
    
        // Create a new input field for the task
        var taskInputField = document.createElement("input");
        taskInputField.type = "text";
        taskInputField.value = taskText;
        taskInputField.className = "text-input";
        taskInputField.setAttribute("readonly", "true");
    
        // Create a new "Edit" button
        var editButton = document.createElement("button");
        editButton.className = "clear-text";
        editButton.innerHTML = "Edit";
        editButton.onclick = function () {
            taskInputField.readOnly = !taskInputField.readOnly;
            updateLocalStorage();
        };
    
        // Create a new "Delete" button
        var deleteButton = document.createElement("button");
        deleteButton.className = "add-text";
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = function () {
            taskListContainer.removeChild(taskContainer);
            tasks = tasks.filter(taskItem => taskItem !== taskText);

            updateLocalStorage();
        };
    
        // Add the new input field and buttons to the task container
        taskContainer.appendChild(taskInputField);
        taskContainer.appendChild(editButton);
        taskContainer.appendChild(deleteButton);
    
        return taskContainer;
    }
    
    // Function to add a new task
    function addTask() {
        // Get the input value from the "Add a new task" input field
        var taskInput = document.getElementById('taskInput'); // Corrected method name
        var taskText = taskInput.value;
    
        // Check if the input is empty and show an alert if necessary
        if (taskText.trim() === '') {
            alert('Please enter a value');
            return;
        }
    
        // Rest of your code...
    
    
    
        // Retrieve tasks from localStorage or initialize an empty array
        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
        // Add the new task to the tasks array
        tasks.push(taskText);
    
        // Save the updated tasks array to localStorage
        localStorage.setItem("tasks", JSON.stringify(tasks));
    
        // Create task elements and add them to the task list container
        var newTaskContainer = createTaskElement(taskText);
        taskListContainer.appendChild(newTaskContainer);
    
        // Clear the input field after adding the task
        taskInput.value = "";
    }
    
    // Load tasks from localStorage on page load
    function loadTasksFromLocalStorage() {

        // Jab aap webpage ko phir se load karte hain, tab loadTasksFromLocalStorage function ka istemal hota hai. 

        // Get the task list container where tasks will be added
        var taskListContainer = document.getElementById("taskListContainer");
    
        // Clear existing tasks in the task list container
        taskListContainer.innerHTML = "";
    
        // Retrieve tasks from localStorage or initialize an empty array
        tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
        tasks.forEach(function (task) {
            // Create task elements and add them to the task list container
            var taskContainer = createTaskElement(task);
            taskListContainer.appendChild(taskContainer);
        });
    }
    
 // Function to update tasks in localStorage
function updateLocalStorage() {

    //updateLocalStorage function:
   //Kaam (Work): Yeh function webpage par moujood tasks ko localStorage mein update karta hai.




    // Get an array of task descriptions from taskListContainer
    //Array.from to convert a collection of HTML elements into an array, 
    //and then it uses the map function to extract the values of the first child nodes of each element.

    //return the value from taskListContainer.children (maybe value will change) kyuki update toh whi krni hai
    // return -> .setItem
    tasks = Array.from(taskListContainer.children).map(container => {
        return container.firstChild.value;
    });

    // Save the array of tasks in localStorage as a JSON string
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Get the task list container element where tasks will be added
var taskListContainer = document.getElementById("taskListContainer");

// Call the function to load tasks from localStorage on page load
loadTasksFromLocalStorage();

// Event listener for the form to prevent default form submission
document.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Call the addTask function to handle the form submission
    addTask();
});
