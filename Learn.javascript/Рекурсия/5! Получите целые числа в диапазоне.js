function int(a, b) {
    let res = []
    if (a === b - 1) return [a];
    res.push(a, ...int(a+1, b))
    return res
}


//Решение с сайта
var range = function(start_num, end_num) {
  if (end_num - start_num === 2)   {
    return [start_num + 1];
  }   else   {
    var list = range(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
};






/*
Напишите программу на JavaScript, чтобы получить целые числа в диапазоне (x, y).

Пример: диапазон (10, 18)
Ожидаемый результат: [11,12,13,14,15,16,17]
*/