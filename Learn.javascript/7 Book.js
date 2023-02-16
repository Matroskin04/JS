function readNumber() {
    let a = prompt('Введите число', '');
    
    for (let i = 0; ; i++) {
    if (a === null || a === '') {
        return( 'Отмена' );
    } else if (typeof +a === 'number') {
        return a;
    } else a = prompt('Введите число', '');
    }
}


// Another solution
function readNumber() {
    let num;
  
    do {
      num = prompt("Введите число", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }



/*
Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
*/