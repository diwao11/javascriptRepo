//PROBLEM: user interaction doesn't provide desired results
//SOLUTION: add interactivity so the user can manage daily tasks.
var taskInput = document.getElementById('new-task'); //new-task
var addButton = document.getElementsByTagName('button')[0]; //first button. Selecting the first button b/c getElementsByTagName returns an array. And we want to choose the first button.
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); //incomplete-task
var completedTasksHolder = document.getElementById('completed-tasks'); //completed tasks

//Add a new task
var addTask = function() {
	console.log('add task');
	//When button is pressed, 
	//Create a new list item with the text from the #new-task
	//input (checkbox)
	//label
	//input for (text)
	//button.edit
	//button.delete
	//each of these elements need to be modified and appended.
}
//Edit an existing task.
var editTask = function(){
	console.log('edit task');
	//When the EDIT button is pressed.
		//if the parent has the class .editMode
			//switch from .editMode
			//label text become the input's value
		//else
			//switch to editMode
			//input value becomes the labels text
		//Toggle .editMode on the parent
}

//Delete an existing task.
var deleteTask = function(){
	console.log('delete task');
	//when delete button is pressed
		//remove the parent list item from the ul
}

var taskComplete = function(){
	console.log('task complete');
//Mark a task as complete
	//when the checkbox is checked
		//append the task list item to the #completed-tasks
}

var taskIncomplete = function(){
	console.log('task incomplete');
//Mark a task as incomplete
	//when the checkbox is unchecked
		//append it to #incomplete-tasks
}

//Set the click handler to the addTask function. So when this element has been clicked, it will then do the addTask function. Not the other way around.
addButton.onclick = addTask;