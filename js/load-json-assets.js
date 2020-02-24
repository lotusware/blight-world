

  var refresher = setInterval(timer, 10000);
  function timer() {$.getJSON("https://spreadsheets.google.com/feeds/list/1JPCdDNxz002gK2zQC5ailXhYwDpTXv1z7Bg8kdwckJE/1/public/full?alt=json", function(data) {

// Assign JSON to variable	// Assign variable to element
var OBSDUST = data.feed.entry[118][playerName]['$t'];	document.getElementById('OBSDUST').innerHTML = OBSDUST;



});}
