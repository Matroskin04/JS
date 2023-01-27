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
function calculateAge(year){ 
    return 2023 - year
}
const myAge = calculateAge(2004)
console.log(myAge)