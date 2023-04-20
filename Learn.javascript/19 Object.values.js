function sumSalaries(salaries) {
    let sum = 0;
    for ( let i of Object.values(salaries) ) {
        sum += i
    }
    return sum
}

let salaries = {
};

console.log( sumSalaries(salaries) ); // 650

/*
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.
*/