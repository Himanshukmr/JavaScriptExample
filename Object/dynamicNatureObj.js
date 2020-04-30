
//Objects are dynamic in nature , means any time we can add new property and values in obj.
//Example 

let circle = {
	radius : 1

}

circle.color = 'red';
circle.draw = function(){console.log('draw circle')}


console.log(circle);

//Also we can delete any property-value pair
//Example
delete circle.color;

console.log(circle);