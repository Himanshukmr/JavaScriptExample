

let circle =
{
	radius : 2,
	draw : function(){
		console.log('Draw method');
	}

}

for(let key in circle)
	console.log(key, '  ',circle[key]);

//By using keys of Object, it will return Array of property of circle(Object)
for(let key of Object.keys(circle))
	console.log(key);

//By using entries of Object,it will return Array of property-value pair of circle(Object)
for(let entry of Object.entries(circle))
	console.log(entry);


//Here 'in' checks whether the property exist in Object or not
if('radius' in circle)
	console.log('Yes');

