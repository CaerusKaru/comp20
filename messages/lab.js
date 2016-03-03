
var url = "https://messagehub.herokuapp.com/messages.json";
var file = "data.json";
var use_resource = file;
var header = "messages";
var http = new XMLHttpRequest();
var hs = '<span class="message">';
var he = '</span>';
var br = '<br /><br />';

function parse() {

    http.open("GET", use_resource, true);
    
    http.onreadystatechange = (function() {
	if (http.readyState == 4 && http.status == 200) {
	    var parse = JSON.parse(http.responseText);
	    var el = document.getElementById(header);
	    for (var i = 0; i < parse.length; i++) {
		el.innerHTML += hs + parse[i].content + " " + parse[i].username + he + br;
	    }
	}
    });
    
    http.send(null);
}
