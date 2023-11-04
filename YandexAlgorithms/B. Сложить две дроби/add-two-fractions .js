const { createInterface } = require("readline");

const lines = [];
function foo(a, b) {
    if (!a || !b) return a ? a : b;
    return a > b ? foo(b, a % b) : foo(a, b % a)
}
createInterface({
    input: process.stdin,
    output: process.stdout,
}).on("line", (line) => {
    lines.push(line.toString().trim());
}).on("close", () => {
    const [a, b, c, d] = lines.join(' ').split(' ');
    const sum = a / b + c / d;
    const denominator = a * d + c * b; //знаменатель
    const numerator = b * d//числитель
    if (sum % 1 === 0) console.log(sum, 1)
    else {
        const gcd = foo(denominator, numerator) //greatest common divisor, наибольший общий делитель
        console.log(denominator / gcd, numerator / gcd)
    }
})
