function deepCount(a){
    let allElemsCount = 0;
    for (let i of a) {
      Array.isArray(i) ? allElemsCount = ++allElemsCount + deepCount(i) : ++allElemsCount;    
    }
    return allElemsCount;
  }

/*
You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

Examples
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7
*/
