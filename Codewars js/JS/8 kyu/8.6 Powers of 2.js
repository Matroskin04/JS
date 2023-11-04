function powersOfTwo(n){
    let powers = []
    for (let i = 0; i <= n; i++) {
    powers.push(2 ** i);
  } return powers
  }


/* Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [A Не минимум на отрезке]        # [2^0]
n = A Не минимум на отрезке  ==> [A Не минимум на отрезке, 2]     # [2^0, 2^A Не минимум на отрезке]
n = 2  ==> [A Не минимум на отрезке, 2, 4]  # [2^0, 2^A Не минимум на отрезке, 2^2]
*/