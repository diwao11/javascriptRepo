//--------------------------------------------------
	//SCOPE Lesson

 var variable = 1;		//global variable

var fn = function() {
    variable = 2;				//local variable
}

console.log(variable);		//calling global variable, output will be 1.
fn();											//calling function which now will make the latter console.log call the local variable
console.log(variable);		//output will be 2 instead of 1.


//--------------------------------------------------
	//HOISTED Lesson
var fn = function() {
    variable = 7; // I am changing the inner variable, not the outer one!
    var variable = 2;
}

var variable = 1;
console.log(variable);		//output will be 1
fn();											//calling function but still the log on the console will still be 1 because the var variable got hoisted to the top.
console.log(variable);		//outout will be 1

//--------------------------------------------------
	//CLOSURE Lesson

var outer = function() {
    var variable = 5;

    var inner = function() {
        return variable * 2;
    }
    console.log(inner());		//calling the inner() function which returns variable * 2;
};

outer();									//calling outer. output is 10

//--------------------------------------------------
	//CLOSURE Lesson
var greaterThan = function(valueA, valueB) {
    return valueA > valueB;
};


var greaterThanValue = function(valueB) {
    return function(valueA) {
        return greaterThan(valueA, valueB);
    }
};


var greaterThanFive = greaterThanValue(5);
var greaterThanTen = greaterThanValue(10);

console.log(greaterThanFive(6)); // True
console.log(greaterThanTen(7));  // False

//--------------------------------------------------
	//Prototype Lesson
var Musician = function(sounds) {			//Constructor Object
    this.sounds = sounds;							//this.sounds is connected to the argument passed through the Constructor Function
};

Musician.prototype.solo = function(length) {			//prototype object, adding the solo method to the Musician prototype.
    var solo = "";
    for (var i=0; i<length; i++) {
        solo += this.sounds[i % this.sounds.length] + " ";
    }
    console.log(solo);
};

var david = new Musician(['Twang', 'Thrumb', 'Bling']);
david.solo(8);

//--------------------------------------------------
	//Inheritance Lesson

	var Musician = function(sounds) {
    this.sounds = sounds;
};

Musician.prototype.solo = function(length) {
    var solo = "";
    for (var i=0; i<length; i++) {
        solo += this.sounds[i % this.sounds.length] + " ";
    }
    console.log(solo);
};

var Guitarist = function() {                            //Constructor function creating Guitarist
    Musician.call(this, ['Twang', 'Thrumb', 'Bling']);      //.call is the method to set the value of 'this' in the context of the function
    this.strings = 6;
};
Guitarist.prototype = Object.create(Musician.prototype);        //creating the guitarest object through the musician prototype object
Guitarist.prototype.constructor = Guitarist;

Guitarist.prototype.tune = function() {                     //a custom method.
    console.log('Be with you in a moment');
    console.log('Twoning sproing splang');
};

var Bassist = function() {
    Musician.call(this, ['Boink', 'Bow', 'Boom']);
    this.strings = 4;
};
Bassist.prototype = Object.create(Musician.prototype);
Bassist.prototype.constructor = Bassist;

var nigel = new Guitarist();
nigel.tune();
nigel.solo(8);

var derek = new Bassist();
derek.solo(4);


