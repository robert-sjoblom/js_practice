//https://leetcode.com/problems/elimination-game/description/


//n = 1, x = 1
//n = 2, x = 2
//n = 3, x = 2
//n = 4, x = 2
//n = 5, x = 2
//n = 6, x = 4
//n = 7, x = 4
//n = 8, x = 6, n = 16, x = 6, n = 24, x = 14
//n = 9, x = 6, n = 18, x = 8, n = 27, x = 16, n = 36, x = 22, n = 45, x = 30
//n = 10, x = 8
//n = 11, x = 8
//n = 12, x = 6
//n = 13, x = 6
//n = 14, x = 8

Array.range = function (a, b, step) {
    var A = [];
    if (typeof a == 'number') {
        A[0] = a;
        step = step || 1;
        while (a + step <= b) {
            A[A.length] = a += step;
        }
    }
    return A;
};

var lastRemaining = function(n) {
    let tempList = new Array.range(2, n, 2).reverse();

    //let tempList = new Array(n).fill().map((e,i)=>i+1)
    //console.log(tempList);
    while (tempList.length > 1) {
        tempList = tempList.filter((_, i) => i%2 != 0);
        //console.log(tempList);
        tempList.reverse();
    }
    return tempList[0];
};

console.log(lastRemaining(24));