

let arr = [1,2,3,6,1];

//indexOf(elem) provides index of arr at which it is present
//If element is not present it will return -1
console.log(arr.indexOf(1));

console.log(arr.indexOf('a'));

//Another Ex of indexOf where we can mention index from where the search will begin
console.log(arr.indexOf(1,3))


//lastIndexOf(elem) provides last index of arr at which it is present
//If element is not present it will return -1
console.log(arr.lastIndexOf(1))

console.log(arr.lastIndexOf('s'))

//Similarly a simple method includes(element) will do the same thing if 
//element is present it returns true otherwise false

console.log(arr.includes(1));
console.log(arr.includes('jk'));