//Various ways to Iterate an Array

let arr = [1,2,3,4,5];

//Iterating through for-of loop

for(let val of arr)
	console.log(val);
	
console.log();

//Iterating through forEach Method
arr.forEach(n=>console.log(n));

console.log();

//Iterating through forEach Method with index
arr.forEach((element,index)=>console.log(index , ' ',element));