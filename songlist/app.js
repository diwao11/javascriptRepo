var playlist = new Playlist();

var toLiveandDieinLa = new Song("To Live and Die in LA", "Tupac", "3:30");
var hypnotize = new Song("Hypnotize", "Biggie", "3:20");

var manOfSteel = new Movie("Man of Steel", 2013, "2:00:00");

playlist.add(toLiveandDieinLa);
playlist.add(hypnotize);
playlist.add(manOfSteel);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function(){
	playlist.play();
	playlist.renderInElement(playlistElement);
}
var playButton = document.getElementById("next");
playButton.onclick = function(){
	playlist.next();
	playlist.renderInElement(playlistElement);
}
var playButton = document.getElementById("stop");
playButton.onclick = function(){
	playlist.stop();
	playlist.renderInElement(playlistElement);
}