
user_name = "CAROLE_BRENNAN";
url = "https://defense-in-derpth.herokuapp.com/sendLocation";

// geoOptions for enhanced geotracking
var geoOptions = {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 30000
};

// processLocation -- takes in a position and performs basic operations
function processLocation(lat, lng) {
    // following code courtesy of Stack Overflow 
    var http = new XMLHttpRequest();
    var params = "login=" + user_name + "&lat=" + lat + "&lng=" + lng;

    http.open("POST", url, true);

    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.setRequestHeader("Content-type", params.length);
    
    http.onreadystatechange = function() {
	if (http.readyState == 4 && http.status == 200) {
	    dbResponse(http.responseText);
	}
    }
    
    http.send(params);
}

function dbResponse(response) {
    var parse = JSON.parse(response);
    alert(response);
}

function errorCall(e) {
    alert('ERROR(' + e.code + '): ' + e.message);
}

function init() {
    if(navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
	    processLocation(position.coords.latitude, position.coords.longitude);
	}, errorCall, geoOptions);
    }
    else {
	alert("Navigation not supported!");
    }
}
