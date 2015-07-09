function Song(title, artist, duration) {				//constructor function for song objet.
	this.title = title;
	this.artist = artist;
	this.duration = duration;
	this.isPlaying = false;
}

Song.prototype.play = function() {				//prototype that song object has access to when it needs it.
	this.isPlaying = true;									//setting this.isPlaying = true bc set to false in constructor.
};

Song.prototype.stop = function() {
	this.isPlaying = false;
};

Song.prototype.toHTML = function() {			//creating a prototype to replace HTML
	var htmlString = '<li';
	if(this.isPlaying){											//logic for if this isPLaying equals true or false, then the htmlString will appear
		htmlString +=' class="current"';
	}
	htmlString += '>';
	htmlString += this.title;
	htmlString += ' - '
	htmlString += this.artist;
	htmlString += '<span class="duration">'
	htmlString += '</span></li>';

	return htmlString;											//returning the value and it'll be called later.
};