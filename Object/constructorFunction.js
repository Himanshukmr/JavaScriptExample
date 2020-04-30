
//Constructor Function
function Circle(radius)
{ 
	this.radius = radius,
	this.draw = function draw(){
		console.log('Draw function by Constructor Function');
	}			
}

let circle1 = new Circle(1);
console.log(circle1);

let circle2= new Circle(2);
console.log(circle2);
	
	