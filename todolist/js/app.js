//PROBLEM: user interaction doesn't provide desired results
//SOLUTION: add interactivity so the user can manage daily tasks.

//Add a new task
	//When button is pressed, 
	//Create a new list item with the text from the #new-task
	//input (checkbox)
	//label
	//input for (text)
	//button.edit
	//button.delete
	//each of these elements need to be modified and appended.

//Edit an existing task.
	//When the EDIT button is pressed.
		//if the parent has the class .editMode
			//switch from .editMode
			//label text become the input's value
		//else
			//switch to editMode
			//input value becomes the labels text
		//Toggle .editMode on the parent

//Delete an existing task.
	//when delete button is pressed
		//remove the parent list item from the ul


//Mark a task as complete
	//when the checkbox is checked
		//append the task list item to the #completed-tasks


//Mark a task as incomplete
	//when the checkbox is unchecked
		//append it to #incomplete-tasks