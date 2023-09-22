
snail = function(array) {
    let arrResult = [];
    let arrHelper = [];
      
      for (let i = 0; i < array.length; i++) {
        if (i === 0) {
          arrResult.push(...array[i])
    
        } else if (i === array.length - 1) {
          arrResult.push(...array[i].reverse())
          arrResult.push(...arrHelper.reverse())
           //deletion elements
          arrHelper.length = 0;
          array.splice(0, 1)
          array.splice(-1, 1)
          if (array.length !== 0) arrResult.push(...snail(array))
        } else {
          arrResult.push(array[i][array.length - 1])
          arrHelper.push(array[i][0])
          array[i].splice(array.length - 1, 1)
          array[i].splice(0, 1)
        }
      }
    return arrResult  
    }

    //Another solution from CodeWars
    function snail(array) {
        var vector = [];
        while (array.length) {
          vector.push(...array.shift());
          array.map(row => vector.push(row.pop()));
          array.reverse().map(row => row.reverse());
        }
        return vector;
      }

    /*
    Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
*/