
var rng = Math.floor(Math.random() * 8);
var audio = new Audio("/Music/"+ rng +".mp3");
audio.play();


document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('memePage');
  checkPageButton.addEventListener('click', function() {  	
  	var audio = new Audio("/Music/airhorn.mp3");
	audio.play();

  // Executes the js file that replaces all the images on the page
  chrome.tabs.executeScript(null, {
    file: "memeify.js"
  });

  }, false);
}, false);