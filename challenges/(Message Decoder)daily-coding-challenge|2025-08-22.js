function decode(message, shift) {
  return _decode(0,message.split(' '),shift);
}

function _decode(index,message,shift){
  if(index < message.length) {
    message[index] = _decodeAux(0,message[index].split(''),shift);
    return _decode(index+1,message,shift);
  }
  return message.join(' ');
}

function _decodeAux(index,message,shift){
  if(index<message.length){
  	var abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var charIndex = abecedario.indexOf(message[index].toLowerCase());
    //console.log('charIndex: ',charIndex, ' | charIndex-shift: ',charIndex-shift);
    if(charIndex!=-1){
    	if(shift>0){
      	if(charIndex-shift<0){
      		var alterCharIndex = (abecedario.length) - ((charIndex-shift)*-1);
          message[index] = message[index].toUpperCase() == message[index] ? abecedario[alterCharIndex].toUpperCase() : abecedario[alterCharIndex];
      	}else{
      		message[index] = message[index].toUpperCase() == message[index] ? abecedario[charIndex-shift].toUpperCase() : abecedario[charIndex-shift];
        }
    	}else{
      	if(charIndex+shift*-1>abecedario.length-1){
          var alterCharIndex = (charIndex-shift)-(abecedario.length-1)-1
        	//console.log('alterCharIndex: ',alterCharIndex, ' | abecedario.length: ',abecedario.length);
					message[index] = message[index].toUpperCase() == message[index] ? abecedario[alterCharIndex].toUpperCase() : abecedario[alterCharIndex];
        }else{
        	 message[index] = message[index].toUpperCase() == message[index] ? abecedario[charIndex-shift].toUpperCase() : abecedario[charIndex-shift];
        }
    	}
   	}
  	//console.log(abecedario[charIndex-shift]);
    return _decodeAux(index+1,message,shift);
  }
  return message.join('');
}

//decode("Xlmw mw e wigvix qiwweki.", 4);
//decode("Byffi Qilfx!", 20);
decode("Zqd xnt njzx?", -1)
