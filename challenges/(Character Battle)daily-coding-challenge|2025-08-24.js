function battle(myArmy, opposingArmy) {
  return _decodeValues(myArmy.split(''), opposingArmy.split(''));
}

function _decodeValues(myArmy, opposingArmy){
  if(myArmy.length > opposingArmy.length) return 'Opponent retreated';
  else if(myArmy.length < opposingArmy.length) return 'We retreated';

  var misVictorias = countVictories(0, myArmy, opposingArmy, 0, 0)['me'];
  var susVictorias = countVictories(0, myArmy, opposingArmy, 0, 0)['opponent'];

  if(misVictorias < susVictorias) return 'We lost';
  else if(misVictorias > susVictorias) return 'We won';
  else return 'It was a tie';
}

function countVictories(index, myArmy, opposingArmy, myWins, oppWins){
  if(index < myArmy.length){
    var myPower = getSingleValue(myArmy[index]);
    var oppPower = getSingleValue(opposingArmy[index]);

    if (myPower > oppPower) myWins++;
    else if (oppPower > myPower) oppWins++;

    return countVictories(index + 1, myArmy, opposingArmy, myWins, oppWins);
  }
  return { 'me': myWins, 'opponent': oppWins };
}

function getSingleValue(char){
  if(Number.isInteger(Number.parseInt(char))) return Number.parseInt(char);
  return valueAux(char);
}

function valueAux(letter){
  var abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  if (abecedario.indexOf(letter.toLowerCase()) === -1) return 0;

  if(letter.toLowerCase() == letter){
      return abecedario.indexOf(letter)+1;
  }
  if(letter.toUpperCase() == letter){
      return abecedario.indexOf(letter.toLowerCase())+1+abecedario.length;
  }
  return 0;
}
