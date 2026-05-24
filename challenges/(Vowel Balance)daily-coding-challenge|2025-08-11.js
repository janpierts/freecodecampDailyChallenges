  function isBalanced(s) {
    return validateBalance(s);
  }

  function validateBalance(s){
    return _validateBalance(0,s.split(""),s.length % 2 == 0? true : false,0,0);
  }

  function _validateBalance(index,s,par,count1,count2){
    if(index < s.length){
      if(par){
          if(index < s.length/2) count1 = count1+validationAux(0,s[index]);
        if(index >= s.length/2) count2 = count2+validationAux(0,s[index]);
        return _validateBalance(index+1,s,par,count1,count2);
      }else{
        //console.log(s.length);
        if(index+1 == Math.ceil(s.length/2)) return _validateBalance(index+1,s,par,count1,count2);
              if(index < Math.ceil(s.length/2)) count1 = count1+validationAux(0,s[index]);
        if(index > Math.floor(s.length/2)) count2 = count2+validationAux(0,s[index]);
        return _validateBalance(index+1,s,par,count1,count2);
      }
    }
    //console.log("count1: ", count1)
    //console.log("count2: ", count2)
    return count1 == count2 ? true:false;
  }

  function validationAux(index,_letter){
    var vowels = ["a","e","i","o","u"];
    if(index < vowels.length){
      if(_letter.toLowerCase().includes(vowels[index])) return 1;
      return validationAux(index+1,_letter);
    }
    return 0;
  }


  //isBalanced("racecar")
  //isBalanced("Lorem Ipsum")
  isBalanced("123A#b!E&*456-o.U")
