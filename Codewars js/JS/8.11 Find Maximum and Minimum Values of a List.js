let min = function(mi) {
    return Math.min(...mi)
  }
  
  let max = function(ma) {
    return Math.max(...ma)
  }

  /*
  My variant 2
  let max = function(ma) {
    label2: for (i = 0; i < ma.length; i++) {
      for (j = 0; j < ma.length; j++) {
        if (ma[i] < ma[j]) continue label2
      }
      return ma[i];
    }
  }
  
  let min = function(mi) {
    label: for (i = 0; i < mi.length; i++) {
      for (j = 0; j < mi.length; j++) {
        if (mi[i] > mi[j]) continue label
      }
      return mi[i];
    }
  }
  */

  


  /*
  Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors.
*/