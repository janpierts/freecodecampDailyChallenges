function findTarget(arr, target) {
	if(arr.length<2) return false;
  return validate(1,arr,target);
}

function validate(index,arr,target){
  if(index<arr.length){
    if(arr[index-1]+arr[index]!=target)return validate(index+1,arr,target);
    return [index-1,index];
  }
  return "Target not found";
}
console.log(findTarget([2, 7, 11, 15], 9));
