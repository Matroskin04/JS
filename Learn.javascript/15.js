'use strict'

// function filterRange(arr, a, b) {
//     return arr.filter(item => ( item >= a && item <= b ) )
// }

// let a = {name: 'john'}
// let map = new WeakMap()
// map.set(a, 'hi')
// a = 1
// console.log(map)

// const tree = {
//   val: 1,
//   left: {
//       val: 2,
//       left: {
//           val: 3,
//           left: {
//               val: 4
//           }
//       },
//       right: {
//           val: 3
//       }
//   },
//   right: {
//       val: 2,
//       left: {
//           val: 3
//       },
//       right: {
//           val: 3,
//           right: {
//               val: 4
//           }
//       }
//   }
// }

// function sum(obj) {
//   if (Object.keys(obj).length === 1) {
//       return obj.val
//   }

//   let res = 0;
//   let a = 0;
//   for (let i in obj) {
//       if (i === 'val') {
//           a = obj[i];
//       } else {
//           res = sum(obj[i]) + a
//       }
//   }
//   return res
// }

// sum(tree)

function countChange(amount, denominations) {
  let ways = new Array(amount + 1).fill(0);
  ways[0] = 1;

  for (let coin of denominations) {
      for (let i = coin; i <= amount; i++) {
          ways[i] += ways[i - coin];
      }
  }

  return ways[amount];
}
countChange(4, [1, 2])