const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var world,engine
var roof,ball,string

function setup() {
  createCanvas(800,400);
 engine=Engine.create()
 world=engine.world
 roof=new Roof()
 ball=new Ball()
 string=new String(roof.body,ball.body)
 console.log(roof.body)
}

function draw() {
  background(255,255,255);  
 Engine.update(engine)
 roof.display()
 ball.display()
 string.display()
}
function keyPressed(){
  if (keyCode===32){
    Matter.Body.applyForce(ball.body,ball.position,{x:0.2,y:0.2})
  }
}