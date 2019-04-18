# Random Walker with 4 Outcomes

[See the Code in action](code.html)

In this file we create a Walker class which creates walker objects. Each time the step function is called on this object it selects a random number and based on that it produces an outcomes. We also constrain the x and y value using the built in constrain() function.

The main script contains the two main functions, setup() & draw(). The draw function calls the objects built in function

```js
var walker;

function setup() {
    createCanvas(320,640);
    background(127);
    walker = new Walker();
}

function draw() {
    walker.render();
    walker.step();
}
```

Within the Walker class 2 variables are set up (x&y) and values declared for them. We then have two functions added to each object. The render function draws a dot at the designated x and y coordinate.

```js
function Walker() {
    this.x = width/2;
    this.y = height/2;
    
    this.render = function() {
        stroke(0);
        point(this.x,this.y);
    }
```

The step function creates a random number between 0 and 4 and then floors its. Based on that outcome a choice is made using if then else statement which will change the x or y coordinate. On the next draw the render function will update their position.
    
```js
    this.step = function() {
        var choice = floor(random(4));
        if (choice === 0) {
            this.x++;
        } else if (choice === 1) {
            this.x--;
        } else if (choice === 2) {
            this.y++;
        } else {
            this.y--;
        }
        
        this.x = constrain(this.x,0,width);
        this.y = constrain(this.y,0,height);
    }
    
}

```
