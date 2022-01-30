let nums = [2,3,4,6,7,9,10,20];

function binarySearch(array, target){
	let [left, right] = [0, array.length-1];

  while(left <= right){
  console.log("try")
  	let mid = Math.floor((left + right) / 2);
    
    if(target === array[mid]) return mid;  //mid is the number
    else if(target < array[mid]) right = mid - 1; //short right side because it's bigger
    else left = mid + 1; //higher up left side because it's lower
  }
  
  return -1;
}


console.log("Index is: ", binarySearch(nums,7))
