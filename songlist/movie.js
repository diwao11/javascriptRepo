function Movie(title, year, duration) {				//constructor function for song objet.
	Media.call(this, title, duration);
	//this.title = title;							//removing them bc/ they will be in Media object and we can inherit from there.
	this.year = year;
	//this.duration = duration;      //removing them bc/ they will be in Media object and we can inherit from there.
	//this.isPlaying = false;				//removing them bc/ they will be in Media object and we can inherit from there.
}

Movie.prototype = Object.create(Media.prototype);
//Prototypes is like a template for objects. So the values and behaviors can be shared between instance of objects.
//-----------Don't need to call these anymore because we are going to have them in the media object

// Song.prototype.play = function() {				//prototype that song object has access to when it needs it.
// 	this.isPlaying = true;									//setting this.isPlaying = true bc set to false in constructor.
// };

// Song.prototype.stop = function() {
// 	this.isPlaying = false;
// };

Movie.prototype.toHTML = function() {			//creating a prototype to replace HTML
	var htmlString = '<li';
	if(this.isPlaying){											//logic for if this isPLaying equals true or false, then the htmlString will appear
		htmlString +=' class="current"';
	}
	htmlString += '>';
	htmlString += this.title;
	htmlString += ' ( ';
	htmlString += this.year;
		htmlString += ' ) ';
	htmlString += '<span class="duration">';
	htmlString += '</span></li>';

	return htmlString;											//returning the value and it'll be called later.
};