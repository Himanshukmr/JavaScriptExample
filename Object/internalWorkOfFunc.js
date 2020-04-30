
//Internal working of Function using constructor

//Actually Function are Object
//Example

/*
function Circle(radius)
{ 
	this.radius = radius,
	this.draw = function draw(){
		console.log('Draw function by Constructor Function');
	}			
}
*/
let circle1 = new Function('radius',`
	this.radius = radius,
	this.draw = function draw(){
		console.log('Draw function by Constructor Function');
	}

`);
console.log(new circle1(2));
