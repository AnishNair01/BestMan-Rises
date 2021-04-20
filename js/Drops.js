class Drops {
    constructor(x,y){
        var options = {
            friction:0.1,
            airFriction:0.1
        }
        this.body = Bodies.circle(x,y,5,options)
        World.add(this.body,world)
    }
    display(){
        fill("blue")
        ellipseMode(RADIUS)
        ellipse(x,y,5,5)
    }
    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,400), y:random(0,400)})
        }
    }
}