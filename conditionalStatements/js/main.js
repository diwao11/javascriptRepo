var today = new Date(); //creating a new date object.
var hourNow = today.getHours(); //javascript method to find the exact current hour.
var greeting; //empty variable that we will be using to store the hour.

//Anything inside the {} is considered a Code Block. So in this logic below, we see th at there are different code blocks that react differently based upon the statement which is in the () paranthesis. 
if (hourNow > 18) {
	greeting = 'Good evening';
} else if(hourNow > 12){
	greeting = 'Good afternoon';
} else if (hourNow > 0){
	greeting = 'Good morning';
}else {
	greeting = 'Welcome';
}

document.write('<h3>' + greeting + '</h3>'); //document.write() is a way to add content dynamically to your page. Changes the BEHAVIOR which JS is for. It is part of the DOM. Document Object Model. To fiind out DOM methods, google MDN Dom Documents.