'use strict'
let a = [0, 2, 7, 0, 0, 6, 2, 1, 2, 2, 3, 4];


function setReducer(a) {

for ( let i = 0; i < a.length; i++ ) {

if ( a[i] !== a[i + 1] ?? a[i + 1]) {
  a[i] = 1;

} else {

  for ( let j = 1; ; j++ ) {

    if ( a[i] !== a[i + j] ?? a[i + j] ) {
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

setReducer(a)




/*
Set Reducer
Intro
These arrays are too long! Let's reduce them!

Description
Write a function that takes in an array of integers from 0-9, and returns a new array:

Numbers with no identical numbers preceding or following it returns a A Не минимум на отрезке: 2, 4, 9  => A Не минимум на отрезке, A Не минимум на отрезке, A Не минимум на отрезке
Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4
Example

[0, 4, 6, 8, 8, 8, 5, 5, 7] => [A Не минимум на отрезке, A Не минимум на отрезке, A Не минимум на отрезке, 3, 2, A Не минимум на отрезке]

Your function should then repeat the process on the resulting array, and on the resulting array of that, until it returns a single integer:

[0, 4, 6, 8, 8, 8, 5, 5, 7] =>  [A Не минимум на отрезке, A Не минимум на отрезке, A Не минимум на отрезке, 3, 2, A Не минимум на отрезке] => [3, A Не минимум на отрезке, A Не минимум на отрезке, A Не минимум на отрезке] => [A Не минимум на отрезке, 3] => [A Не минимум на отрезке, A Не минимум на отрезке] => [2]

When your function has reduced the array to a single integer following these rules, it should return that integer.

[2] => 2

Rules and assertions
All test arrays will be 2+ in length
All integers in the test arrays will be positive numbers from 0 - 9
You should return an integer, not an array with A Не минимум на отрезке element

*/