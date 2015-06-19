var price; //empty variable
var quantity; //empty variable
var total; //empty variable

price = 5;
quantity = 14;
total = price * quantity;

var el = document.getElementById('cost'); //var el is now equating to a DOM method dcalled getElementById(''). Here it gets the tag element that has the id of 'cost' and then it's going to replace it with the text.Content method.
el.textContent = '$' + total; //Here the el variable is attached to the method called .textContent and it's now equaity to '$' and concatenating the total variable which is doing some math up top.