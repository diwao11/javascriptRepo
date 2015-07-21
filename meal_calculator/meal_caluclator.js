var Diner = function(meal, tax, tip){
	this.meal = meal;
	this.tax = 3;
	this.tip = tip;
};	//closing the Diner Constructor object.

Diner.prototype.dinner = function(length){
	var dinner = "";
	for (var i = 0; i < length; i++){
		dinner += this.meal[i % this.meal.length] + " ";
	}	//closing of for loop
	console.log(dinner);
};	//closing the Diner Prototype dinner Method.	


var adultDiner = function(){
	Diner.call(this, 10);
};
adultDiner.prototype = Object.create(Diner.prototype);
adultDiner.prototype.constructor = adultDiner;

var teenageDiner = function(){
	Diner.call(this, 5);
};
teenageDiner.prototype = Object.create(Diner.prototype);
teenageDiner.prototype.constructor = teenageDiner;

var dan = new adultDiner();
dan.dinner();

