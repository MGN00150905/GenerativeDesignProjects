var movers = [];
var rats = 1700;
var text;

function setup() {
    createCanvas(1400,600);


    for(var i =0; i<rats;i++){
        movers[i]=new Mover()
    }
}

function draw() {
    background(0);
    String("Nature of code - Vectors",0,0);

    for(var i=0;i<rats;i++){
        movers[i].checkEdges();
        movers[i].render();
        movers[i].update();
    }




    
}