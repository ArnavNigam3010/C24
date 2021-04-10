class Ground{

    constructor(x,y,w,h){
        var op = {
            isStatic : true
        }
        this.body =  Matter.Bodies.rectangle(x,y,w,h,op);
        this.width = w;
        this.height = h;
        
        Matter.World.add(world, this.body);
    }

    display(){
        var pos = this.body.position
        
        rectMode(CENTER);
        fill("Blue");
        rect(pos.x, pos.y, this.width, this.height);
        
    }


}