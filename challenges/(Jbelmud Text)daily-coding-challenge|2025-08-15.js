function jbelmu(text) {
  return jbelmuAux(0,text.split(' '),'');
}

function jbelmuAux(index,str,newStr){
  if(index<str.length){
    if(str[index].length <= 3) {
      newStr += str[index]+' '
    } else {
    	newStr = newStr+ str[index].slice(0,1)+str[index].slice(1,-1).split('').sort().join('')+str[index].slice(-1)+' ';
		}
    return jbelmuAux(index+1,str,newStr);
  }
  return newStr.trim();
}

console.log(jbelmu("hello world"));
console.log(jbelmu("i love jumbled text"));
