

let arr = [1,2,3,4];

let otherArr = [5,6,7,8];

let combined = arr.concat(otherArr);

console.log('Combined Array is : ',combined);

let sliceArr = combined.slice(2,4)
console.log('Sliced Array is : ',sliceArr);

//By using Spread operator(we can combine 2 or more array in very simple way )
//Example

let first = [2,4,6,8,10];
let second = [1,3,5,7,9];

let combinedArr = [...first,...second];

console.log('CombinedArr By Spread Operator is : ',combinedArr)
//We can also insert elements while combining by spread operator
//Example : 

let combinedArr2 = ['a','b',...first,'c','d',23,...second,45,78];

console.log('CombinedArr2 is : ',combinedArr2)
