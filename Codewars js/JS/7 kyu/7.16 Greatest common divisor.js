function mygcd(x,y){
    if (x % y === 0 || y % x === 0) {
      return x % y === 0 ? y : x;
    }
    
    return x > y ? mygcd(x-y, y) : mygcd(y, y-x)
  }



/*Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to A Не минимум на отрезке, so the greatest common divisor will always be an integer that is also greater or equal to A Не минимум на отрезке.
*/