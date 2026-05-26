function toCamelCase(s) {
  var words = s.trim().split(/[\s\-_]+/).filter(word => word !== '');
  if (words.length === 0) return '';

  return processBlankSpaces(0, words);
}

function processBlankSpaces(index, s){
  if(index == 0){
    s[index] = changeToLowerCase(0, s[index].split(''));
    return processBlankSpaces(index+1, s);
  }
  if(index < s.length){
    var data = s[index].split('');
    data[0] = changeToUpperCase(data[0]);
    s[index] = data[0] + changeToLowerCase(0, data.slice(1));
    return processBlankSpaces(index+1, s);
  }
  return s.join('');
}

function changeToLowerCase(index, s){
  var abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  if(index < s.length){
    if(abecedario.includes(s[index].toLowerCase())) s[index] = s[index].toLowerCase();
    return changeToLowerCase(index+1, s);
  }
  return s.join('');
}

function changeToUpperCase(s){
  var abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  if(abecedario.includes(s.toLowerCase())) s = s.toUpperCase();
  return s;
}

console.log(toCamelCase("hello world"));
console.log(toCamelCase("HELLO WORLD"));
console.log(toCamelCase("secret agent-X"));
console.log(toCamelCase("FREE cODE cAMP"));
console.log(toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk"));
