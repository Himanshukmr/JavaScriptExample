

//Hoisting is a process of moving function declaration to top of the file by JavaScript Engine 
move();

//Function Declaration
function move(){
	console.log('walk');

}

//Annonymous Function Expression 
let run = function(){
	console.log('run')
};


//Named Function Expression 
let runOther = function runFun(){
	console.log('run Other Function')
};

run();
runOther();
move();




