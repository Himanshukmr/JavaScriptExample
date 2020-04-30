let arrObj = [
{id : 1, name:'a'},
{id : 2, name:'b'},
{id : 3, name:'c'}
]
//includes in Case of Object will not work
//becoz object in array and object in includes reference is not same 
console.log(arrObj.includes({id : 1, name:'a'}));

//So in this case find(Predicate) will help us
//Example: 
//If it will find on the basis of Predicate then it will return the object
console.log(arrObj.find(function(e){
	return e.id==1 && e.name =='a'
}
));
//Otherwise If it won't find on the basis of Predicate then it will return undefined
console.log(arrObj.find(function(e){
	return e.id==3 && e.name =='a'
}
));

//Also there is another method called findIndex(Predicate) which return the index at which the Predicate will be true
//Otherwise it will return -1
//Example

console.log(arrObj.findIndex(
function(e){
return e.name=='c'
}
))

console.log(arrObj.findIndex(
function(e){
return e.name=='jdvd'
}
))