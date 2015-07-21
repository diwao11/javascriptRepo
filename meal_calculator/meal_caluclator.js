var Diner = function(sex,age,meal){
	this.sex = sex;
	this.age = age;
	this.meal = meal;
};	//closing the Diner Constructor object.

Diner.prototype.dinner = function(length){
	var dinner = "";
	for (var i = 0; i < length; i++){
		dinner += this.meal[i % this.meal.length] + " ";
	}	//closing of for loop
	console.log(dinner);
};	//closing the Diner Prototype dinner Method.	


