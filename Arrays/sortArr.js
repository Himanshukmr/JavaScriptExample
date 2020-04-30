


//Sort Array

let arr = [2,3,1];

let sortedArr = arr.sort();

console.log('Sorted Array is : ',sortedArr);

let reverseArr = arr.reverse();

console.log('Reverse Array is : ',reverseArr);

let objArr = [
{id : 1,name : 'kumar'},
{id : 2,name : 'himanshu'},
{id : 3,name : 'abc'},
{id : 4,name : 'cde'},
]

let sortObjArr = objArr.sort((e1,e2)=>{
	if(e1.name > e2.name) return 1;
	if(e1.name < e2.name) return -1;
	return 0;
})

console.log('Sorted Obj Array is : ',sortObjArr);