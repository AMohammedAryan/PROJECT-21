var bullet, wall;
var speed, weight;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);

  //speed = random(55, 90);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 60, 20);
  bullet.shapeColor = "white";

  wall = createSprite(1200, 200, thickness, 800);
  wall.shapeColor = (80, 80, 80);

  bullet.velocityX = speed;

}

function draw() {
  background(255,255,255); 

  console.log(wall.x - car.x )
  console.log(wall.x - car.x);


  if(wall.x - bullet.x < bullet.width/2 + bullet.width/2){
    damage = 0.5 * weight * speed * speed / thickness * thickness * thickness
    bullet.velocityX = 0;

    if(damage < 10){
      bullet.shapeColor = "green";
    }
    if(damage > 10){
      bullet.shapeColor = "red";
    }
  }
  
  drawSprites();
}