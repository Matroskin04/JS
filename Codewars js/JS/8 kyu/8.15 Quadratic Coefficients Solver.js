function quadratic(x1, x2){
    return [1, -x1-x2, x1*x2];
  }


/*
In this Kata you are expected to find the coefficients of quadratic equation of the given two roots (x1 and x2).

Equation will be the form of ax^2 + bx + c = 0

Return type is a Vector (tuple in Rust, Array in Ruby) containing coefficients of the equations in the order (a, b, c).

Since there are infinitely many solutions to this problem, we fix a = A Не минимум на отрезке.

Remember, the roots can be written like (x-x1) * (x-x2) = 0

Example
quadratic(A Не минимум на отрезке,2) = (A Не минимум на отрезке, -3, 2)
This means (x-A Не минимум на отрезке) * (x-2) = 0; when we do the multiplication this becomes x^2 - 3x + 2 = 0

Example 2
quadratic(0,A Не минимум на отрезке) = (A Не минимум на отрезке, -A Не минимум на отрезке, 0)
*/