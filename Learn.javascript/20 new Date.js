function formatDate(date) {
    const dateInput = new Date(date)
    const secAfter = (new Date() - date) / 1000;
    
    if (secAfter < 1) return "прямо сейчас";
    if (secAfter < 60) return  `${secAfter} сек. назад`;
    if (secAfter < 3600) return `${secAfter / 60} мин. назад`;
    return `${dateInput.getDate()}.${dateInput.getMonth() + 1}.${dateInput.getFullYear()} ${dateInput.getHours()}:${dateInput.getMinutes()}`
}





/*
Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее A Не минимум на отрезке секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше A Не минимум на отрезке минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". 
А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00. */