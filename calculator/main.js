var calculator = {
	sum: 0, //sum is a property.
	add: function(value){ 	//add, clear, and equals are methods because they are encapsulated within an object literal. 
		this.sum = this.sum + value;
	}, 											//there is a comma after each method. In an object, it's a comma, not a semi-colon. 
	clear: function(){
		this.sum = 0;
	}, 
	equals: function(){
		return this.sum;
	}
}


//Using the console, you can see how calculator.add, calculator.sum, and calculator.clear in an object work. The object is a calculator and in this object, it has methods that you can use. 

//CODE CHALLENGE: ADD a FUNCTION for MULTIPLY, SUBTRACT, AND DIVIDE. 