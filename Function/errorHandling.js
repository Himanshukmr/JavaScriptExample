

//Error Handling in JavaScript try-catch 

//var scope is function-scoped whereas let is block-scoped

let person ={
	firstName : 'Himanshu',
	lastName : 'Kumar',
	get fullName(){
		return `${person.firstName} ${person.lastName}`
	},
	set fullName(name){
		if(typeof name != 'string') {
			throw new Error('Value is not a string!');
		}
		if(!name.includes(' ')){
			throw new Error('Invalid Ags!');
		}
		let a = name.split(' ');
		this.firstName = a[0];
		this.lastName = a[1];
	}

}

try{
person.fullName ='Noida';
}
catch(e){
	console.log(e);
}
try{
person.fullName =true;
}
catch(e){
	console.log(e);
}
try{
person.fullName =12;
}
catch(e){
	console.log(e);
}
try{
person.fullName ='Mosh Hemademi';
}
catch(e){
	console.log(e);
}
console.log(person.fullName);