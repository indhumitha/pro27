class Roof{
    constructor(){
        var opt={
            isStatic:true
        }
        this.body=Bodies.rectangle(400,30,200,10,opt)
        World.add(world,this.body)
    }
    display(){
        var poss=this.body.position
        rectMode(CENTER)
        rect(poss.x,poss.y,200,10)
    }
} 