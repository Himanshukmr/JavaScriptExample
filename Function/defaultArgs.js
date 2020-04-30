

function interest(principal,rate,years){
	return principal*rate/100*years;

}
console.log(interest(10000,3.5,5));


//Default Args using || operator
function interest(principal,rate,years){
	rate = rate || 3.5;
	years = years || 5;

	return principal*rate/100*years;

}

console.log(interest(10000));

//Default Args using direct assignment
function interest(principal,rate=3.5,years=5){
	return principal*rate/100*years;

}
console.log(interest(10000));
console.log(interest(10000,4));