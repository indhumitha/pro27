class Ball{
    constructor(){
        var opt={
            isStatic:false
        }
        this.body=Bodies.circle(400,300,10,opt)
        World.add(world,this.body)
    }
    display(){
        var poss=this.body.position
        ellipseMode(RADIUS)
        ellipse(poss.x,poss.y,10,10)
    }
} 