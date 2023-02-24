'use strict'
function sumOfIntegersInString(s){
  let sum = 0;
  for ( let i = 0; i < s.length; i++ ) {
    if (!isNaN(s[i])) {
      let num = parseInt(s.slice(i));
      i += num.toString().length - 1;
      sum += num;
  }
} console.log(sum)
}

sumOfIntegersInString('123asd123s2s0x1')
