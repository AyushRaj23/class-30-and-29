class Block7 extends BaseClass {
    constructor(x,y){
      super(x,y,100,60);
      this.image = loadImage("Images/white.png");
      this.Visibility = 255;
    }
  
    display(){
      if(this.body.speed<3){
        super.display();
        image(this.image,this.body.position.x,this.body.position.y,105,80);
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility);
        image(this.image,this.body.position.x,this.body.position.y,105,80);
        pop();
      }
    }
  
    score(){
      if(this.Visibility<0 && this.Visibility>-1005){
        score++;
      }
    }
  };