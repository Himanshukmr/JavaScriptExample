

let arr = [2,4,0,-2,1,];

//Syntax : reduce((accumulator,currentValue)=>{do whatever operation},initialize accumulator with some default value)
let reducedArr = arr.reduce((accumulator,currentValue)=>accumulator + currentValue,0);

console.log('Reduced Array is : ',reducedArr);
