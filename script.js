var noon = 12;
var evening = 18; // 6PM
var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 3; // 3PM
var time = new Date().getHours();

var updateClock = function() 
{
	var timeEventJS = document.getElementById("timeEvent");
	var lolcat = document.getElementById('lolcat');
	var messageText;
	var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

	if (time == wakeupTime){
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
		messageText = "IZ TIME TO GETTUP.";
	} else if (time == napTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
		messageText = "IZ NAP TIME…";
	} else if (time == lunchTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
		messageText = "IZ NOM NOM NOM TIME!!";
	} else if (time == partyTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
		messageText = "IZ PARTEE TIME!!";
	} else if (time < noon) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
		messageText = "Good morning!!";
	} else if (time > evening) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
		messageText = "Good Evening!";
	} else {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
		messageText = "Good afternoon!";
	}

	timeEventJS.innerText = messageText;
	lolcat.src = image;

	var showCurrentTime = function()
	{
		// display the string on the webpage
		var clock = document.getElementById('clock');

		var currentTime = new Date();

		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();
		var meridian = "AM";

		// Set hours 
		if (hours >= noon) 
		{ 
			meridian = "PM"; 
		}  
		if (hours > noon) 
		{ 
			hours = hours - 12; 
		}

		// Set Minutes
		if (minutes < 10)
		{
			minutes = "0" + minutes;
		}

		// Set Seconds
		if (seconds < 10)
		{
			seconds = "0" + seconds;
		}

		// put together the string that displays the time
		var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

		clock.innerText = clockTime;
	};
	showCurrentTime();
};	
updateClock();
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

var party = function(){
	if (isPartyTime===false){
		isPartyTime = true;
		time = partyTime;
		partyTimeButton.innerText = "Party over";
		partyTimeButton.style.backgroundColor = "#0A8DAB";
	}
	else {
		isPartyTime = false;
		time = new Date().getHours();
		partyTimeButton.innerText = "PARTY TIME!";
		partyTimeButton.style.backgroundColor = "#222";
	}
};
partyTimeButton.addEventListener("click", party);

var wakeUpEvent = function() {
	wakeupTime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

var lunchEvent = function() {
	lunchTime = lunchTimeSelector.value;	
};
lunchTimeSelector.addEventListener("change", lunchEvent);

var napEvent = function(){
	napTime = napTimeSelector.value;	
};
napTimeSelector.addEventListener("change", napEvent);
