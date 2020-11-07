class Paper {
    constructor(x,y){
        var option = {
            'isStatic':false,
            'restitution':0.1,
            'friction':0.2,
            'density':1
            
        }
        this.body = Bodies.rectangle(x,y,10,10,option);
    
        
        this.image = loadImage("PAPER2.png");

        World.add(world,this.body);

    }
 displaypapers(){
     var position = this.body.position;
     imageMode(CENTER);
     fill(255);
     stroke("green");
     strokeWeight(4);
     image(this.image,position.x,position.y);
 }
}