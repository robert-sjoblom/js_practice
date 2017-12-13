let blocks = "4	1	15	12	0	9	9	5	5	8	7	3	14	5	12	3".split("\t").map(x => { return Number(x);});

function redist(array) {
    // find highest value
    let highest = array.reduce((a, b) => {return Math.max(a, b);});
    let offset = array.indexOf(highest);
    array[offset] = 0;
    // empty array to add diff to
    let tmp = Array(array.length).fill(0);
    // add diff
    for (let i = 0; i < highest; i++) {
        const pointer = (i+offset+1)%array.length;
        tmp[pointer] += 1;
    }
    // sum both tmp and array into tmp
    tmp = tmp.map((val, index) => {
        return this[index] = val + array[index];
    });
    // finally, add back highest value to old array (otherwise we fux it up)
    array[offset] = highest;
    return tmp;
}

function isEqual(val1, val2) {
    if (JSON.stringify(val1) === JSON.stringify(val2)) {
        return true;
    }
    return false;
}

let test = [0, 2, 7, 0];
let storage = [blocks];

let found = false;
let i = 1;
while (found != true) {
    storage[i] = redist(storage[i-1]);
    i++;
    for (let i = 0; i < storage.length; i++) {
        const val1 = storage[i];
        for (let j = i+1; j < storage.length; j++) {
            const val2 = storage[j];
            let outcome = isEqual(val1, val2);
            if (outcome == true) {
                found = true;
                console.log("comparing val1: " + val1 + " against val2: " + val2 + ". Outcome: " + outcome);
                console.log("i: " + i + " j: " + j);
                break;
            }
        }
        if (found == true) {
            break;
        }
    }
    console.log(storage.length);
}
console.log("done!");