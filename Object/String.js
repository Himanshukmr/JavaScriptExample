 //String Prmitive
 const str = 'My name is Himanshu';
  console.log(typeof str);
 //When we are typing .(dot) with String Prmitive then the JS Engine will wrap it to a String Object
	
 //String Object
 const newSr = new String('Kumar');
 
 console.log(typeof newSr);
 
let len = str.length;
console.log(len);
console.log(str.startsWith('My'));

console.log(str.charAt(1));
console.log(str.replace('My','Her'),str);

console.log(str.split(' ').reverse().join(' '));

console.log(str.toUpperCase());
console.log(str.toLowerCase());


let anotherStr = '    Himanshu     				'; 
console.log(anotherStr.trim());

console.log(anotherStr.trimLeft(),'Length of string is : ',anotherStr.trimLeft().length);
console.log(anotherStr.trimRight(),'Length of string is : ',anotherStr.trimRight().length);

//Example of Template Literals , Template Literal generally inclosed in bac-ticks i.e ``
let para = `Hello ! My name is 
Himanshu Kuamr.
Currently working in 'NIIT Technologies' as a Senior Software Engineer`

console.log(para)
let name = 'Kumar';
let para1 = `Hello ! My name is 
${name} .
Currently working in 'NIIT Technologies' as a Senior Software Engineer`

console.log(para1)