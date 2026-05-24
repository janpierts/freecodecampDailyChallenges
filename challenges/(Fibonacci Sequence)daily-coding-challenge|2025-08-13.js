function fibonacciSequence(startSequence, length) {
  if(startSequence.length != 2) return [];
  return _fibonacci(startSequence,length);
}

function _fibonacci(startSequence,length){
  if(length == 0) return [];
  if(length <= startSequence.length ) return startSequence.slice(0,length);
  if(length > startSequence.length) return fibonacciAux(1,startSequence,length);
}

function fibonacciAux(index,startSequence,length){
  if(index < length - 1) return fibonacciAux(index+1,[...startSequence,startSequence[index-1]+startSequence[index]],length);
  return startSequence;
}

fibonacciSequence([0, 1], 20)
