var bullet,wall,speed,weight,damage,thickness;
function setup() {
  canvas=createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,50);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 50, 10);
  bullet.shapeColor="white";
  wall=createSprite(1000, 200, thickness, 200);
  wall.shapeColor="grey";
  bullet.velocityX=speed;
 
}

function draw() {
  background("black"); 
 
  if(wall.x-bullet.x<(wall.width+bullet.width)/2)
  {
    bullet.velocityX=0;
    damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    console.log(speed);
    console.log(weight);
    console.log(damage);
    if(damage>10)
    {
      wall.shapeColor="red";
    }
    else if(damage<10)
    {
      wall.shapeColor="green";
    }
    
  }
  drawSprites();
}