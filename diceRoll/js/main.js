var dice = {
	sides: 6,
	roll: function () {		//object is roll and adding an anonymous function().
	var randonNumber = Math.floor(Math.random() * this.sides) + 1;		//'this' is the owner of the function, where the object of the method is called.
	// console.log(randonNumber);
	return randonNumber;
	}
}

// var dice10 = {
// 	sides: 10,
// 	roll: function () {		//object is roll and adding an anonymous function().
// 	var randonNumber = Math.floor(Math.random() * this.sides) + 1;		//'this' is the owner of the function, where the object of the method is called.
// 	console.log(randonNumber);
// 	}
// }