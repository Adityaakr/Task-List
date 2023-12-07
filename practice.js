// Function to create task elements
// function (){

// }

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
           const taskContainer = document.createElement('div');
           taskContainer.className = 'form-task';
       
           // Add an input field for the task with appropriate attributes
           const taskInputField = document.createElement('input');
           taskInputField.className = 'text-input';
           taskInputField.type = 'text';
           taskInputField.value = taskText;
           taskInputField.setAttribute('readonly', 'true');
       
           // Add "Edit" and "Delete" buttons with event handlers
           const editButton = document.createElement('button');
           editButton.className = 'clear-text';
           editButton.innerHTML = 'Edit';
           editButton.onclick = () => {
               taskInputField.readOnly = !taskInputField.readOnly;
               updateLocalStorage();
           };
       
           const deleteButton = document.createElement('button');
           deleteButton.className = 'add-text';
           deleteButton.innerHTML = 'Delete';
           deleteButton.onclick = () => {
               taskListContainer.removeChild(taskContainer);
               tasks = tasks.filter(taskItem => taskItem !== taskInputField.value);
               updateLocalStorage();
           };
       
           // Add the new input field and buttons to the task container
           taskContainer.appendChild(taskInputField);
           taskContainer.appendChild(editButton);
           taskContainer.appendChild(deleteButton);
       
           return taskContainer;
       }
       
           
        // Function to add a new task
        function addTask (){

            const taskInput = document.getElementById('taskInput')
            let taskText = taskInput.value.trim();

            if (taskText === '') {
                alert('please write something Sir/Madam')
                return;
            }
       
        // Retrieve tasks from localStorage or initialize an empty array
        // localstorage store task in form of array so we are converting it -> then push it
        // to get this item
       var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
        // Add the new task to the tasks array
        tasks.push(taskText);
    
        // Save the updated tasks array to localStorage
        // Create task elements and add them to the task list container // setItem
        //kisme set krna chahte ho -> localstorage -> kaise set karoge .setItem se
        // -> kya set krna hai "tasks" -> kaunse form me tah wo -> JSON.stringify(tasks)
        localStorage.setItem('tasks', JSON.stringify(tasks));
    
        // Clear the input field after adding the task
        taskInput.value = '';
    

        //now i am going to envoke createTaskElement by storing it in one element and then 
        // using appendChild to push newTaskContainer to taskListContainer;


        //why its imp to create variable for this answer ->
        //`createTaskElement(taskText);` alone generates a task element, 
        //but `taskListContainer.appendChild(newTaskContainer);` 
        //is needed to make it visible on the webpage. The combination creates, 
        //then appends the task element for user display.

        let newTaskContainer = createTaskElement(taskText);
         taskListContainer.appendChild(newTaskContainer);

        // Function to update localStorage with the latest tasks
        updateLocalStorage();
       
    
    }
         // Function to load tasks from localStorage on page load
         function loadTasksFromLocalStorage() {
        // Get the task list container where tasks will be added
        const taskListContainer = document.getElementById('taskListContainer')
    
        // Clear existing tasks/innerHTML in the task list container
        taskListContainer.innerHTML = '';
    
        // Retrieve .get tasks from localStorage or initialize an empty array
        tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        // Create a function to loop it with forEach() because when the page load ifinite time it should 
        // give correct value or loads each time
        // task elements and add them(createListElement)to the task list container
        tasks.forEach((task) => {
                const taskList = createTaskElement(task);
                taskListContainer.appendChild(taskList);
        })

        updateLocalStorage();
        
    }
    
    // Function to update localStorage with the latest tasks
    function updateLocalStorage() {
        // Iterate over task containers, extract values, and update localStorage
        tasks = Array.from(taskListContainer.children).map((container) => {
            return container.children[0].value
        })

         // Save the array of tasks in localStorage as a JSON string
          localStorage.setItem("tasks", JSON.stringify(tasks));
      

    }

    //when page loads it should work 
    
    document.addEventListener("DOMContentLoaded", function () {
        const taskListContainer1 = document.getElementById('taskListContainer');
        loadTasksFromLocalStorage();
    
        // Delayed event listener attachment
        setTimeout(function () {
            document.addEventListener("submit", function (event) {
                event.preventDefault();
                addTask();
            });
        }, 1000); // Adjust the delay time as needed
    });
    

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //extra tasks variable ka upayog tasks ko store aur manipulate karne ke liye hota hai.
    // loadTasksFromLocalStorage function mein ise retrieve kiya jata hai,
    // jabki updateLocalStorage function mein ise update kiya jata hai aur localStorage mein save kiya jata hai.
    