function unique(arr) {
    for (let i of arr){
        while ( arr.lastIndexOf(i) !== arr.indexOf(i) ) {
            arr.splice(arr.lastIndexOf(i), 1)
        }
  }
            return arr
  }

  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  alert( unique(strings) ); // кришна, харе, :-O

/*
Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только 
уникальные элементы arr.

*/