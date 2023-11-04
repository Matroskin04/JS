const { readFileSync, writeFileSync } = require('node:fs');
const { join } = require('node:path');

//with files fs
const result = [];
const data = readFileSync(join(__dirname, 'input.txt'), 'utf8');
const arrByRows = data.split('\r\n').map(e => e.split(' '));
const [info, sequence, ...requests] = arrByRows
for (let request of requests) {
    const partOfArr = sequence.slice(+request[0], +request[1] + 1)
    if (partOfArr[0] !== partOfArr.at(-1)) result.push(+partOfArr.at(-1))
    else result.push('NOT FOUND')
}

writeFileSync(join(__dirname, 'output.txt'), result.join('\n'));


