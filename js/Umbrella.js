class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("../Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
     //   this.image = loadImage("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
        //load Image for BestMan
        this.batmanImg = loadImage("../Walking Frame/batman.png")

    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
       
        if(frameCount >= 200){
           image(this.batmanImg,pos.x,pos.y+80,300,300)
        }
        else {
            image(this.image,pos.x,pos.y+70,300,300);
        }
    }
}
