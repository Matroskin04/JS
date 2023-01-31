function shortcut (string) {
    let b =[]
    let a = string.split('');
    for (let i = 0; i < a.length; i++) {
      if (a[i] === 'a' || a[i] === 'e' || a[i] === 'i' || a[i] === 'o' || a[i] === 'u') continue
      else { b.push(a[i]) }
    }
    return b.join('');
  }


// Another variant
function shortcut(string){
  return string.replace(/[aeiou]/g,'')
}




/* reate a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/