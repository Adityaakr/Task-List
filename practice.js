// Function to create task elements


// How we are calling??? create Task Element(taskText)
// There is no forEach because task is going to create only at once at a time
// but when page load or loadTask it can happen many time do its imp to loop over and over and use forEach.


// function addTask() /{
    // ... (unchanged)

    // Call createTaskElement function and pass taskText as an argument
//     var newTaskContainer = createTaskElement(taskText);

//     // Append the new task container to the task list container
//     taskListContainer.appendChild(newTaskContainer);

//     // ... (unchanged)
// }

// Loop through each task in the 'tasks' array
// tasks.forEach(function (task) {
//         // Call createTaskElement function and pass 'task' as an argument
//         var taskContainer = createTaskElement(task);
    
//         // Append the new task container to the task list container
//         taskListContainer.appendChild(taskContainer);
//     });
    

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function createTaskElement(taskText) {
        // Create a new container for the task and buttons
        // Add an input field for the task with appropriate attributes
        // Add "Edit" and "Delete" buttons with event handlers
    
        // Return the task container
    }
    
    // Function to add a new task
    function addTask() {
        // Get the input value from the "Add a new task" input field
        // Check if the input is empty and show an alert if necessary
    
        // Retrieve tasks from localStorage or initialize an empty array
    
        // Add the new task to the tasks array
    
        // Save the updated tasks array to localStorage
    
        // Create task elements and add them to the task list container
    
        // Clear the input field after adding the task
    
        // Function to update localStorage with the latest tasks
        // Iterate over task containers, extract values, and update localStorage
    }
    
    // Function to load tasks from localStorage on page load
    function loadTasksFromLocalStorage() {
        // Get the task list container where tasks will be added
    
        // Clear existing tasks in the task list container
    
        // Retrieve tasks from localStorage or initialize an empty array
    
        // Create task elements and add them to the task list container
    }
    
    // Function to update localStorage with the latest tasks
    function updateLocalStorage() {
        // Iterate over task containers, extract values, and update localStorage
    }
    
    // Get the task list container where tasks will be added
    // Call the function to load tasks from localStorage on page load
    
    // Event listener for the form to prevent default form submission
    