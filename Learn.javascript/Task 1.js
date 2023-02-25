'use strict'
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

crashingWeights([[1, 2, 3],
  [2, 3, 1],
  [3, 1, 2]])