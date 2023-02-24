'use strict'
function crashingWeights(grid){
  
  for ( j = 0; j < grid.length; j++ ) {
    
    for ( i = 0; i < grid[j].length; i++ ){
      
      if ( grid[j][i] > grid[j + 1].[i] ) {
        grid[j + 1][i] += grid[j][i]
      }
    }
  }
  return grid[j]
};

crashingWeights([[1, 2, 3],
  [2, 3, 1],
  [3, 1, 2]])