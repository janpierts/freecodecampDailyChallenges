/*
function squaresWithThree(n) {
  return validate(1,n,0);
}

function validate(index,n,count){
  if(index>n) return count;
  if(String(index*index).includes(String(3))) count+=1;
  return validate(index+1,n,count);
}
// can uncomment to test in personal web browser*/

function squaresWithThree(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (String(i * i).includes('3')) count++;
  }
  return count;
}
squaresWithThree(10000);
