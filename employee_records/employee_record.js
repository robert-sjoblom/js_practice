var fs = require("fs");
var dataInput = fs.readFileSync('js_practice/employee_records/employee_records.txt', 'utf8');
//so it looks nice: 
var currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD", 
    minimumFractionDigits: 2,
});
//store all lines in a list
var recordList = dataInput.split("\r\n");

//collect all employees in their own sublists
function getUnformattedData(recordList) {
    var unformattedEmployeeData = [];
    for (var i = 0; i < recordList.length; i++) {
        var line = recordList[i];
        var templist = [];
        if (line.slice(0, 1) != ":") {
            //this must be an employee
            templist.push(line);
            for (var j = i + 1; j < recordList.length; j++) {
                var element = recordList[j];
                if (element.slice(0, 1) == ":") {
                    templist.push(element);
                    i = j;
                } else {
                    break;
                }
            }
        }
        //console.log("I run because I'm a line. My first value is " + line.slice(0, 1));
        if (templist.length > 0) {
            unformattedEmployeeData.push(templist);
        } 
    }
    return unformattedEmployeeData; //list of lists
}

//returns a list = [age, dobYear, dobMonth, dobDay]
function getDigitData(numbers) {
    let stringNum = numbers.toString();
    let age = stringNum.slice(0, 2);
    let dobYear = stringNum.slice(2, 4);
    let dobMonth = stringNum.slice(4, 6);
    let dobDay = stringNum.slice(6, 8);
    return [age, dobYear, dobMonth, dobDay];
}

//returns the salary
function salaryParser(salaryLine) {
    tmp = salaryLine.split(" ");
    return parseFloat(tmp[1]).toFixed(0);
}

//returns an Employee Object
function formattedEmployeeData(listItem) {
    for (var i = 0; i < listItem.length; i++) {
        //initializing vars
        var line = listItem[i];
        var salary;
        var titleList = [];
        var job;
        //console.log(line)
        if (i == 0) { //the first line always contains Name and DOB
            var firstName = line.split(" ")[0];
            var lastName = line.split(" ")[1];
            var dob = getDigitData(line.split(" ")[line.split(" ").length-1]);
        }
        if (listItem.length > 1) {
            if (line.search("SAL") != -1 ) {
                salary = salaryParser(line);
            } else if (line.search("JOB") != -1) {
                job = line.split(" ")[1];
            } else {
                titleList.push(line);
            }
        }
        if (salary === undefined) {
            salary = 0;
        }
    }
    let employee = new Object();
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.DOB = dob[1] + "/" + dob[2] + "/" + dob[3];
    if (job) {
        employee.jobTitle = job;
    }
    if (titleList.length > 0) {
        employee.titleList = titleList;
    }
    employee.salary = salary;
    return employee;
}

//goes through an unformatted Employee Data list, returns a formatted one
function getFormattedEmployeeData(unformattedEmployeeData) {
    //takes a list of unformatted employee data, returns a list of
    //formatted employee data.
    var formattedEmployeeList = [];
    for (var i = 0; i < unformattedEmployeeData.length; i++) {
        var employee = unformattedEmployeeData[i];
        formattedEmployeeList.push(formattedEmployeeData(employee));
    }
    return formattedEmployeeList;
}

var unformattedEmployeeData = getUnformattedData(recordList);
var formattedEmployeeData = getFormattedEmployeeData(unformattedEmployeeData);

function getHighestSalary(formattedEmployeeData) {
    var highestSalary = formattedEmployeeData[0];
    for (var i = 1; i < formattedEmployeeData.length; i++) { //start at 1, since 0 is already "checked"
        var employee = formattedEmployeeData[i];
        if (parseInt(highestSalary.salary) < parseInt(employee.salary)) {
            highestSalary = employee;
        }
    }
    let phrase = "Highest salary has: " + highestSalary.firstName + " " + highestSalary.lastName + "." + " Their salary is: " + currencyFormatter.format(highestSalary.salary);
    return phrase;
}
console.log(getHighestSalary(formattedEmployeeData));