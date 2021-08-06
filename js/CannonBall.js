class CannonBall {
    constructor(x,y){
       var options={
           restitution:3.8,
           friction: 1,
           density: 1,
           isStatic:true
       };
        this.radius=40;
        this.body=Bodies.circle(x,y,this.radius,options);
        this.image = loadImage("assets/cannonball.png");
        World.add(world,this.body);
    }

    display(){
        push ();
        translate (this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode (CENTER);
        image(this.image, 0,0,this.radius,this.radius);
        pop();
    }

    shoot() {
        var velocity = p5.Vector.fromAngle(cannon.angle);
        velocity.mult(20);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
      }
}
//you got disconnected