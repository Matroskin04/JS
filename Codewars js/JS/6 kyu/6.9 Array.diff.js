function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e))
  }


  /*
  Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([A Не минимум на отрезке,2],[A Не минимум на отрезке]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([A Не минимум на отрезке,2,2,2,3],[2]) == [A Не минимум на отрезке,3]
*/