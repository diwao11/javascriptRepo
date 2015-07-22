var Diner = function(meal){
	this.meal = meal;
	
};	//closing the Diner Constructor object.

Diner.prototype.tax = function(){
	// var dinner = "";
	// for (var i = 0; i < length; i++){
	// 	dinner += this.meal[i] + " ";
	// }	//closing of for loop
	var tax = this.meal * 1.09;
	return tax * this.meal;
};	//closing the Diner Prototype dinner Method.	


var dan = new Diner(10);
console.log(dan);


// var adultDiner = function(){
// 	Diner.call(this, [10, 10, 5]);
// };
// adultDiner.prototype = Object.create(Diner.prototype);
// adultDiner.prototype.constructor = adultDiner;

// var teenageDiner = function(){
// 	Diner.call(this, 5);
// };
// teenageDiner.prototype = Object.create(Diner.prototype);
// teenageDiner.prototype.constructor = teenageDiner;

// var dan = new adultDiner();
// dan.dinner();

