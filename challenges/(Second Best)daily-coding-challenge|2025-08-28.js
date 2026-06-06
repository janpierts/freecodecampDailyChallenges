function getLaptopCost(laptops, budget) {
	var data=[];
  for(var i = 0; i < laptops.length; i++){
    if (laptops[i] == budget) return budget;
    if(laptops[i]<budget){
      data.push(laptops[i])
    }
  }
  if(data.length == 0) return 0;
  return getSecondMax(data,budget);
}

function getSecondMax(data,budget){
  for(var i = 0; i < data.length; i++){
    //console.log('i: ',i)
    if(i!=0){
      var dato;
      if(data[i-1]<data[i]){
        dato = data[i-1];
        data[i-1] = data[i];
        data[i] = dato;
      }
    }
  }
  var first_dato = data[0]/100;
  var budget_dato = budget/100;
  if(Number(String(first_dato).split('')[0]) == Number(String(budget_dato).split('')[0]) && Number(String(first_dato).split('')[1])!==0) return data[0];
  return data[1];
}

console.log(getLaptopCost([1500, 2000, 1800, 1400], 1900));
console.log(getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900));
console.log(getLaptopCost([2099, 1599, 1899, 1499], 2200));
console.log(getLaptopCost([2099, 1599, 1899, 1499], 1000));
console.log(getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450));
