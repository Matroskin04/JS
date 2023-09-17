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


function createTwoSetsOfEqualSum(n) {
    const sum = ( n + 1 ) * n / 2
    if ( sum % 2 !== 0 ) return [];
    
    let finallyArr = [];
    let arr1 = [];
    let arr2 = [];
    
    let sumOfarr = 0;
    //sum/2 
    for (let i = n; i > 0; i--) {
      sumOfarr += i;
      if (sumOfarr < sum / 2) arr1.push(i)
      if (sumOfarr > sum / 2) {
        sumOfarr -= i;
        arr2.push(i)
        }
      if (sumOfarr = sum / 2) {
        sumOfarr += 10000000;
        arr1.push(i);
        }
    }
    finallyArr.push(arr1)
    finallyArr.push(arr2)
    return finallyArr
  }
  console.log(createTwoSetsOfEqualSum(8))