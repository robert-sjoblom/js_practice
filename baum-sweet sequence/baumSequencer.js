
// Write a function that generates a baum-sweet sequence
// from 0 to n.

function baumTest(num) {
    // convert to binary
    let bin = num.toString(2);
    // in a baum-sweet sequence, 0 is always 1 because screw logic
    if (bin == "0") {
        return 1;
    }
    if (bin.split("1").filter(x => x.length%2).length >= 1) {
        return 0;
    } else {
        return 1;
    }
}

let baumArray = new Array(21).fill().map((e, i) => i++).map(x => baumTest(x));
console.log(baumArray);
