# Array of movers

[See code in action](https://mgn00150905.github.io/GenerativeDesignProjects/Movers/2) (Ctrl/Cmnd Click to open in new tab)

* In these sketches, a Mover class is created that creates mover objects.
* The main script contains the two main functions, setup() & draw(). The draw function calls the objects built in function
* When drawing the mover objects, there are 3 different functions being called.
- checkEdges() - to ensure each mover object does not leave the canvas
- render() - To render what each object will look like
- update() - Moving each object using acceleration and velocity
```js
var movers = [];//array of movers
var vol = 1000; //number of movers
var text;

function setup() {
    createCanvas(1400,600);


    for(var i =0; i<vol;i++){
        movers[i]=new Mover()
    }
}

function draw() {
    background(0);
    String("Nature of code - Vectors",0,0);

    for(var i=0;i<vol;i++){
        movers[i].checkEdges();
        movers[i].render();
        movers[i].update();
    }

}
```

* The following code is the update function taken from the mover class in mover17.js.
* 'mouse' is made equal to the current mouse X and Y position. A built in p5 function called p5.vector.sub is used to subtract the current mouse position from the current location of each object.
* This technique was used to attract each object to the mouse position as shown in the example. (After adding velocity)

```js
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
```
