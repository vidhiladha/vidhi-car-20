var car , wall;
var speed , weight

function setup(){
 createCanvas(1600,400);
  
 
 car = createSprite(50,200,50,50);

 car.velocityX = speed;
 car.shapeColor = "blue";

 wall = createSprite(1500,200,60,height/2);
 wall.shapeColor = "pink";


}

function draw(){
 background(225,225,225);

 car.x = World.mouseX ;
      car.y = World.mouseY;

 if(wall.x=car.x < (car.width+wall.width)/2)
 {
  car.velocityX=0;
 var defromation = 0.5 + weight + speed + speed/22509;
 if(defromation>180)
 {
     car.shapeColor = Color(255,0,0);
 }

 if(defromation<180 && defromation>100)
 {
     car.shapeColor = Color(230,230,0);
 }
 if(defromation<100)
 {
     car.shapeColor = Color(0,255,0);
 }
 }
 
 if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 +car.width/2
    && car.y - wall.y < wall.height/2 + car.height/2
    &&  wall.y - car.y < wall.height/2 + car.height/2){
car.shapeColor = "red"; 
wall.shapeColor = "red"; 
}
else {
car.shapeColor = "green";
wall.shapeColor = "green";
}



 drawSprites();

}