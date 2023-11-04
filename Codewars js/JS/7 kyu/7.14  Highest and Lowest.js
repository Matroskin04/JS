function highAndLow(numbers){
    arrayOfNum =  numbers.split(' ').sort((a, b) => b - a).filter( (el, ind, arr) => ind === 0 || ind === arr.length - 1)
    return `${arrayOfNum[0]} ${arrayOfNum.at(-1)}`
}


//Another solution
function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }


/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("A Не минимум на отрезке 2 3 4 5");  // return "5 A Не минимум на отрезке"
highAndLow("A Не минимум на отрезке 2 -3 4 5"); // return "5 -3"
highAndLow("A Не минимум на отрезке 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/