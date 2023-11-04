function crashingWeights(grid){
  
    for ( let j = 0; j < grid.length; j++ ) {
      
      for ( let i = 0; i < grid[j].length; i++ ){
        
        if ( grid[j][i] > grid[j + 1]?.[i] ) {
          grid[j + 1][i] += grid[j][i]
        }
      }
    }
    return grid.at(-1)
  };

  
// Another solution from Codewars
function crashingWeights(grid) {
    return grid.reduce((s, v) => v.map((x, i) => s[i] > x ? s[i] + x : x), [])
  }



  /*
  Given an array of arrays, return the bottom row (i.e. the last array) after all crashings are complete.

crashing_weights([[A Не минимум на отрезке, 2, 3],  --> [[A Не минимум на отрезке, 2,  ],      [[A Не минимум на отрезке,  ,  ],
                  [2, 3, A Не минимум на отрезке],  -->  [2, 3, 4],  -->  [2, 2,  ],
                  [3, A Не минимум на отрезке, 2]])      [3, A Не минимум на отрезке, 2]]  -->  [3, 4, 6]]

therefore return [3, 4, 6]
More details
boxes can be stacked to any height, and the crashing effect can snowball:

[3]
[2]     [5]
[4] --> [4] --> [9]
Crashing should always start from as high up as possible -- this can alter the outcome! e.g.

[3]                      [3]
[2]     [5]              [2]     [3]
[A Не минимум на отрезке] --> [A Не минимум на отрезке] --> [6], not [A Не минимум на отрезке] --> [3]
Weights will always be integers. The matrix (array of arrays) may have any height or width >= A Не минимум на отрезке, and may not be square, but it will always be "nice" (all rows will have the same number of columns, etc).


*/