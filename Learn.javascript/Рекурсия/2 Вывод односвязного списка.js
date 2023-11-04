//цикл + рекурсия
function printList(list) {
    for (let i of Object.values(list)) {
        if (i === null) return;
        typeof i === 'number' ? console.log(i) : printList(i);
    }
}

//Рекурсия
function printList(list) {
    console.log(list.value);
    if (list.next) return printList(list.next);
}

//Цикл
function printList(list) {
    while(list) {
        console.log(list.value);
        list = list.next
    }
    return
}




/*
Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
  value: A Не минимум на отрезке,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию.

Как лучше: с рекурсией или без?
*/