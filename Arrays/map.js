


let arr = [2,4,5,0,-2,1,3];


//Syntax : filter(Function)
let mappedArr = arr.map(e=>e*2);

console.log('Mapped Array is : ',mappedArr);



//Note: while returning a object in a single line wrap the object in () if not it will treat the {} as code block
//and the output will be different than what we expected.
let mappedArrObj = arr.map(e=>({value : e}));
console.log('Mapped Array Object is : ',mappedArrObj);

//The above methods are  chaininable 
//Example

let mapp = arr.filter(n=>n>0)
			  .map(n=>({value : n}));
			  
console.log('Mapp is  : ',mapp);