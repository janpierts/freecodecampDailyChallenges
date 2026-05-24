function groupAnagrams(words) {
  var groupWord = getGroupWord(0, words, []);
  return buildAnagram(0,words,groupWord,[]);
}

function getGroupWord(index, words, group) {
  if (index < words.length){
    if(index == 0){
      var word = words[index].split("");
      group = [...group ,word];
      return getGroupWord(index+1,words,group);
    }else{
      if(validateNonRepeat(words[index],group)){
        var word = words[index].split("");
      	group = [...group ,word];
      }
      return getGroupWord(index+1,words,group);
    }
  }
  return group;
}

function validateNonRepeat(word, group){
	return !validateNonRepeatAux(0,word,group);
}

function validateNonRepeatAux(index,word,group){
  if(index<group.length){
    if(word.length != group[index].length) return validateNonRepeatAux(index+1,word,group);
    if(validateIncludes(0,word,group[index])) return true;
    return validateNonRepeatAux(index+1,word,group);
  }
  return false;
}

function validateIncludes(index,word,group){
  if(index<group.length){
    if(word.includes(group[index])) return validateIncludes(index+1,word,group);
    return false;
  }
  return true;
}

function buildAnagram(indexG,words,groupWord,anagram){
  if(indexG<groupWord.length){
    var _dataGroup = validateGroupIncludes(0,words,groupWord[indexG],[]);
    anagram = [...anagram, _dataGroup];
    return buildAnagram(indexG+1,words,groupWord,anagram);
  }
  return anagram;
}

function validateGroupIncludes(index,words,group,newList){
  if(index<words.length){
    if(words[index].length != group.length) return validateGroupIncludes(index+1,words,group,newList);
    if(validateIncludes(0,words[index],group)) newList = [...newList, words[index]];

    return validateGroupIncludes(index+1,words,group,newList);
  }
  return newList;
}

console.log(groupAnagrams(["listen", "silent", "hello", "enlist", "world"]));
