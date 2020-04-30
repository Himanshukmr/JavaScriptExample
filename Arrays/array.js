//Adding Elements in Array
const arr = [2,3,4];

console.log('Original array : ',arr)

//Adding at the End of Array 

arr.push(5);
console.log('After adding element at the end of Array : ',arr);

//we can also add more than 1 element at one time Ex:
arr.push(6,7);
console.log('After adding 2 element at the end of Array : ',arr);

//Adding at the Begining of Array 
let arrOther = [3,5,9,11];

arrOther.unshift(1);
console.log('After adding 1 element at the begining of Array : ',arrOther);

//we can also add more than 1 element at one time Ex :
arrOther.unshift(10,-2);
console.log('After adding 2 element at the begining of Array : ',arrOther);

//Adding at the Begining of Array 

let arrAnother = [3,5,11];
//Syntax of splice() : splice(index at which elemet will be added,no. of elements to be deleted,Elements to be added in array)
arrAnother.splice(2,0,'a','jjaja'); 
console.log('After adding 2 element at the some index of Array : ',arrAnother);