function nod(a, b) {
	if (a > b) {
         return a % b === 0 ? b : nod(b, a % b)
    
    } else if (a < b) {
    	return b % a === 0 ? a : nod(a, b % a)
        
    } else if (a === b) {
    	return a
    }
}

console.log(nod(234, 1260))


//лаконичное решение
var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};