function moveZeros(arr) {
  return arr.reverse().sort(a => a === 0 ? 1 : -1)
}

//Another sooution (more effective)
const moveZeros1 = (arr) => arr.filter(i => i !== 0).concat(arr.filter(i => i === 0));

/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

