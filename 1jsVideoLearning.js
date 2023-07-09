            // 1 Переменные

// const fn = 'Egor'
// var sn = 'Matafonov' //устаревший вариант
// let age = 19

// const _$ = 'ds'
// // const 4kfmeo = 'ds' //err

//             // 2 Мутирование
            
// //console.log('Имя человека: ' + fn + ', а возраст: ' + age)

// //const ln = prompt('Введите фамилию: ')
// //alert(fn + ' ' + ln)

//             // 3 Операторы

// let a = 5
// let b = 10
// let c = 1

// console.log(++b, --a)
// c *= a // то же,что и "c = c + a"
// console.log(c)

//             // 4 Приоритет операторов
// const isMath = 5 - 7 >= -1 - 5  // т.к. начинается с is то выводит true/false
// console.log(isMath)

//             // 5 Условные операторов
// const status = 'ready'
// if (status === 'ready') {
//     console.log('Курс готов')
// }
//             // 6 Функции



let company = { // тот же самый объект, сжатый для краткости
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };
  
  // Функция для подсчёта суммы зарплат
  function sumSalaries(department) {
    if (Array.isArray(department)) { // случай (1)
      return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
    } else { // случай (2)
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
      }
      return sum;
    }
  }
console.log(sumSalaries(company))