class Monster {
  constructor(x,y,r)
	{
		var options = { 
      density: 5, 
      frictionAir: 0
    };
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("monster1.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);
        this.Visibility=255;
	}
	display()
	{
			if(this.body.speed<10){
			var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			pop()
			}
			else{
				World.remove(world,this.body);
				push();
				this.Visibility=this.Visibility-5;
				tint(255,this.Visibility);
				image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
				pop();
			}
	}
}
