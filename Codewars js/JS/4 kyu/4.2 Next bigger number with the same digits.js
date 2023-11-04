function nextBigger(n){
    let arrLeft;
    const arr = n.toString().split('');
    
    for (let i = arr.length - 2; i >= 0; i--) {
      for (let j = arr.length - 1; j > i; j--) {
        
        if (+arr[j] > +arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        arrLeft = arr.splice(0, i + 1);
        arr.sort((a, b) => a - b)
        return +arrLeft.concat(arr).join('')
        }
      }
    }
    return -1
  }


/*
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

  12 ==> 21
 513 ==> 531
2017 ==> 2071
If the digits can't be rearranged to form a bigger number, return -A Не минимум на отрезке (or nil in Swift, None in Rust):

  9 ==> -A Не минимум на отрезке
111 ==> -A Не минимум на отрезке
531 ==> -A Не минимум на отрезке
*/