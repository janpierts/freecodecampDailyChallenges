function evaluate(numbers, operators) {
  if(!isvalid(0,operators)) return false;
  return evaluateAux(1,numbers,operators,numbers[0],0);
}

function evaluateAux(index,numbers,operators,result,countOP){
  if(index < numbers.length){
    if(countOP>operators.length-1) countOP = 0;
    switch(operators[countOP]){
      case '+':
    		result = result+numbers[index];
        break;
      case '-':
        result = result-numbers[index];
        break;
      case '*':
        result = result*numbers[index];
        break;
      case '/':
        result = result/numbers[index];
        break;
      case '%':
        result = result%numbers[index];
        break;
    }
    return evaluateAux(index+1,numbers,operators,result,countOP+1);
  }
  return result;
}

function isvalid(index, operators){
	var _operators = ['+','-','*','/','%']
	if(index < operators.length - 1){
  	if(!_operators.includes(operators[index])) return false;
    return isvalid(index+1,operators);
  }
  return true;
}

evaluate([5, 6, 7, 8, 9], ['+', '-']);
