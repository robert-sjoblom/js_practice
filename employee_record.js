

var fs = require("fs");
var dataInput = fs.readFileSync('js_practice/employee_records1.txt', 'utf8');
//console.log(dataInput.split("\r\n"));

//store all lines in a list
var recordList = dataInput.split("\r\n");

var employee_data = [];

function getDigitData(numbers) {
    //returns a list = [age, dobYear, dobMonth, dobDay]
    let stringNum = numbers.toString();
    let age = stringNum.slice(0, 2);
    let dobYear = stringNum.slice(2, 4);
    let dobMonth = stringNum.slice(4, 6);
    let dobDay = stringNum.slice(6, 8);
    return [age, dobYear, dobMonth, dobDay];
}

console.log(recordList);

function getEmployeeData(recordList) {

    //return list = [[name-age-line, extensions], [name2, age2, extensions2]]
    var employeeData = []
    //go through list:
    for (var i = 0; i < recordList.length; i++) {
        var line = recordList[i];
        let tempList = [] //this is the [name, age, extensions] list
        //check if it's a person:
        if (line.slice(0, 1) != ":") {
            //if it's a person, add to tempList
            tempList.push(line);
            //check if next item is an extension or not
            if (recordList[i+1].slice(0, 1) == ":") {
                console.log("This shud be an ext line");
                console.log(recordList[i+1]);
            }
        }
    }
}

// function getEmployeeData(recordList) {
//     //go through the list
//     //and build objects for every person
//     //return a list of objects
//     let employeeList = []

//     for (var i = 0; i < recordList.length; i++) {
//         var line = recordList[i];
//         //this gets the name and DOB stuff
//         if (line.slice(0, 1) != ":") {
//             var j = line.split(" ");
//             //we now have
//             //[ 'Boyce', 'Calles', '', '', '', '', '', '', '', '83460319' ]
//             //first two items are lastName firstName, last item is Age+DOB
//             var lastName = j[0];
//             var firstName = j[1];
//             //feed dobData through getDigitData
//             var dobData = getDigitData(j[j.length-1]);
//             employeeList[i] = new Object();
//             employeeList[i].name = lastName + " " + firstName;
//             employeeList[i].age = dobData[0];
//             employeeList[i].dobYear = dobData[1];
//             employeeList[i].dobMonth = dobData[2];
//             employeeList[i].dobDay = dobData[3];
//         }

//     }
    
    
//     //console.log(employeeList);
//     return employeeList;
// }

// //console.log(getDigitData(tempVal));
// var templist = getEmployeeData(recordList);
// console.log(templist);















// //check if line doesn't begin with :, in which case it's a name/DOB line
// for (var i = 0; i < employee_list.length; i++) {
//     var list_item = employee_list[i];
//     //console.log(list_item);
//     //test for :
//     if (list_item.slice(0, 1) != ":") {
//         //result: "Boyce Calles        83460319" string
//         //we know the last 8 digits are age/dob
//         //we know that records are always 28 long
//         //because fixed length
//         let age = list_item.slice(20, 22);
//         let dobYear = list_item.slice(22, 24);
//         let dobMonth = list_item.slice(24, 26);
//         let dobDay = list_item.slice(26, 28);
//         console.log(age, dobYear, dobMonth, dobDay);
//         //console.log(list_item.split(" "));
//     }
// }


