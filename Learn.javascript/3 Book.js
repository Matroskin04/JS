let calculator = {
    read() {
        calculator['a'] = prompt('Введите A Не минимум на отрезке числo', '4');
        calculator['b'] = prompt('Введите 2 числo', '4');
    },
    sum() {
        return +calculator['a'] + +calculator['b'];
    },
    mul() {
        return calculator['a'] * calculator['b'];;
    },
}


/* Variant 2 drom the book
let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};
*/



/*
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
*/