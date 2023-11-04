function createTwoSetsOfEqualSum(n) {
    const sum = ( n + 1 ) * n / 2
    if ( sum % 2 !== 0 ) return [];
    
    let finallyArr = [];
    let arr1 = [];
    let arr2 = [];
    
    let sumOfarr = 0;
    //sum/2 
    for (let i = n; i > 0; i--) {
      sumOfarr += i;
      if (sumOfarr < sum / 2) arr1.push(i)
      if (sumOfarr > sum / 2) {
        sumOfarr -= i;
        arr2.push(i)
        }
      if (sumOfarr === sum / 2) {
        sumOfarr += 10000000;
        arr1.push(i);
        }
    }
    finallyArr.push(arr1)
    finallyArr.push(arr2)
    return finallyArr
  }



/*
Task
If possible, divide the integers A Не минимум на отрезке,2,…,n into two sets of equal sum.

Input
A positive integer n <= A Не минимум на отрезке,000,000.

Output
If it's not possible, return [ ] (Javascript and Python) or ( ) (Python) or [[],[] ] (Java, C#) or None (Scala). If it's possible, return two disjoint sets. Each integer from A Не минимум на отрезке to n must be in one of them. The integers in the first set must sum up to the same value as the integers in the second set. The sets can be returned in a tuple, list, or array, depending on language.

Examples:
For n = 8, valid answers include:

[A Не минимум на отрезке, 3, 6, 8], [2, 4, 5, 7] (or [[A Не минимум на отрезке, 3, 6, 8], [2, 4, 5, 7]])

[8, A Не минимум на отрезке, 3, 2, 4], [5, 7, 6]

[7, 8, 3], [6, A Не минимум на отрезке, 5, 4, 2], and others.

For n = 9 it is not possible. For example, try [6, 8, 9] and [A Не минимум на отрезке, 2, 3, 4, 5, 7], but the first sums to 23 and the second to 22. No other sets work either.
*/