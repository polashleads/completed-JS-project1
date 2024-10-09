// Grab the necessary elements from the HTML
const taskInput = document.getElementById('taskInput');  // Input field where user types task
const addTaskButton = document.getElementById('addTaskButton');  // Button to add task
const taskList = document.getElementById('taskList');  // List where tasks are displayed

// Event listener to add a new task when the button is clicked
addTaskButton.addEventListener('click', function() {
    // Get the value of the task from the input field
    const taskText = taskInput.value;

    // Only add the task if the input field is not empty
    if (taskText.trim() !== '') {
        // Create a new list item (li) to hold the task
        const newTask = document.createElement('li');

        // Create a span element to hold the task text
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;  // Set the span's text to the task text

        // Append the task content to the list item
        newTask.appendChild(taskContent);

        // Create a button to delete the task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';  // Set button text to 'Delete'
        deleteButton.className = 'delete';  // Apply the 'delete' class to the button

        // Append the delete button to the list item
        newTask.appendChild(deleteButton);

        // Add the new task (list item) to the task list (ul)
        taskList.appendChild(newTask);

        // Clear the input field after adding the task
        taskInput.value = '';

        // Event listener to mark a task as completed when it's clicked
        taskContent.addEventListener('click', function() {
            taskContent.classList.toggle('completed');  // Toggle the 'completed' class
        });

        // Event listener to delete the task when the delete button is clicked
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(newTask);  // Remove the task from the list
        });
    }
});