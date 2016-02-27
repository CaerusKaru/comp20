song = ["♪ ♪ ♪ My Old Kentucky Home ♪ ♪ ♪",
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

var el = document.getElementById("music_video");

el.addEventListener("timeupdate", function() { 
    var time = el.currentTime;
    var pb = "<p>";
    var ps = "</p>";
    var lyric = document.getElementById("lyrics");
    if (time >= 0 && time < 9) {
	lyric.innerHTML = pb + song[0] + ps;
    }
    else if (time >= 9 && time < 15) {
	lyric.innerHTML = pb + song[1] + ps;
    }
    else if (time >= 15 && time < 22) {
	lyric.innerHTML = pb + song[2] + ps;
    }
    else if (time >= 22 && time < 28) {
	lyric.innerHTML = pb + song[3] + ps;
    }
    else if (time >= 28 && time < 36) {
	lyric.innerHTML = pb + song[4] + ps;
    }
    else if (time >= 36 && time < 43) {
	lyric.innerHTML = pb + song[5] + ps;
    }
    else if (time >= 43 && time < 49) {
	lyric.innerHTML = pb + song[6] + ps;
    }
    else if (time >= 49 && time < 56) {
	lyric.innerHTML = pb + song[7] + ps;
    }
    else if (time >= 56 && time < 64) {
	lyric.innerHMTL = pb + song[8] + ps;
    }
    else if (time >= 64 && time < 70) {
	lyric.innerHTML = pb + song[9] + ps;
    }
    else if (time >= 70 && time < 77) {
	lyric.innerHTML = pb + song[10] + ps;
    }
    else if (time >= 77 && time < 80) {
	lyric.innerHTML = pb + song[11] + ps;
    }
    else if (time >= 80 && time < 84) {
	lyric.innerHTML = pb + song[12] + ps;
    }
    else if (time >= 84) {
	lyric.innerHTML = pb + song[13] + ps;
    }
}, false);

