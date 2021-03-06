// 'use strict';
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
  checkBox.type = "checkbox";
  editInput.type = "text";

  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  label.innerText = taskString;

  //each element needs to be appended 
  //They are appended exactly as they appear in the <li>
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
};

//Add a new task
var addTask = function() {
  console.log('add task');  
  //Create a new list item with the text from the #new-task. What goes inside the () is 'some new task.'
  var listItem = createNewTaskElement(taskInput.value); //getting the value of the string.

  //append listItem to incompleteTaskHolder
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

  taskInput.value = " "; //setting the value to an empty string.
};

//Edit an existing task.
var editTask = function(){
  console.log('edit task');
  var listItem = this.parentNode;
  var editInput = listItem.querySelector("input[type=text]"); //querySelector takes in a css selector. So selecting the input[type=text] is a CSS Selector.
  var label = listItem.querySelector("label");
  var containsClass = listItem.classList.contains("editMode");
  //if the parent has the class .editMode
  if(containsClass){
    //switch from .editMode
    //label text become the input's value
    label.innerText = editInput.value;
  }else {
    //else
    //switch to editMode
    //input value becomes the labels text
    editInput.value = label.innerText;
  //Toggle .editMode on the listItem
  }
  listItem.classList.toggle("editMode");
};

//Delete an existing task.
var deleteTask = function(){
  console.log('delete task');
  //when delete button is pressed
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    //remove the parent list item from the ul
    ul.removeChild(listItem);
};

var taskCompleted = function(){
  console.log('task complete');
//Mark a task as complete
  var listItem = this.parentNode;
  //append the task list item to the #completed-tasks
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
};

var taskIncomplete = function(){
  console.log('task incomplete');
//Mark a task as incomplete
  //append it to #incomplete-tasks
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
};

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events");
  //select taskListItem's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  
  //bind editTask to edit button
  editButton.onclick = editTask;
  
  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
  
  //bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
};
//Set the click handler to the addTask function. So when this element has been clicked, it will then do the addTask function. Not the other way around.
addButton.onclick = addTask;
addButton.addEventListener("click", addTask); //need to add an addEventListener so that you can have multiple events and they don't override one another.

//cycle over incompleteTaskHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++){
    //bind events to list items children (taskCompleted)
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over complete completedTaskHolder ul list items
for (var i = 0; i < completedTasksHolder.children.length; i++){
  //bind events to list item's children (taskIncompleted)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}


  