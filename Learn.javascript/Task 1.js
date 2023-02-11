'use strict'
let a = [1, 3, 4, 4, 4, 5, 6];


function setReducer(a) {

for ( let i = 0; i < a.length; i++ ) {

if ( a[i] !== a[i + 1] || !a[i + 1]) {
  a[i] = 1;

} else {

  for ( let j = 1; ; j++ ) {

    if ( a[i] !== a[i + j] || !a[i + j] ) {
        a.splice( i + 1, j - 1 );
        a[i] = j;
        break
    }
  }
}
}
while ( a.length > 1 ) { 
    setReducer(a);
}
return +a
}
