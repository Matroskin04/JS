function binarySearch(arr, a) {
    let middle = Math.floor(arr.length/2);
    
    if (arr[middle] === a) return middle;

    if (arr[middle] > a) {
        return middle + binarySearch(arr.slice(middle), a)
    } 

    if (arr[middle] < a) {
        return binarySearch(arr.slice(0, middle), a)
    }
}



/*
Двоичный поиск с использованием рекурсии
Напишите программу на JavaScript для двоичного поиска.

Двоичный (бинарный) поиск (также известен как метод деления пополам) — классический алгоритм поиска элемента в отсортированном массиве (векторе), использующий дробление массива на половины. Используется в информатике, вычислительной математике и математическом программировании.

Пример массива: [0,1,2,3,4,5,6]
Ожидаемый результат: document.writeln(l.br_search (5)) вернет «5»
*/