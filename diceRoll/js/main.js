var dice = {
	sides: 6,
	roll: function () {		//object is roll and adding an anonymous function().
	var randonNumber = Math.floor(Math.random() * this.sides) + 1;		//'this' is the owner of the function, where the object of the method is called.
	// console.log(randonNumber);
	return randonNumber;
	}
}

//CODE CHALLENGE OF CHANGING OBJECT LITERAL TO CONSTRUCTOR FUNCTION. Part 1.
function Dice(sides){
	this.sides = sides;
	this.roll = function(){
		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
		return randomNumber;
	}
}

var dice = new Dice(6);

//CODE CHALLENGE OF CHANGING OBJECT LITERAL TO CONSTRUCTOR FUNCTION. Part 2.

function Dice(sides){
	this.sides = sides;
}

Dice.prototype.roll = function(){
		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
		return randomNumber;
}

var dice = new Dice(6);

// var dice10 = {
// 	sides: 10,
// 	roll: function () {		//object is roll and adding an anonymous function().
// 	var randonNumber = Math.floor(Math.random() * this.sides) + 1;		//'this' is the owner of the function, where the object of the method is called.
// 	console.log(randonNumber);
// 	}
// }