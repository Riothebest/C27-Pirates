class CannonBall
{
    constructor(x,y,r)
    {
        var options ={
            isStatic: true,
            restitution: 0.6,
            friction: 1,
            density: 1,
        }
        this.image = loadImage('assets/cannonball.png');
        this.body = Bodies.circle(x,y,r,options)
        this.r = r;
        this.trajectory = [];
        World.add(myWorld, this.body);
    }
    shoot()
    {
        //velocity moves with x and y direction in the vector format
       // Body.setVelocity(this.body,{x:10, y:-10});

       //it creates a 2D vector
       //force and velocity
       var loc = p5.Vector.fromAngle(cannon.angle);

       loc.mult(18);

       Body.setStatic(this.body, false);
       Body.setVelocity(this.body,{x:loc.x, y:loc.y});

    }

    display()
    {
        var pos= this.body.position;
        var angle = this.body.angle;
        push();
        
        translate(pos.x, pos.y)
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r, this.r);
        pop();

        if(this.body.velocity.x > 0 && this.body.position.x > 200)
        {
            //position is also an array
            var position = [pos.x, pos.y];
            //array inside an array
            this.trajectory.push(position);
        }

        for(var i=0; i<this.trajectory.length; i++ )
        {
            image(this.image, this.trajectory[i][0], this.trajectory[i][1], 6,6)
        }
    }
}