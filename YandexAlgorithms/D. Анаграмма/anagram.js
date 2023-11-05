const { createInterface } = require("readline");

const lines = [];

function isAnagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('') ? 'YES' : 'NO';
}
createInterface({
    input: process.stdin,
    output: process.stdout,
}).on("line", (line) => {
    lines.push(line.toString().trim());
}).on("close", () => {
    const [str1, str2] = lines;
    const result = isAnagram(str1, str2);
    console.log(result)
})
