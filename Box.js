class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          density:0.02,
          friction:0.1,
          restitution:1.0
              }
      this.body = Bodies.rectangle(x,y,width,height,options);
      
      this.Visiblity = 255;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
     console.log(this.body.speed);
     if(this.body.speed<15){
       var pos=this.body.position
       push()
       translate(pos.x,pos.y)
       rectMode(CENTER)
       fill(0)
       rect(0,0,this.width,this.height)
       pop()
     }else{
       World.remove(world,this.body)
       push()
       this.Visiblity = this.Visiblity-5;
       //tint(255,this.Visiblity)
       pop();    
      }
    }
    score(){
      if(this.visiblity<0&&this.visiblity>-1005){
        score++
      }
    }
  };