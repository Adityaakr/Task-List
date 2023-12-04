//step 0

 //setting  up a event listner when a page reloads it will work (failed for now)

//        // Event listener for page load
//        window.addEventListener('DOMContentLoaded', function() {
//         // Display an alert with an input field for the user to enter their name
//         const userName = prompt('Please enter your name:');
    
//         // Set the placeholder in the specified <div> element
//         const todayTaskDiv = document.getElementById('Todaytask');
//         todayTaskDiv.innerHTML = `<u>Aaj Ke Kaam (${userName})</u>`;

//         //call the function to load the task from localStorage on page load

//         loadTasks();
//     });



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
// - tasks here represents array of TASKS
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

       localStorage.setItem('tasks', JSON.stringify(tasks));





// - Create a new task container with input field, "Edit" button, and "Delete" button
// 1) Creating new Container for Task and Buttons

      const newTaskContainer = document.createElement('div');
      newTaskContainer.className = 'form-task'; //its like creating the container for other components



// 2) Creating new input field for the task 
// creating place where the task will be added.
       
      const taskInputField = document.createElement('input');
      taskInputField.type = 'text';
      taskInputField.value = taskText;
      taskInputField.className = 'text-input';
      taskInputField.setAttribute("readonly", 'true');
     





// - Add event listeners to "Edit" and "Delete" buttons to handle editing and deletion

//A) Creating a EDIT Button

      const editButton = document.createElement('button');
      editButton.className = 'clear-text';
      editButton.innerHTML = 'Edit';// 'Edit' is written inside the button
      editButton.onclick = function (){
      //converting readOnly to Edit form
      taskInputField.readOnly = !taskInputField.readOnly;
      updateLocalStorage(); //updating localstore when task is edited
}


//B) creating a Delete button
    
     const deleteButton = document.createElement('button');
     deleteButton.className = 'clear-text'
     deleteButton.innerHTML = 'Delete';
     deleteButton.onclick = function (){

     // remove the (entire task container) when the 'Delete Button is clicked'
     //the container that we created when add task will be clicked
     //remember this only removes the visual representation of container but still actual data and consistency
     // we need tasks.filter etc etc

     taskListContainer.removeChild(newTaskContainer)

     // ~> //remove tasks from tasks array
     //taskItem is a temporary variable used to represent each individual task in the array during the filtering process.
     // You can think of it as a placeholder for each element in the tasks array while the filter is being applied.

     //Explain - 
     // The filter method goes through each task in the tasks array.
     // For each task, the arrow function checks if it is not equal to taskText.
     // If a task is not equal to taskText, it is included in the new array.
     // The tasks variable is then reassigned to this new array, effectively updating it with the filtered tasks.
     tasks = tasks.filter( task => task !== taskInput);


     //save updated task from array to localstorage
       updateLocalStorage();

}



// - Add the new input field and button to the task container

       newTaskContainer.appendChild(taskInputField);
       newTaskContainer.appendChild(editButton);
       newTaskContainer.appendChild(deleteButton);

// get the task list from container where task will be added;
   
       const taskListContainer = document.getElementById('taskListContainer')

// add new task container to the task list container

       taskListContainer.appendChild(newTaskContainer);

// - Clear the input field

       taskInput.value = '';




       
// Step 2: Function to update localStorage with the latest tasks
// - Get the current tasks from the task list container
// - Update the tasks array with the latest values
// - Save the updated tasks array to localStorage

        function updateLocalStorage(){
        tasks = Array.from(taskListContainer.children).map(container => {
                return container.firstChild.value;
        })
        localStorage.setItem('tasks', JSON.stringify(tasks));
  }

}
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
