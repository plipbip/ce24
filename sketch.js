const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body


var particles=[];
var plinko=[];
var divisions=[];
var divisionHeight=300;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground= new Ground(240,740,500,10)

  for(var k=0;k<480;k=k+60){
    divisions.push(new Division(k,580,10,divisionHeight));
  }
  for(var j=50;j<430;j=j+50){
    plinko.push(new Plinko(j,100));
  }
  for(var j=50;j<430;j=j+50){
    plinko.push(new Plinko(j,200));
  }
  for(var j=50;j<430;j=j+50){
    plinko.push(new Plinko(j,300));
  }

Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background("black"); 

  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for(var j=0;j<plinko.length;j++){
    plinko[j].display();
  }
  for(var i=0;i<particles.length;i++){
    particles[i].display();
  }
  ground.display
  mousePressed();
}

function mousePressed(){
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10))
}



}
