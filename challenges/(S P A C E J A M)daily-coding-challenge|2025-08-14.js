function spaceJam(s) {

  return spaceJampInit(0,s.replace(/ /g,'').split(''),'');
}

function spaceJampInit(index,array,newString){
  if(index < array.length){
    if(validate(array[index])) newString += array[index].toUpperCase()+"  ";
    else newString += array[index]+"  ";
    return spaceJampInit(index+1,array,newString);
  }
  return newString.trim();
}

function validate(str){
  return /^[A-Za-z]+$/.test(str);
}

console.log(spaceJam("freeCodeCamp"));
console.log(spaceJam("   free   Code   Camp   "));
