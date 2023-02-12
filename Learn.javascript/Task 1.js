'use strict'
function pairZeros(arr) {
    for ( let i = 0; i < arr.length; i++ ) {
      if ( arr[i] === 0 ) {
        for ( let j = i + 1; j < arr.length; j++ ) {
          if ( arr[i] === arr[j] ) {
            arr.splice(j, 1)
          }
        }
      }
    }
    console.log(arr)
  }
  pairZeros([1,0,1,0,2,0,0,3,0])
