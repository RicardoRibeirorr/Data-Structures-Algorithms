let dataArray = [[1,5,[2,45]],1,[5,6,[[3,0]]]]; //min:0; max:45


function findMaxMinValues(array){
	return binaryTree(array, {min:null,max:null});
}

function binaryTree(data, status){
	if(!Array.isArray(data)){
  	status.max == null || status.max < data ? status.max = data:false;
  	status.min == null || status.min > data ? status.min = data:false;
  }
  
  for(var i=0; i<data.length;i++){
  	status = binaryTree(data[i], status);
  }
  return status;
}

var result = findMaxMinValues(dataArray);

/* console.log(`result:${result}`); */
console.log(`Min:${result.min}; Max:${result.max}`);
