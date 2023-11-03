function solution(number){
  
    if ( number < 0 ) {
      return 0
    };
    
    const integerPart3 = Math.floor( (number - 1) / 3 );
    const integerPart5 = Math.floor( (number - 1) / 5 );
    const intPart5On3 = Math.floor (integerPart5 / 3);
    
    const sumMul3 = 3 * (1 + integerPart3) / 2 * integerPart3;
    const sumMul5WithoutMul3 = 5 * (1 + integerPart5) / 2 * integerPart5 
                               - 15 * (1 + intPart5On3 ) / 2 * intPart5On3;
    
    return sumMul3 + sumMul5WithoutMul3;
  }


  /*
  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)
*/