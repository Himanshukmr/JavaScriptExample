

let circle =
{
	radius : 2,
	draw : function(){
		console.log('Draw method');
	}

}

let traingle = {
	side : 3,
	perimeter : function(){
		console.log('Perimenter of Traingle');
	}
}


console.log(circle);

let another = {};

//Copy each entries from circle to another
//Example
/*
for(let key in circle)
	another[key] = circle[key];
*/

console.log('Now another is : ',another)

//Now there is another method in Object i.e assign({},{},{},...), 1st parameter is target Obj in which we have to copy and 2nd,3rd,..etc are the Object from which we want to copy property-value pair;

//Example of Object.assign:

Object.assign(another,circle,traingle);

console.log(another)

//Another simple method is by using spread operator, In this we have only pass the Object which we want to Copy 
//Example  : let targetObj = {...obj,...obj2,...obj3, so on } so in this case whatever Obj we pass that is being assign to targetObj 

let other = {};

other = {...circle,...traingle};

console.log('Other Obj is : ',other);