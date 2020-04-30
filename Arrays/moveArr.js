

let arr = [2,1,6,3,-1,9];

console.log(move(arr,1,-1));

function move(arr,index,offset)
{
	let arr1 = [...arr];
	let position = index + offset;
	
	if(position>=arr.length || position < 0){
		console.log("Invalid offset");
		return;
	}
	
	let element = arr1.splice(index,1)[0];
	
	console.log('Element ===>',element);
	
	arr1.splice(position,0,element);

	return arr1;

}