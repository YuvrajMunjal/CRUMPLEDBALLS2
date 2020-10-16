class Paper {

    constructor(x,y,radius,options){
        var options = {         
            isStatic: false,
            restitution: 0.8,
            density:5.8
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
        }   
        display(){
            var pos =this.body.position;
           
            ellipseMode(RADIUS);
            ellipse(pos.x, pos.y, this.radius);
            
          }
    
}