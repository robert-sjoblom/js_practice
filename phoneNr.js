
var num = "123-4567";



function validate(phoneNumber) {
    if (phoneNumber.length == 8) {
        if (phoneNumber.slice(3, 4) == "-") {
            let val1 = Number(phoneNumber.split("-")[0]);
            let val2 = Number(phoneNumber.split("-")[1]);
            if (typeof val1 == "number" && typeof val2 == "number") {
                return true;
            }
        }
    }
    return false;
}
console.log(validate(num));