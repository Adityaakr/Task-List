// Step 1: Function to add a new task

function newTask(){
        
        //task that a person is going to write 
        const taskInput = document.getElementById("taskInput")

        //task that he is going to write will have some value
        // - Get the task text from the input field
        // storing the value entered by user inside const tasktext
        const taskText = taskInput.value; 



// - Check if the input is not empty -> if else statement

        if (taskText.trim() === ''){
          alert('Please add a task!');
          return;
        }





// - Retrieve existing tasks from localStorage or initialize an empty array
// - parses the JSON string into a JavaScript object

        const tasks = JSON.parse(localStorage.getItem('tasks')) || [] //|| [] as a fallback or default value





//Explain Concept-

//{In JavaScript, data stored in `localStorage` is in string format. 
//`JSON.parse` is used to convert this string back into a JavaScript object.

//The need to convert the string to an object using JSON.parse is because 
//{localStorage stores data as strings.} If you want to work with the data as a JavaScript object (or array),.

//you need to convert it from its string representation. Using JSON.parse
//whats the need to converting to Objects??

//while it's possible to work with data as a string, 
//converting it to an object often makes the code more readable,
// maintainable, and provides easier access to the functionality that 
// JavaScript offers for working with structured data.}




// - Add the new task to the tasks array

       tasks.push(taskText);




// - Save the updated tasks array to localStorage
//- effective way to store structured data (like an array of objects) in the localStorage of a web browser.
//JSON.stringify function in JavaScript is used to convert a JavaScript object into a JSON-formatted string.

       localStorage.setItem('tasks',JSON.stringify(tasks));





// - Create a new task container with input field, "Edit" button, and "Delete" button
// 1) Creating new Container for Task and Buttons

      const newTaskContainer = document.createElement('div');
      newTaskContainer.className = 'form-task'; //its like creating the container for other components



// 2) Creating new input field for the task
       
      const taskInputField = document.createElement('input');
      taskInputField.type = 'text';
      taskInputField.value = 'tasktext';
      taskInputField.className = 'text-input';
      tastInputField.setAttribute("readonly", 'true');
     



// - Add event listeners to "Edit" and "Delete" buttons to handle editing and deletion
// - Add the new task container to the task list container
// - Clear the input field
}
// Step 2: Function to update localStorage with the latest tasks
// - Get the current tasks from the task list container
// - Update the tasks array with the latest values
// - Save the updated tasks array to localStorage

// Step 3: Function to load tasks from localStorage on page load
// - Clear existing tasks in the task list container
// - Retrieve tasks from localStorage or initialize an empty array
// - For each task in the tasks array:
//    - Create a new task container with input field, "Edit" button, and "Delete" button
//    - Add event listeners to "Edit" and "Delete" buttons to handle editing and deletion
//    - Add the new task container to the task list container

// Step 4: Event listener for the form submission
// - Prevent the default form submission behavior
// - Call the function to add a new task

// Step 5: Call the function to load tasks from localStorage on page load
