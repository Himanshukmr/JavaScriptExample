

let person ={
	firstName : 'Himanshu',
	lastName : 'Kumar',
	get fullName(){
		return `${person.firstName} ${person.lastName}`
	},
	set fullName(name){
		if(typeof name != 'string') {
			console.log('Invalid Argument!')
			return;
		}
		let a = name.split(' ');
		this.firstName = a[0];
		this.lastName = a[1];
	}

}
console.log(person);
console.log(person.fullName);
person.fullName =true;
person.fullName =12;
person.fullName ='Mosh Hemademi';
console.log(person.fullName);