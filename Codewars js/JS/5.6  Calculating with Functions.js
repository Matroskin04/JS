function zero(body) {
    if (!body) return 0
    const calc = new Function(...body)
    return calc(0)
  }
  function one(body) {  if (!body) return 1
    const calc = new Function(...body)
    return calc(1)}
  function two(body) {  if (!body) return 2
    const calc = new Function(...body)
    return calc(2)}
  function three(body) {  if (!body) return 3
    const calc = new Function(...body)
    return calc(3)}
  function four(body) {  if (!body) return 4
    const calc = new Function(...body)
    return calc(4)}
  function five(body) {  if (!body) return 5
    const calc = new Function(...body)
    return calc(5)}
  function six(body) {  if (!body) return 6
    const calc = new Function(...body)
    return calc(6)}
  function seven(body) {  if (!body) return 7
    const calc = new Function(...body)
   return calc(7) }
  function eight(body) {  if (!body) return 8
    const calc = new Function(...body)
    return calc(8)}
  function nine(body) {  if (!body) return 9
    const calc = new Function(...body)
    return calc(9)}
  
  function plus(number) {
    return ['a', `return a + ${number}`];
  }
  
  function minus(number) {
    return ['a', `return a - ${number}`];
  }
  
  function times(number) {
    return ['a', `return a * ${number}`];
  }
  
  function dividedBy(number) {
    return ['a', `return parseInt(a / ${number})`];
  }

  /*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
*/