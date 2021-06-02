var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var database,height;
function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;
var balloonheight=database.ref("balloon/height")
balloonheight.on("value",readPosition,showError)
  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    
    //write code to move air balloon in left direction
    changePosition(-10,0)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
  }
  else if(keyDown(RIGHT_ARROW)){
   
    //write code to move air balloon in right direction
    changePosition(10,0)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
  }
  else if(keyDown(UP_ARROW)){
    
    //write code to move air balloon in up direction
    changePosition(0,-10)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale=balloon.scale-0.005
  }
  else if(keyDown(DOWN_ARROW)){
    
    //write code to move air balloon in down direction
    changePosition(0,10)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale=balloon.scale+0.005
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}


function showError(){
console.log("hi")

}
function readPosition(data){
  height=data.val()
  balloon.x=height.x
  balloon.y=height.y
}

function changePosition(x,y){
  database.ref("balloon/height").set({
      x : height.x + x,
      y : height.y + y,
  })
}
