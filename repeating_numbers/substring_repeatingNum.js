var aString = "82156821568221";
var aList = []

// Build a list
for (let i = 0; i < aString.length; i++) {
    var j = i;
    while (j < aString.length) {
        j++;
        var sub = aString.slice(i, j);
        if (sub.length >= 2) {
            aList.push(sub)
        }
    }
}
// Associative array
var mapped = aList.reduce(function(prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
},{});

// Print it.
for (var key in mapped) {
    if (mapped[key] >= 2) {
        console.log(key + ": " + mapped[key]);
    }
};