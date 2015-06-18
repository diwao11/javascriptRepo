//PROBLEM: user interaction doesn't provide desired results
//SOLUTION: add interactivity so the user can manage daily tasks.
var taskInput = document.getElementById('new-task'); //new-task
var addButton = document.getElementsByTagName('button')[0]; //first button. Selecting the first button b/c getElementsByTagName returns an array. And we want to choose the first button.
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); //incomplete-task
var completedTasksHolder = document.getElementById('completed-tasks'); //completed tasks

//New Task List Item
var createNewTaskElement = function(taskString){
	//create list item
	var listItem = document.createElement("li");
//input (checkbox)
	var checkBox = document.createElement("input"); //type is a checkbox
	//label
	var label = document.createElement("label");
	//input for (text)
	var editInput = document.createElement("input");
	//button.edit
	var editButton = document.createElement("button");
	//button.delete
	var deleteButton = document.createElement("button");
	//each of these elements need modifying
	
	//each element needs to be appended 

	return listItem;
}

//Add a new task
var addTask = function() {
	console.log('add task');	
	//Create a new list item with the text from the #new-task. What goes inside the () is 'some new task.'
	var listItem = createNewTaskElement();

	//append listItem to incompleteTaskHolder
	
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

var taskCompleted = function(){
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

var bindTaskEvents = function(taskListItem, checkboxEventHandler){
	console.log('binding happening');
	//select it's children
	var checkBox = taskListItem.querySelector("input[type=checked]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");
		//bind the editTask to edit button
		editButton.onclick = editTask;
		//bind the deleteTask to the delete button
		deleteButton.onclick = deleteTask;
		//bind checkboxEventHandler to the checkbox
		checkBox.onchange = checkboxEventHandler;
}
//Set the click handler to the addTask function. So when this element has been clicked, it will then do the addTask function. Not the other way around.
addButton.onclick = addTask;

//cycle over incompleteTaskHolder ul list items
for(var i; i < incompleteTasksHolder.children.length; i++){
		//bind events to list items children (taskCompleted)
		bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over complete completedTaskHolder ul list items
	for (var i; i < completedTasksHolder.children.length; i++){
		//bind events to list item's children (taskIncompleted)
		bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
	}


