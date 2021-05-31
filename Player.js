class player{


constructor(x,y){

this.x=x;

this.y=y;

this.spt=createSprite(this.x,this.y,50,50)

this.spt.shapeColor="orange"


}

move(Xdir,Ydir){
    
    this.spt.x += Xdir*grid;

    this.spt.y += Ydir*grid;
}





}