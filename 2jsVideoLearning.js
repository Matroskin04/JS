'use strict'
//             // 6 Функции
// function calculateAge(year){ 
//     return 2023 - year
// }
// const myAge = calculateAge(2004)
// console.log(myAge)
// function logIn(name, year) {
//     const age = calculateAge(year)
//     console.log('Имя: ' + name + '. Возраст: ' + age)
// }
// logIn('Егор', 2004)


//             // 7 Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд']
// // const cars = new Array('Мазда', 'Мерседес', 'Форд')   Второй вариант создания массива (не желателен)
// console.log(cars.length)
// console.log(cars[0])

// cars[0] = 'Porsche'
// console.log(cars)
// cars[3] = 'Mazda' // добавили элемент
// cars[cars.length] = 'Toyota' // добавили в конец элемент


//             // 8 Циклы
// const cars = ['Мазда', 'Мерседес',  'Форд']
// for (let car of cars) {
//     console.log(car)
// }


//             // 9 Объекты
const person = {
    firtsName: 'Egor',
    lastName: 'Matafonov',
    year: 2004,
    languages: ['Ru', 'Eng'],
    hasWife: false,
    greet: function(){
        console.log('greet from person')
    }
}
console.log(person)
console.log(person.firtsName) 
console.log(person['lastName'])
const key = 'languages'
console.log(person[key])
person.hasWife = true // изменение ключа в объекте
person.isProgrammer = true // добавление ключа
person.greet()
