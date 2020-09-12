var bob,bobimg,trash1img,trash2img,trash3img

function preload(){
bobimg=loadImage("bob.png");
trash1img=loadImage("plastic_bag_PNG32.png");
trash2img=loadImage("garbage_2.jpg");
trash3img=loadImage("garbage_3.jpg");
}

function setup(){
    var canvas = createCanvas(800,600);
    bob=createSprite(200,200,10,30);
    bob.addImage(bobimg);
    bob.scale=0.1;
    trash1gr=new Group()
    trash2gr=new Group()
    trash3gr=new Group()
}
function draw(){
    background(0);
    if(keyWentDown(UP_ARROW)){
       bob.velocityY=-4
       bob.velocityX=0
    }
    if(keyWentDown(DOWN_ARROW)){
        bob.velocityY=4
        bob.velocityX=0
     }
     if(keyWentDown(RIGHT_ARROW)){
        bob.velocityX=4
        bob.velocityY=0
     }
     if(keyWentDown(LEFT_ARROW)){
        bob.velocityX=-4
        bob.velocityY=0
     }
     if(keyWentUp(UP_ARROW)){
      bob.velocityY=0
      bob.velocityX=0
   }
   if(keyWentUp(DOWN_ARROW)){
       bob.velocityY=0
       bob.velocityX=0
    }
    if(keyWentUp(RIGHT_ARROW)){
       bob.velocityX=0
       bob.velocityY=0
    }
    if(keyWentUp(LEFT_ARROW)){
       bob.velocityX=0
       bob.velocityY=0
    }
    Trash1();
    Trash2();
    Trash3();
     drawSprites()
}
 function Trash1 (){
if(frameCount%290===0){
   trash1=createSprite(random(10,790),-10,50,50)

//trash1.velocityX=0.5
trash1.velocityY=2
trash1.addImage(trash1img);
trash1.scale=0.07
trash1.lifetime=300
trash1gr.add(trash1);
}
}

function Trash2(){
   if(frameCount%355===0){
      trash2=createSprite(random(10,790),-10,50,50)
   
   //trash1.velocityX=0.5
   trash2.velocityY=2
   trash2.addImage(trash2img);
   trash2.scale=0.07
   trash2.lifetime=300
   trash2gr.add(trash2);
   } 
}

function Trash3 (){
   if(frameCount%400===0){
      trash3=createSprite(random(10,790),-10,50,50)
   
   //trash1.velocityX=0.5
   trash3.velocityY=2
   trash3.addImage(trash3img);
   trash3.scale=0.07
   trash3.lifetime=300
   trash3gr.add(trash3);
   }  
}