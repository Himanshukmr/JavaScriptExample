

function sum(a,b){
	return a+b;
}

//Output 3
console.log(sum(1,2));

//Output NaN
console.log(sum(1));

//Output NaN
console.log(sum());

function add(){
	let total = 0;
	for(let val of arguments)
		total+=val;
	return total;
}

console.log(add(1,2,3,4));

function total(...args){
	return args.reduce((a,b)=>a+b);
}

console.log(total(1,2,3,4));