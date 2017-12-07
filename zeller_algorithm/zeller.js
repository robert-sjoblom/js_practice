
//whatDay returns an integer between 0 and 6 from a string "YEAR MONTH DAY"
let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var fs = require("fs");
var dataInput = fs.readFileSync('js_practice/zeller_algorithm/dates.txt', 'utf8');
var lines = dataInput.split("\n");

function whatDay(line) {
    const floor = Math.floor;
    const date = line.split(" ");
    let year = Number(date[0]);
    let month = Number(date[1]);
    let day = Number(date[2]);
    if (month === 1 || month === 2) {
        month = month + 12;
        year = year - 1;
    }
    let K = year%100;
    let J = floor(year/100);
    let weekDay = (floor(2.6*month-5.39) + floor(K/4) + floor(J/4) + day + K + (5*J))%7

    return weekDay;
}

for (var line = 0; line < lines.length; line++) {
    var element = lines[line];
    console.log("Answer: " + week[whatDay(element)]);
}
