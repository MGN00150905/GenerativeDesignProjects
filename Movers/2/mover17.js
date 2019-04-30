function Mover(){
	//Declaring variables
	this.location = createVector(Math.floor(random(width)),Math.floor(random(height)));
	this.velocity = createVector(3,4);

	this.r = random(255);
	this.g = random(255);
	this.b = random(255);

	this.radius = random(1,20);
	console.log(this.radius);

	this.render = function(){
		noStroke();
		fill(this.r,this.g,this.b, 140);
		ellipse(this.location.x,this.location.y,random(this.radius),random(this.radius));
	}

//Updating each mover object to move relative to the mouse co-ordinates
	this.update = function(){
		var  mouse = createVector(mouseX,mouseY);
		this.acceleration = p5.Vector.sub(mouse, this.location);

		this.acceleration.normalize();
		this.acceleration.mult(0.2);

		this.velocity.add(this.acceleration);
		this.velocity.limit(10);

		this.location.add(this.velocity);

	}

//Prisoning the mover objects to the canvas
	this.checkEdges = function(){
		if(this.location.x > width || this.location.x < 0){
			this.velocity.x = this.velocity.x * -1
		}
		if(this.location.y > height || this.location.y < 0){
			this.velocity.y = this.velocity.y *  -1
		}
	}
}
