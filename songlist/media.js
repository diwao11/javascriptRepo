function Media(title, duration) {				//constructor function for song objet.
	this.title = title;
	this.duration = duration;
	this.isPlaying = false;
}

//Prototypes is like a template for objects. So the values and behaviors can be shared between instance of objects.

Media.prototype.play = function() {				//prototype that song object has access to when it needs it.
	this.isPlaying = true;									//setting this.isPlaying = true bc set to false in constructor.
};

Media.prototype.stop = function() {
	this.isPlaying = false;
};