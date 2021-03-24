var bgImg, cat, mouse, catImg1, catImg2, mouseImg1, mouseImg2, catImg3, mouseImg3;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg3 = loadAnimation("images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(400,600, 20, 20);
    cat.addAnimation("catImg1",catImg1);
    cat.scale = .2;
    mouse = createSprite(800,600, 20, 20);
    mouse.addAnimation("mouseImg1", mouseImg1);
    mouse.scale = .2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width-mouse.width)/2){
        cat.addAnimation("catHappy", catImg3);
        cat.changeAnimation("catHappy", catImg3);
        cat.velocityX = 0;
        mouse.addAnimation("mouseHappy", mouseImg3);
        mouse.changeAnimation("mouseHappy", mouseImg3);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.changeAnimation("mouseTeasing", mouseImg2);
        mouse.frameDelay = 25;
    }

    if(keyCode === RIGHT_ARROW){
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning", catImg2);
        cat.frameDelay = 25;
        cat.x = cat.x + 20;

    }

}
