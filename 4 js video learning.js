//                    Массивы
const cars = ['Mazda', 'Ford', 'BMW', 'Mersedes']
const people = [
    {name: 'Valeria', budget: 3400},
    {name: 'Ekaterina', budget: 5500},
    {name: 'Veronika', budget: 8700}
]

// cars.push('Porshe') // add to the end
// cars.unshift('Lada') // в начало
// const firstCar = cars.shift() // удаляет 1 элемент и возвращает его (можно заносить в переменную)
// const lastCar = cars.pop()

// console.log(cars.reverse()) //переворачивает массив

// const index = cars.indexOf('BMW')  // поиск места элемента
// cars[index] = 'Toyota'
// console.log(cars)

// const index = people.findIndex(function(person) {    // findIndex для массивов из объектов
//     return person.budget === 3400
// })
// console.log(people[index]) // можно было использовать find (без Index) чтобы сразу вернуть человека

// еще вариант
// const person = people.find(person => person.budget === 3400)






// Task 1 
// const text = 'Hi, we are learning JS'
// const reverseText = text.split('').reverse().join('')
// split делит строчку и возвращает массив, join превращает массив в строчку

