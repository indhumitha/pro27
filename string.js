class String{
    constructor(a,b){
        var opt={
            bodyA:a,
            bodyB:b,
            length:300,
            stiffness:0.4
        }
        this.string=Constraint.create(opt)
        World.add(world,this.string)
    }
    display(){
        var poss1=this.string.bodyA.position
        var poss2=this.string.bodyB.position
        line(poss1.x,poss1.y,poss2.x,poss2.y)
    }
}