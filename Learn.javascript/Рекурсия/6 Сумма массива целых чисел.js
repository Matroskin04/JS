function sum(arr) {
    let summa = 0;
    //выход
    if (arr.length === 1) return arr[0];
    
    return arr.pop() + sum(arr);
}






/*
Вычислите сумму массива целых чисел
Напишите программу на JavaScript для вычисления суммы массива целых чисел.

Пример: var array = [2, 3, 4, 5, 6, 7]
Ожидаемый результат: 27
*/