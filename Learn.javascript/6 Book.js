function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.a = +prompt( 'Enter any number:','' );
        this.value += this.a;   // Более короткая запись: this.value += +prompt('Сколько нужно добавить?', 0);
    };
}
undefined
let accumulator = new Accumulator(1); // начальное значение A Не минимум на отрезке

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value);


/*
Создайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:
*/