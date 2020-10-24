var speed,weight;
var car,wall;
var deformation;

function setup() {

  createCanvas(800,400);

  car = createSprite(0, 200, 50, 50);

  wall = createSprite(700,200,60,height/2)

  speed = Math.round(random(55,90));
  
  weight = Math.round(random(400,1500));

}

function draw() {

  background("black");  

  car.velocityX = speed;

  car.depth = wall.depth+1;

  if(wall.x-car.x < (car.width+wall.width)/2){

    car.velocityX = 0;
    deformation = Math.round(0.5*weight*speed*speed/22509);

    textSize(20);
    fill("blue");
    text("Speed = "+speed,400,200);
    text("Weight = "+weight,400,230);
    text("Deformation = "+deformation,400,260);


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