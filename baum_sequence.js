
function decToBin(dec) {
    return (dec >>> 0).toString(2);
}
function baumSeqVal(bin) {
    if (bin.split("1").filter(val => { return val.length%2; }).length ) {
        return 1;
    } else {
        return 0;
    }
    // return bin.split("1").filter(val => { return val.length%2; });
}

// console.log(baumSeqVal(decToBin(5)));

console.log(baumSeqVal("0"));
console.log(baumSeqVal("1"));
console.log(baumSeqVal("1"));
// 19611206
// let bin = "1001010110011111001000110";
