let min = function(...list) {
    label: for ( let i = 0, i <= list.length, i++) {
      for ( let j = 0, j <= list.length, j++) {
        if (list[i] > list[j]) continue label
      }
      alert(list[i]);
    }
  }
min(1,2,3,4,5)



//   var max = function(...list) {
//     label2: for (i = 0, i <= list.length, i++) {
//       for (j = 0, j <= list.length, j++) {
//         if (list[i] < list[j]) continue label2
//       }
//       alert(list[i]);
//     }
//   }