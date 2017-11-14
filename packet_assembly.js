
var numArray = [4, 7, 2, 8, 5];
var total = 0;
for (var i = 0; i < numArray.length; i++) {
    var element = numArray[i];
    total += element*element;
}
console.log(total);