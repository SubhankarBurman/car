var speed,weight;
var car,wall;
var deformation;

function setup() {

  createCanvas(1200,400);

  car = createSprite(50, 200, 50, 50);

  wall = createSprite(1000,200,60,height/2)

  speed = Math.round(random(55,90));
  
  weight = Math.round(random(400,1500));

}

function draw() {

  background(255,255,255);  

  car.velocityX = speed;

  car.depth = wall.depth+1;

  if(wall.x-car.x < (car.width+wall.width)/2){

    car.velocityX = 0;
    deformation = Math.round(0.5*weight*speed*speed/22509);
    console.log(deformation);

    if(deformation>180){

      car.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100){

      car.shapeColor = color(230,230,0);

    }

    if(deformation<100){

      car.shapeColor = color(0,255,0);

    }

  }
  drawSprites();
}