class Stone{
 
    constructor(x,y,r)
    {
      var options={
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
        }
     
     
      this.image=loadImage("Plucking mangoes/stone.png");
      this.body=Bodies.circle(this.x, this.y, this.r/2, options)
      this.r=this.r/2;
      World.add(world, this.body);
  
    }
    display()
    {
        var stonepos=this.body.position;		
        push()
        translate(stonepos.x, stonepos.y);
        // rectMode(CENTER)
        // rotate(this.body.angle)
        fill(255,0,255)
        imageMode(CENTER);
        ellipseMode(RADIUS)
        image(this.image, 0,0,this.r*2, this.r*2)
        pop()
        
    }
  
  }