var player;
var target;
function setup() {
  createCanvas(600,600);//how much area of the screen this game occupies
 player= createSprite(50,560,30,30);//sprite used for creating animations 
 target= createSprite(560,50,30,30);
 player.shapeColor="white";
 target.shapeColor="pink";
 obstacle1= createSprite(70,200,100,20);
 obstacle2= createSprite(560,360,100,20);
 obstacle3= createSprite(70,200,100,20);
 obstacle4= createSprite(530,360,100,20);
 obstacle1.shapeColor="orange";
 obstacle2.shapeColor="orange";
 obstacle3.shapeColor="orange";
 obstacle4.shapeColor="orange";
 obstacle1.velocityX=3;
 obstacle2.velocityX=-3;
 obstacle3.velocityX=3;
 obstacle4.velocityX=-3;
 edges=createEdgeSprites();

}

function draw() {
  background("midnightblue");  
  //draw used for making changes eg-colour change
  drawSprites();//responsible for visibility of the sprite
  obstacle1.bounceOff(edges[1]);
  obstacle1.bounceOff(edges[0]);
  obstacle2.bounceOff(edges[1]);
  obstacle2.bounceOff(edges[0]);
  obstacle3.bounceOff(edges[1]);
  obstacle3.bounceOff(edges[0]);
  obstacle4.bounceOff(edges[1]);
  obstacle4.bounceOff(edges[0]);

  if(keyDown("up"))//keyDown it ckecks whether it has been ppressed or not
  {
    player.y=player.y-3;
  }

  if(keyDown("down"))
  {
    player.y=player.y+3;
  }
  if(keyDown("right"))
  {
    player.x=player.x+3;
  }

  if(keyDown("left"))
  {
    player.x=player.x-3;
  }
  if(player.isTouching(target))
  {
    text("you win",300,300)
    player.x=50
    player.y=560
  }
  if(player.isTouching(obstacle1))
  {
    text("you lose",300,300)
    player.x=50
    player.y=560
  }
  if(player.isTouching(obstacle2))
  {
    text("you lose",300,300)
    player.x=50
    player.y=560
  }

}

