'use strict'
//             1 Number
// //  alert(0.4 + 0.2) // 0.60000000001 
//  alert(+(0.4 + 0.2).toFixed(3)) // количество знаков после запятой (переводит в строку)


//             2 Math
// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.sqrt(25))
// console.log(Math.pow(5,3)) //степень
// console.log(Math.abs(-43)) //модуль
// console.log(Math.max(432,12,30,33), Math.min(432,3,44,22)) 
// // console.log(Math.floor/ceil/round/trund)
// console.log(Math.trunc(3.8))
// console.log(Math.random())
// console.log(Math.asin(1))


//             3 Examples
// function random(min, max){
//     return Math.floor(Math.random() * (max-min+1) + min)
// }
// console.log(random(10, 42))


//             4 Strings
// const name = 'Egor'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('gorr'))  //поиск заданной строки в базовой строке
// console.log(name.startsWith('e')) //С чего начинается строка
// console.log(name.endsWith('?'))
// console.log(name.toLowerCase().startsWith('e')) //объединение различных операций
// console.log(name.repeat(3)) // повтор одной строчки 3 раза
// const string = '   pass   word     '
// console.log(string.trim())  //удаляет все пробелы c краёв
// console.log(string.trimStart())
// console.log(string.trimEnd())

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function logPerson (s, name, age) {
//     if (age < 0) {
//         age = 'Ещё не родился'
//     }
//     return `${s[0]}${name}${s[1]}${age}${s[2]}`
// }
// const personName = 'Egor'
// const personName2 = 'Maxim'
// const personAge = 26
// const personAge2 = -10

// const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
// const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`

// console.log(output)
// console.log(output2)

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//             5 Functions
// 5.1 Function Declaration (можем обращаться когда захотим, например, до того, как она задана)
// function greet(name) {
//     console.log('Hi - ', name)
// }
// // greet('Катя')




// Задание функции через переменную:
//  Function Expression (нельзя обращаться к ней до задания)
// const greet2 = function greet22(name) {
//     console.log('Hi 2 - ', name)
// }
// // greet2('Катя')

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// //          5.2 Анонимные функции
// let counter = 0
// const interval = setInterval( function() {
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 1000)
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//      5.3 Стрелочные функции
// function greet(name) {
    // console.log('Hi - ', name)
// }

// const arrow = (name) => {
    // console.log('Hi - ', name)
// }

const arrow = name => console.log('Hi - ', name) // Короткая запись


//      5.4 Параметры по умолчанию
const sum = (a = 20, b = a * 3) => a + b
console.log(sum(42, 50))


function sumAll(...all) {        // оператор рест (...) - собирает неограниченное количество чисел в all
    console.log(all.length)
}
sumAll(1,2,3,4,5,6,7,8)
