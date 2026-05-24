function isUnnaturalPrime(n) {
	if(n==1 || n==0 || n==-1) return false;
  return validatePrime(n<-1 ? n*-1 : n);
}

function validatePrime(n){
  if(n==2 || n==3) return true;
  if(n%2==0 || n%3==0) return false;
  if(n%Math.sqrt(n)>0) return true;
  return false;
	//console.log(n%Math.sqrt(n))
}

isUnnaturalPrime(19)
