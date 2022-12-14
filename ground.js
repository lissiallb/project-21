class Ground
{
    constructor(x, y, w, h)
    {
        let groundo = 
        {
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, w, h, groundo);
        World.add(world, this.body);
    }

    display()
    {
        var groundPos=this.body.position;
        push();
        translate(groundPos.x, groundPos.y);
        rectMode(CENTER);
        strokeWeight(4);
        fill("lightblue");
        rect(0, 0, this.w, this.h);
        pop();

    }
}