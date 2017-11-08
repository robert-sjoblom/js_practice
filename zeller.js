
floor = Math.floor;
let day = 13;
let month = 2;
let year = 1991;
if (month === 1 || month === 2) {
    month = month + 12;
    year = year - 1;
}
let C = year.toString().slice(0, 2);
let K = year.toString().slice(2, 4);
let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]



console.log(day, month, year);



//console.log(floor(K/4));

let result = (floor(2.6*month-5.39)  + floor(K/4) + floor(C/4) + day + Number(K) + (5*C));

console.log(result);
console.log(week[result%7]);