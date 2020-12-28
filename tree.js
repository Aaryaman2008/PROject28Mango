class Tree{
constructor(x,y,width,height){

var options ={
'isStatic':true
} 
this.x=x;
this.y=y;
this.width=450;
this.height=600;
this.wallThickness=10;
this.bottomBody = Bodies.rectangle(this.x, this.y, this.width, this.wallThickness, {isStatic:true});
this.leftBody=Bodies.rectangle(0, this.y-this.height/2,this.wallThickness,this.height,{isStatic:false});
this.rightBody=Bodies.rectangle(this.x+this.widht/2,this.y-this.height/2,this.wallThickness,this.height,{isStatic:false})
this.width = width;
this.height = height;
this.image = loadImage("tree.png");
World.add(world, this.bottomBody); 
World.add(world, this.leftBody); 
World.add(world, this.rightBody);   
}

display(){
    var posBottom=this.bottomBody.position;
    push();
    translate(posBottom.x,posBottom.y+10);
    imageMode(CENTER);
    image(this.image, 0,-this.height/2, this.width,this.height);
    pop();
    }
    }