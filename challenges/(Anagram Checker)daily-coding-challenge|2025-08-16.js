function areAnagrams(str1, str2) {
	if(str1.split(' ').join('').length != str2.split(' ').join('').length) return false;
  return validate(0,str1.split(' ').join('').toLowerCase().split(''),str2.split(' ').join('').toLowerCase());
}

function validate(index,arr1,arr2){
	if(index<arr1.length){
  	if(arr2.includes(arr1[index])) return validate(index+1,arr1,arr2);
    return false
  }
  return true
}

areAnagrams("A gentleman", "Elegant man")
