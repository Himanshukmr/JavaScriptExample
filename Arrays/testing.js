//Testing arr on basis of method every() and some()

let arr = [1,-3,4,5,6,];

let atleastOneNegative = arr.some(e=>e<0);

console.log('atleastOneNegative : ',atleastOneNegative);

let eachOneNegative = arr.every(e=>e<0);

console.log('eachOneNegative : ',eachOneNegative);