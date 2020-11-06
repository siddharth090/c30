var box1, box2, box3, box4, gun;
function setup() {
  createCanvas(1200,800);

  box1 = createSprite(500, 50, 50, 80);
  box1.shapeColor = "red";
  box1.debug = true;
  box1.velocityY = -1;
  
  box2 = createSprite(600, 50, 50, 80);
  box2.shapeColor = "red";
  box2.debug = true;
  box2.velocityY = -1;
 
  box3 = createSprite(700, 50, 50, 80);
  box3.shapeColor = "red";
  box3.debug = true;
  box3.velocityY = -1;
  
  box4 = createSprite(800, 50, 50, 80);
  box4.shapeColor = "red";
  box4.debug = true;
  box4.velocityY = -1;

  box5 = createSprite(500, 30, 1000, 80);
  box5.shapeColor = "black";
  box5.debug = true;
  
  gun = createSprite(800, 400,10,30);
  gun.shapeColor = "blue";
  gun.debug = true;
  gun.velocityY = -10;

    var options = {
     bodyA : gun.body,
    
     length : 10,    
     stiffness: 0.04
    }
  function mousepressed(event){
  console.gun();
  }
}

function draw() {
  background(44);  
  drawSprites();
  
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();

  strokeWeight(5);
}
function mouseDragged(){
  gun.Body.setPosition(gun.body, {x: mouseX , y: mouseY});
}

function keyPressed(){
  if(keyCode === 32){
      gun.attach(gun.body);
  }
}