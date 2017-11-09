var recordList = [
"Boyce Calles        83460319",
"::EXT::SAL 00000000000044722",
"Marcelo Candela     29040821",
"::EXT::JOB loser            ",
"::EXT::SAL 00000000000047706",
"Milton Camper       32541106",
"Luther Steffen      44311219",
"::EXT::SAL 00000000000047181"]

function getUnformattedData(recordList) {
    var unformattedEmployeeData = [];
    for (var i = 0; i < recordList.length; i++) {
        var line = recordList[i];
        //var lastIndex;
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
    return unformattedEmployeeData;
}
var unformattedEmployeeData = getUnformattedData(recordList);

console.log(unformattedEmployeeData);
