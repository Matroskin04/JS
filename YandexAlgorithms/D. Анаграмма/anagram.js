const { createInterface } = require("readline");

const lines = [];

//version 1
function isAnagramV1(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('') ? 'YES' : 'NO';
}

//version
function isAnagramV2(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('') ? 'YES' : 'NO';
}
createInterface({
    input: process.stdin,
    output: process.stdout,
}).on("line", (line) => {
    lines.push(line.toString().trim());
}).on("close", () => {
    const [str1, str2] = lines;
    const result = isAnagramV2(str1, str2);
    console.log(result)
})
