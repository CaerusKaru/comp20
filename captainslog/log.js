// javascript file for lab 7 -- captains lgo

var padding = " - ";
var brk = "<br />"

$(document).ready(function() {

    var full_log = "";
    if(JSON.parse(localStorage.getItem("log")) != "")
	full_log = JSON.parse(localStorage.getItem("log"));
    $("#log").html(full_log);
    $("input").change(function(event) {
	var today = new Date();
	var date_string = today.toString();
	var prev = brk + $("#log").html();
	var log = date_string + padding + $("input").val() + prev;
	full_log = log;
	localStorage.setItem("log", JSON.stringify(full_log));
	$("#log").html(log);
    });

});
