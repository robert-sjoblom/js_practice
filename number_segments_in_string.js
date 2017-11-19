//
// @param {string} s
// @return {number}
//

const aString = "Hello";

var countSegments = function(s) {
    let theList = s.split(" ");
    return theList.filter(Boolean).length;

};
countSegments(aString);