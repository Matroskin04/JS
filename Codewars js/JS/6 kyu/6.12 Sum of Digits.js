function digitalRoot(n) {
    n = n.toString().split('').reduce( (sum, elem) => sum += +elem, 0 )
    if ( n > 9 ) { 
      return digitalRoot(n) 
    } return n
  }


  /*
  Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  A Не минимум на отрезке + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  A Не минимум на отрезке + 5 = 6
132189  -->  A Не минимум на отрезке + 3 + 2 + A Не минимум на отрезке + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + A Не минимум на отрезке + 9 + 3 = 29  -->  2 + 9 = 11  -->  A Не минимум на отрезке + A Не минимум на отрезке = 2
*/