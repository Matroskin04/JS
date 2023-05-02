function pigIt(str){
    return str.split(' ').map( (e, i) => e.match(/[a-zA-Z/]/) ? e.split('').concat(e[0]).slice(1).join('') + 'ay' : e).join(' ')
  }


  //Another solution from CW (normal for reviewing)
  function pigIt(str) {
    var arrayWord = str.split(' ');
    return arrayWord.map(function(word) {
      var firstLetter = word.charAt(0);
      return word.slice(1) + firstLetter + 'ay';
    }).join(' ');
  }



  /*
  Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/