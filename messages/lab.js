
var url = "https://messagehub.herokuapp.com/messages.json";
var file = "data.json";
var use_resource = file;
var header = "messages";
var http = new XMLHttpRequest();

function parse() {

    http.open("GET", use_resource, true);
    
    http.onreadystatechange = (function() {
	if (http.readyState == 4 && http.status == 200) {
	    var parse = JSON.parse(http.responseText);
	    var el = document.getElementById(header);
	    for (var i = 0; i < parse.length; i++) {
		el.innerHTML += "<p>" + parse[i].content + " " + parse[i].username + "</p>";
	    }
	}
    });
    
    http.send(null);
}
