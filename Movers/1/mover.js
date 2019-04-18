function Mover(){
	this.location = createVector(Math.floor(random(width)),Math.floor(random(height)));

	this.velocity = createVector(random(-3),random(3));

	this.acceleration = createVector(0.02,0.02);

	this.render = function(){
		stroke(0);
		strokeWeight(1)
		fill(random(255),155,random(255));
		ellipse(this.location.x,this.location.y,50,50)

	}

	this.update = function(){
		this.velocity.add(this.acceleration);
		this.location.add(this.velocity);
	}

	this.prison = function(){
		if(this.location.x < 0 || this.location.x > width){
			this.velocity.x = this.velocity.x * -1;
		}

		if(this.location.y < 0 || this.location.y > height){
			this.velocity.y = this.velocity.y * -1;
		}
	}


}
