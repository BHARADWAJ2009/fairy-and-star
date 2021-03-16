var fairy, fairyimage,backgroundimage,star,starimage;
var invisble;



function preload()
{
   //fairyimage = loadImage("images/fairy1.png")
   fairyimage = loadAnimation("images/fairy1.png","images/fairy2.png")
   backgroundimage = loadImage("images/starnight.png")
   starimage = loadImage("images/star.png")
}

function setup() {
	createCanvas(800, 750);

  fairy = createSprite(400,250,100,100);
  fairy.addAnimation("fairy",fairyimage);
  fairy.scale = 0.3;

  star =createSprite(700,100,60,60);
  star.addImage("star",starimage);
  star.scale = 0.1

  invisible = createSprite(790,325,100,750)
  invisible.visible = false;
  fairy.setCollider("rectangle",10,10,1500,1500);
  fairy.debug = true
  
}


function draw() {
  background(backgroundimage);
  drawSprites();
  fairy.collide(invisible)

  
  
  

  

  

  if (keyCode===RIGHT_ARROW){
    fairy.velocityX = 2
  }

  if (keyCode===DOWN_ARROW){
    star.velocityY = 2
  }


  if (fairy.isTouching(star)){
    star.velocityY = 0
  }

}
