class Box{
    constructor(x, y, width, height, color){
      this.w=width;
      this.h=height;
      this.c=color;
      var option={
        'isStatic':false,
        'restitution':0
      }
      this.body=Bodies.rectangle(x,y,width,height,option);
      World.add(world,this.body);
    }
    display(){
      var pos=this.body.position;
      fill(this.c);
      rect(pos.x,pos.y,this.w,this.h);
    }
  }