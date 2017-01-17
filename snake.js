function Snake() {
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];

	this.eat = function(pos) {
		var d = dist(this.x, this.y, pos.x, pos.y);
		if( d < 1 ) {
			this.total++;
			return true;
		}
		else {
			return false;
		}
	}
	this.dir = function(x , y) {
		this.xspeed = x;
		this.yspeed = y;
	}
	this.death = function() {
		for (var i = 0; i < this.tail.length - 1; i++) {
			var pos = this.tail[i];
			var d = dist(this.x, this.y ,pos.x, pos.y);
			if ( d < 1) {
				noLoop();
				window.alert("DENIED");
			}
		}
	}
	this.draw = function(body) {
		this.body.forEach(function(block) {
			block.draw();
		});
	}			
	this.update = function() {
		for(var x = 0; x<this.tail.length-1; x++) {
			this.tail[x] =  this.tail[x+1];
		}
		this.tail[this.total-1] = createVector(this.x,this.y);

		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;
		if(this.x >= width) {
			this.x = 0;
		}
		if(this.x < 0) {
			this.x = width - 20;
		}
		if(this.y >= height) {
			this.y = 0;
		}
		if(this.y < 0) {
			this.y = height - 20;
		}
	}
	this.show = function() {
		if(this.total >= 8) {
			frameRate(25);
			fill(Math.floor((Math.random() * 150)), (Math.floor(Math.random() * 150)),(Math.floor(Math.random() * 150)));
		}
		else {
			fill(255);
		}
		noStroke();
		for(var y = 0; y< this.tail.length; y++) {
			rect(this.tail[y].x , this.tail[y].y , scl, scl);
		}
		rect(this.x , this.y , scl, scl);
	}
}