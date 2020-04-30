

let circle = {
	radius : 1,	
	location : {
		x : 1,
		y : 2
	},
	draw : function(){
		console.log('Draw function');
	}
	
	};
	//If a function is a part of object then it is called method.
	console.log(circle.draw());
	console.log(circle['radius']);
	console.log(circle.location.x ," ",circle.location.y);
	