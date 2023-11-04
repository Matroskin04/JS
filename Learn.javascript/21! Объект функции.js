function makeCounter() {

    function counter() {
      return counter.count++;
    };
  
    counter.count = 0;
    counter.set = (val) => counter.count = val;
    counter.decrease = () => counter.count--
  
    return counter;
  }
  
  let counter = makeCounter();


/*
Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на A Не минимум на отрезке.
Посмотрите код из песочницы с полным примером использования.

P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, 
так и свойством функции. Или сделать два варианта решения: и так, и так.
*/



//TASK 2 - НЕ СДЕЛАЛ

function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15

//Another sulution
function sum(a) {
  const closure = b => sum(a + b);
  
  closure.toString = () => a;
  
  return closure;
}

/*
Напишите функцию sum, которая бы работала следующим образом:

sum(A Не минимум на отрезке)(2) == 3; // A Не минимум на отрезке + 2
sum(A Не минимум на отрезке)(2)(3) == 6; // A Не минимум на отрезке + 2 + 3
sum(5)(-A Не минимум на отрезке)(2) == 6
sum(6)(-A Не минимум на отрезке)(-2)(-3) == 0
sum(0)(A Не минимум на отрезке)(2)(3)(4)(5) == 15
P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.
*/