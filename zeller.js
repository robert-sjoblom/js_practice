
let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var fs = require("fs");
var dataInput = fs.readFileSync('js_practice/dates.txt', 'utf8');
var lines = dataInput.split("\n");

//console.log(lines)
//console.log(lines[0].split(" ")[0], lines[0].split(" ")[1], lines[0].split(" ")[2])
let correctAnswer = ['Monday', 'Monday', 'Saturday', 'Thursday', 'Friday', 'Tuesday', 'Thursday', 'Monday', 'Friday', 'Sunday', 'Wednesday', 'Monday']

function whatDay(line) {
    //console.log(line)
    floor = Math.floor;
    date = line.split(" ")
    let year = Number(date[0]);
    let month = Number(date[1]);
    let day = Number(date[2]);
    if (month === 1 || month === 2) {
        month = month + 12;
        year = year - 1;
    }
    
    let K = year%100;
    let J = floor(year/100);


    let weekDay = (floor(2.6*month-5.39)  + floor(K/4) + floor(J/4) + day + K + (5*J))%7
    //let weekDay = (day + ((13 * (month + 1) /5)) + K + floor(K/4) + floor(J/4) + 5*J)%7;
    return weekDay;
}

for (var line = 0; line < lines.length; line++) {
    var element = lines[line];
    console.log("Answer: " + week[whatDay(element)]);
    console.log("Correct: " + correctAnswer[line]);
}
    
    
    
    
    
    
    
//     //console.log("Year: " + year + " Month: " + month + " Day: " + day);
//     if (month === 1 || month === 2) {
//         month = month + 12;
//         year = year - 1;
//     }
//     if (year.toString().length < 4 || year.toString().length < 3) {
//         console.log(year)
//         var C = 0;
//         var K = year.toString();
//     } else {
//         var C = year.toString().slice(0, 2);
//         var K = year.toString().slice(2, 4);
//     }
//     console.log(C, K);

//     let weekDay = (floor(2.6*month-5.39)  + floor(K/4) + floor(C/4) + day + Number(K) + (5*C));
//     return weekDay;
// }
// for (var line = 0; line < lines.length; line++) {
//     var element = lines[line];
//     //console.log(element);
//     console.log(week[whatDay(element)%7]);
//     console.log("Correct: " + correctAnswer[line]); 
// }

     

    
//console.log(week[whatDay(lines[0])%7]);




//let result = (floor(2.6*month-5.39)  + floor(K/4) + floor(C/4) + day + Number(K) + (5*C));

// console.log(result);
// console.log(week[result%7]);