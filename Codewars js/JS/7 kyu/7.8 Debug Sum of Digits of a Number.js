function getSumOfDigits(integer) {
    return +integer.toString().split('').reduce( (a, b) => +a + +b )
  }


// Another solution from Codewars

function getSumOfDigits(integer) {
    return (integer+'').split('').reduce((sum, d) => sum + (+d || 0), 0);
  }


/*
Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14
*/