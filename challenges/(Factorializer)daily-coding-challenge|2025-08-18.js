function factorial(n) {
  return factorialAux(1,n,1);
}

function factorialAux(index,n,result){
  if(index<=n) return factorialAux(index+1,n,result*index);
	return result;
}

console.log(factorial(5));
