function sumOfSquares(n) {
	if(n<=1) return n;
  return sumSqrAux(1,n,0);
}

function sumSqrAux(index,n,result){
  if(index<=n) {
    return sumSqrAux(index+1,n,result+(index*index));
  }
	return result;
}

console.log(sumOfSquares(5));
