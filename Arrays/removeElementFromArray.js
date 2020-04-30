
//Removing elements in an array

let arr = [1,2,3,4,5];

//Removing elements at the end of an array
console.log('Original Arr is : ',arr);
let e1 = arr.pop();
console.log('After pop() is invoked the Arr is : ',arr);
console.log('removed element is : ',e1)

let arr1 = [1,2,3,4];
////Removing elements at the begining of an array
console.log('Original Arr is : ',arr1);
let e = arr1.shift();
console.log('After shift() is invoked the Arr is : ',arr1);
console.log('removed element is : ',e)


let arr2 = [1,2,3,4];
////Removing elements at the middle of an array
console.log('Original Arr(arr2)is : ',arr2);
let e2 = arr2.splice(1,2);
console.log('After splice() is invoked the Arr is : ',arr2);
console.log('removed element is : ',e2)