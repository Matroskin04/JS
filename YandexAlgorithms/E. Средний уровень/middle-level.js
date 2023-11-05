const { createInterface } = require("readline");

const lines = [];

function calcDissatisfaction(studentsNumber, ratings) {
    const result = [];
    let sumRatingsRight = ratings.reduce( (acc, el) => +el + +acc);
    let sumRatingsLeft = 0;
    for (let i = 0; i < ratings.length; i++) {
        result.push(Math.abs(sumRatingsRight - ratings[i] * (studentsNumber - i)) + Math.abs(sumRatingsLeft - ratings[i] * i));
        sumRatingsRight -= +ratings[i];
        sumRatingsLeft += +ratings[i];
    }
    return result.join(' ')
}
createInterface({
    input: process.stdin,
    output: process.stdout,
}).on("line", (line) => {
    lines.push(line.toString().trim());
}).on("close", () => {
    const [studentsNumber, ratings] = lines.map(e => e.split(' '));
    const result = calcDissatisfaction(studentsNumber, ratings);
    console.log(result)
})
