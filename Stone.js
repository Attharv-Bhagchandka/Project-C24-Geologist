class Stone{
	constructor(x,y,w,h)
	{
	var options = {
		restitution:0.8,
		friction: 0.9,
		density: 12
	}
		
		this.body=Bodies.rectangle(x, y, w, h, options)
		World.add(world, this.body);

		this.width=w;
		this.height=h;
	}
	display(){
			var Pos = this.body.position;
			var Angle = this.body.angle

			push()
			rotate(Angle)
			translate(Pos.x, Pos.y);

			rectMode(CENTER)
			strokeWeight(4);
			stroke("grey");
			fill("black");
			
			rect(0, 0, this.width, this.height);

			pop()
	}

}