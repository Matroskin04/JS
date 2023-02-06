function isEmpty(object) {
    object.name = 5;
    for (let key in object) {
        if ( key != 'name' ) return false;
    }
    return true;
}







/*
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/