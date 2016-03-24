
var user_name = "CAROLE_BRENNAN";
var url = "https://stark-shore-99783.herokuapp.com/sendLocation";
var marker_path = "https://maps.gstatic.com/mapfiles/ms2/micons/";
var person_icon = marker_path + "man.png";
var place_icon = marker_path + "rangerstation.png";
var center_icon = marker_path + "POI.png";
var lat = 0;
var lng = 0;
var clat = 0;
var clng = 0;
var myPos = new google.maps.LatLng(lat, lng);
var infowindow = new google.maps.InfoWindow();
var map;
var closest = 0;
var closest_name;

var mapOptions = {
    zoom: 13,
    center: myPos,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

// geoOptions for enhanced geotracking
var geoOptions = {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 30000
};

// processLocation -- takes in a position and performs basic operations
function processLocation() {
    // following code courtesy of Stack Overflow 
    var http = new XMLHttpRequest();
    var params = "login=" + user_name + "&lat=" + lat + "&lng=" + lng;

    http.open("POST", url, true);

    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    http.onreadystatechange = function() {
	if (http.readyState == 4 && http.status == 200) {
	    dbResponse(http.responseText);
	}
    }
    
    http.send(params);
}

function dbResponse(response) {
    var parse = JSON.parse(response);
    var dist;
    for (var key in parse) {
	if (key == "people" && parse.hasOwnProperty(key)) {
	    for (var i = 0; i < parse[key].length; i++) {
		var obj = parse[key][i];
		if (obj.login != user_name) {
		    addToMap(obj.lat, obj.lng, obj.login, key);
		}
	    }
	}
	if (key == "landmarks" && parse.hasOwnProperty(key)) {
	    for (var i = 0; i < parse[key].length; i++) {
		var obj = parse[key][i];
		var coord = parse[key][i].geometry.coordinates;
		var place_name = parse[key][i].properties.Details;
		dist = haversine(coord[1], coord[0]);
		if (closest == 0 || dist < closest) {
		    clat = coord[1];
		    clng = coord[0];
		    closest = dist;
		    closest_name = parse[key][i].properties.Location_Name;
		}
		addToMap(coord[1], coord[0], place_name, key);
	    }
	}
    }
    var curtitle = "<b>Current Location</b><BR><BR><b>Closest Landmark: </b><BR>" +
	closest_name + "<BR>" + "<b>Distance: </b>" + closest + " mi";
    var d1 = {lat: lat, lng: lng};
    var d2 = {lat: clat, lng: clng};

    var linePath = [
	d1,
	d2
    ];
    var path = new google.maps.Polyline({
	path: linePath,
	strokeColor: '#0000FF',
	strokeOpacity: 0.45,
	strokeWeight: 5
    });
    path.setMap(map);
    addToMap(lat, lng, curtitle, "main");
}

function errorCall(e) {
    alert('ERROR(' + e.code + '): ' + e.message);
}

function init() {
    if(navigator.geolocation) {
	map = new google.maps.Map(document.getElementById("map"), mapOptions);
	navigator.geolocation.getCurrentPosition(function(position) {
	    lat = position.coords.latitude;
	    lng = position.coords.longitude;
	    renderMap();
	    processLocation();
	}, errorCall, geoOptions);
    }
    else {
	alert("Navigation not supported!");
    }
}

// credit to COMP 20 example on Google Maps
function renderMap() {
    myPos = new google.maps.LatLng(lat, lng);
    map.panTo(myPos);
}

Number.prototype.toRad = function() {
    return this * Math.PI / 180;
}

function haversine(lat1, lng1) {
    var R = 6371;
    var x1 = lat - lat1;
    var dLat = x1.toRad();
    var x2 = lng - lng1;
    var dLon = x2.toRad();
    var a = Math.sin(dLat/2) * Math.sin(dLat / 2) +
	Math.cos(lat1.toRad()) * Math.cos(lat.toRad()) *
	Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;

    return d * 0.621372;
}

function addToMap(lat, lng, title, type){
    var img;
    if (type == "landmarks") {
	img = place_icon;
    }
    else if (type == "people") {
	img = person_icon;
	var dist = haversine(lat, lng);
	title = "<b>Login: </b>" + title + "<BR><b>Distaince: </b>" + dist + " mi";
    }
    else {
	img = center_icon;
    }

    var pin = new google.maps.Marker({
	animation: google.maps.Animation.DROP,
	position: {lat, lng},
	title: title,
	map: map,
	icon: img
    });

    pin.setMap(map);

    google.maps.event.addListener(pin, 'click', function() {
	infowindow.setContent(pin.title);
	infowindow.open(map, pin);
    });
}
