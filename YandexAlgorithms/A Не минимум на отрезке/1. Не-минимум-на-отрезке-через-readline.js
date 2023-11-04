const { createInterface } = require("readline");

const lines = [];

function notMinOnSection() {
    createInterface({
        input: process.stdin,
        output: process.stdout,
    }).on("line", (line) => {
        lines.push(line.toString().trim());
    }).on("close", () => {
        const arrByRows = lines.map(e => e.split(' '));
        const [_, sequence, ...requests] = arrByRows
        for (let request of requests) {
            const partOfArr = sequence.slice(+request[0], +request[1] + 1).sort((a, b) => a - b)
            if (partOfArr[0] !== partOfArr.at(-1)) console.log(+partOfArr.at(-1))
            else console.log('NOT FOUND')
        }
    })
}
notMinOnSection();
// process.stdin.on('', (chunk) => a.push(chunk.toString()))
// stream.read()
// console.log(stream())
