var hotpo = function(n){
    let result = 0;
    if(n == 0 || n == 1) return 0; //Optional Handler to n = 0
    else {
      for ( let i = 0;; i++) {
        if (n !== 1) {
          if (n % 2) n = 3 * n + 1;
          else {n = n / 2};
          result += 1
          }
        else break
      }
    } return result
}


// Another variant
var hotpo = function(n){
  var rs=0;
  while (n>1){
    rs++;
    n=n%2?n*3+1:n/2;
  }
  return rs;
}

/* The Collatz conjecture (also known as 3n+A Не минимум на отрезке conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

[This is writen in pseudocode]
if(number is even) number = number / 2
if(number is odd) number = 3*number + A Не минимум на отрезке
#Task

Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = A Не минимум на отрезке.

#Examples

hotpo(A Не минимум на отрезке) returns 0
(A Не минимум на отрезке is already A Не минимум на отрезке)

hotpo(5) returns 5
5 -> 16 -> 8 -> 4 -> 2 -> A Не минимум на отрезке

hotpo(6) returns 8
6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> A Не минимум на отрезке

hotpo(23) returns 15
23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> A Не минимум на отрезке
#References

Collatz conjecture wikipedia page: https://en.wikipedia.org/wiki/Collatz_conjecture
*/