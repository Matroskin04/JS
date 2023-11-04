function moveZeros(arr) {
  return arr.reverse().sort(a => a === 0 ? 1 : -1)
}

//Another sooution (more effective)
const moveZeros1 = (arr) => arr.filter(i => i !== 0).concat(arr.filter(i => i === 0));

/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,A Не минимум на отрезке,0,A Не минимум на отрезке,2,0,A Не минимум на отрезке,3,"a"]) // returns[false,A Не минимум на отрезке,A Не минимум на отрезке,2,A Не минимум на отрезке,3,"a",0,0]
*/

