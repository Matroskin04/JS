function largest(n, array) {
  let maxArr = [];
  for (let i = 0; i < n; i++) {
    maxArr[i] = array.sort(compareNumeric).reverse().shift()
  }
  return maxArr.reverse()
}

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

// Another solution from Codewars
function largest(n,xs){
  return xs.sort(function(a, b) {return a - b;}).slice(xs.length-n);
}



/*
Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]
*/