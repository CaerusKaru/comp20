var song = ["♪ ♪ ♪ My Old Kentucky Home ♪ ♪ ♪",
	    "The sun shines bright in My Old Kentucky Home,",
	    "'Tis summer, the people are gay;",
	    "The corn-top's ripe and the meadow's in the bloom",
	    "While the birds make music all the day.",
	    "The young folks roll on the little cabin floor,",
	    "All merry, all happy and bright;",
	    "By 'n' by hard times comes a knocking at the door,",
	    "Then My Old Kentucky Home, good night!",
	    "Weep no more my lady",
	    "Oh weep no more today;",
	    "We will sing one song",
	    "For My Old Kentucky Home",
	    "For My Old Kentucky Home, far away"
	   ];

var imgpath = "images/";
var img1 = imgpath + "sunshine.jpg";
var img2 = imgpath + "corn.jpg";

var el = document.getElementById("music_video");

el.addEventListener("timeupdate", function() { 
    var time = el.currentTime;
    var pb = "<p>";
    var ps = "</p>";
    var lyric = document.getElementById("lyrics");

    lyric.innerHTML = pb;

    if (time >= 0 && time < 9) {
	lyric.innerHTML += song[0];
    }
    else if (time >= 9 && time < 15) {
	lyric.innerHTML += song[1];
	lyric.innerHTML += ps + pb;
	lyric.innerHTML += "<img src=" + img1 + ' alt="sun shines" height="99" width="200">';
	lyric.innerHTML += ps;
    }
    else if (time >= 15 && time < 22) {
	lyric.innerHTML += song[2];
    }
    else if (time >= 22 && time < 28) {
	lyric.innerHTML += song[3];
	lyric.innerHTML += ps + pb;
	lyric.innerHTML += "<img src=" + img2 + ' alt="corn tops" height="79" width="200">';
	lyric.innerHTML += ps;
    }
    else if (time >= 28 && time < 36) {
	lyric.innerHTML += song[4];
    }
    else if (time >= 36 && time < 43) {
	lyric.innerHTML += song[5];
    }
    else if (time >= 43 && time < 49) {
	lyric.innerHTML += song[6];
    }
    else if (time >= 49 && time < 56) {
	lyric.innerHTML += song[7];
    }
    else if (time >= 56 && time < 64) {
	lyric.innerHTML += song[8];
    }
    else if (time >= 64 && time < 70) {
	lyric.innerHTML += song[9];
    }
    else if (time >= 70 && time < 77) {
	lyric.innerHTML += song[10];
    }
    else if (time >= 77 && time < 80) {
	lyric.innerHTML += song[11];
    }
    else if (time >= 80 && time < 84) {
	lyric.innerHTML += song[12];
    }
    else if (time >= 84) {
	lyric.innerHTML += song[13];
    }
    lyric.innerHTML += ps;
}, false);

