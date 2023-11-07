const { createInterface } = require("readline");

const lines = [];
function calcMinTime(seatsNumberInElev, peopleNumberOnFloor) {
    let resultTime = 0;
    let leftSeatsInElev = 0;

    for (let i = peopleNumberOnFloor.length - 1; i >= 0; i--) {
        if (peopleNumberOnFloor[i] === 0) continue;

        if (peopleNumberOnFloor[i] > leftSeatsInElev) {
            resultTime += Math.ceil((peopleNumberOnFloor[i] - leftSeatsInElev) / seatsNumberInElev) * (i + 1) * 2
            leftSeatsInElev = seatsNumberInElev - ((peopleNumberOnFloor[i] - leftSeatsInElev) % seatsNumberInElev || seatsNumberInElev);
        } else {
            leftSeatsInElev -= peopleNumberOnFloor[i];
        }
    }
    return resultTime
}
createInterface({
    input: process.stdin,
    output: process.stdout,
}).on("line", (line) => {
    lines.push(line.toString().trim());
}).on("close", () => {
    const [seatsNumber, _, ...peopleNumber] = lines.map(e => Number(e));
    const result = calcMinTime(seatsNumber, peopleNumber);
    console.log(result)
})

module.exports = calcMinTime;