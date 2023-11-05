const { createInterface } = require("readline");

const lines = [];

function minDistance(x1, y1, x2, y2) {
    const distanceA = Math.sqrt(x1 ** 2 + y1 ** 2);
    const distanceB = Math.sqrt(x2 ** 2 + y2 ** 2);

    let distanceAB;
    if (distanceA === distanceB) {
        distanceAB = Math.abs(Math.atan2(y1, x1) - Math.atan2(y2, x2)) * distanceB
    } else if (distanceA > distanceB) {
        distanceAB = distanceA - distanceB + Math.abs(Math.atan2(y1, x1) - Math.atan2(y2, x2)) * distanceB
    } else {
        distanceAB = distanceB - distanceA + Math.abs(Math.atan2(y1, x1) - Math.atan2(y2, x2)) * distanceA
    }

    return Math.min(distanceAB, distanceA + distanceB).toFixed(12)
}
createInterface({
    input: process.stdin,
    output: process.stdout,
}).on("line", (line) => {
    lines.push(line.toString().trim());
}).on("close", () => {
    const [x1, y1, x2, y2] = lines.join(' ').split(' ').map(e => +e);
    const result = minDistance(x1, y1, x2, y2);
    console.log(result)
})
