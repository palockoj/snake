var s;
var scl = 20;
var food;
var bool = false;
var img;

function preload() {
 mySound = loadSound('MLGSONG.mp3');
 mySound2 = loadSound('MLGCLICKER.mp3');
 img = loadImage("MLGSMOKE.jpg");
}

function setup() {
	mySound.setVolume(0.1);
	mySound2.setVolume(0.5);
  	mySound.play();
	createCanvas(700,700);
	s = new Snake();
	frameRate(10);
	pickLocation();
}
function pickLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}
function draw() {
	console.log(s.total);
	if(s.total >= 15 && s.total < 25 ) {
		frameRate(60);
		background(Math.floor((Math.random() * 150)), (Math.floor(Math.random() * 150)),(Math.floor(Math.random() * 150)));
	} else if(s.total >= 25) {
		if (s.total === 25  && bool === true) {
			window.alert("WHAT ARE U GONNA SAY NOW ?");
			bool = false;
		}
		frameRate(90);

	} else if(s.total >= 40) {
		noLoop();
		windowAlert("GG WP. U WON. NOW GET A JOB");
	} else {
		background(000);
	}
	s.death();
	s.update();
	s.show();
	if(s.eat(food)) {
		pickLocation();
	}
	if( s.total >= 5 && s.total < 10) {
		frameRate(20);
		if (s.total === 5 && bool === false) {
			window.alert("DROP IT");
			bool = true;
		}
		fill(Math.floor((Math.random() * 150)), (Math.floor(Math.random() * 150)),(Math.floor(Math.random() * 150)));
	} else if(s.total >= 10) {
		set(0, 0, img);
	}
	else {
		fill(255,0,255);
	}
	rect(food.x, food.y, scl, scl);
}

function keyPressed() {
	mySound2.play();
	if(keyCode === UP_ARROW) {
		if(s.yspeed != 1) {
			s.dir(0, -1);
		}
	}
	else if(keyCode === DOWN_ARROW) {
		console.log(s.yspeed);
		if(s.yspeed != -1) {
			s.dir(0, 1);
		}
	}
	else if(keyCode === LEFT_ARROW) {
		if(s.xspeed != 1) {
			s.dir(-1, 0);
		}
	}
	else if(keyCode === RIGHT_ARROW) {
		if(s.xspeed != -1) {
			s.dir(1, 0);
		}
	}
}