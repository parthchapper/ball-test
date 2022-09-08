var ball 
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,20,20)
}

function draw() 
{
  background("yellow");
  
  
  
  if (keyIsDown(RIGHT_ARROW)){
    ball.x=ball.x+4
    
  }
  
  if (keyIsDown(LEFT_ARROW)){
    ball.x=ball.x-4
    
  }
  if (keyIsDown(DOWN_ARROW)){
    ball.y=ball.y+4
    
  }
  
  if (keyIsDown(UP_ARROW)){
    ball.y=ball.y-4
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites()
}