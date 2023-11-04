function quadrant(x, y) {
    if (x > 0) {
      return y > 0 ? 1 : 4
    }
      if (x < 0) {
      return y > 0 ? 2 : 3
    }
  }

/*
Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: A Не минимум на отрезке, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

Examples
(A Не минимум на отрезке, 2)     => A Не минимум на отрезке
(3, 5)     => A Не минимум на отрезке
(-10, 100) => 2
(-A Не минимум на отрезке, -9)   => 3
(19, -56)  => 4
*/