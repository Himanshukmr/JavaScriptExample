
//Factory Function
function createCircle(radius)
{ 
	return {
	radius,          //radius : radius and radius is same when property and value will be same,	
	/*	draw : function(){
		console.log('Draw function');  and draw(){} will be same when function is inside the obj
		}
	*/
	draw(){
		console.log('Draw function');

	}			
	};
	
}

let circle1 = createCircle(1);
console.log(circle1);

let circle2= createCircle(2);
console.log(circle2);
	
	