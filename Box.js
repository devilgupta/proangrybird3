class Box extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
        this.Visblity=255;
    }
    display(){
    if(this.body.speed<3){
        super.display();
    }
    else{
        World.remove(world,this.body);
        push();
        this.Visblity=this.Visblity-5;
        tint(0, 153, 204,126);
        pop();
    }
}
}