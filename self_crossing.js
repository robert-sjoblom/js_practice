

var x = [2, 1, 1, 2];
//      [y -x -y  x]
//      [0  1  2  3];
//     0,2 -1,2 
//          -1,-1 1,-1       



var isSelfCrossing = function(x) {
    if (x[3] >= x[1] && x[0] >= x[2]) {
        return true;
    }
    return false;
};
console.log(isSelfCrossing(x));
// Fails on:
// x =  [2, 4, 3, 7, 2, 2, 1, 1, 4]
// x.slice(0, 7), x.slice(0+1, 7+1) till x.length()