const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,300,70,70);
    box2 = new Box(750,300,70,70);
    
    box3 = new Box(1000,195,70,70);
    box4 = new Box(750,195,70,70);

    box5 = new Box(850, 135, 70, 70);

    ground = new Ground(600,580,1200,40);

    pig1 = new Pig(850, 300);
    pig2 = new Pig(850, 195);

    log1 = new Log(850, 285, 400, 30, 0);
    log2 = new Log(850, 185, 400, 30, 0);

    log3 = new Log(800,125,150,30,-PI/4);
    log4 = new Log(950,125,150,30,PI/4);

    bird = new Bird(200,300);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display(); 
    pig1.display(); 
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}