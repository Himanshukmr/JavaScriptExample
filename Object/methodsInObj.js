
//Methods availavle in Function



function Circle(radius)
{ 
console.log("Called===>",radius);

	this.radius = radius,
	this.draw = function draw(){
		console.log('Draw function by Constructor Function');
	}			
}

let circle1 = new Circle(1);

//And are same means  new Circle(1) and Circle.call({},1) will same and calls the Circle Object

//Again in call({},1,2,3)  Here {} is obj and 1,2,3,etc. are arguments for the obj Circle 
Circle.call({},3)
Circle.call({},5);

Circle.apply({},[7]);

//Diff b/w call and apply method of Object ,In call arguments passes as 1,2,3,etc. while in apply the args are passed in a array [1,2,3,etc.]

