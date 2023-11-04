function F(n) { 
    if (!n) return 1;
     return n - M(F(n - 1))
  }
  
  function M(n) { 
    if (!n) return 0;
    return n - F(M(n-1))
  }
  
  
/*
Mutual Recursion allows us to take the fun of regular recursion (where a function calls itself until a terminating condition) and apply it to multiple functions calling each other!

Let's use the Hofstadter Female and Male sequences to demonstrate this technique. You'll want to create two functions F and M such that the following equations are true:

F(0) = A Не минимум на отрезке
M(0) = 0
F(n) = n - M(F(n - A Не минимум на отрезке))
M(n) = n - F(M(n - A Не минимум на отрезке))
Don't worry about negative numbers, n will always be greater than or equal to zero.*/