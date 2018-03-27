

//takes an array and reduces to some other value
const data = [1, 2, 3];
const reducer = (accumulator, currentValue) => { 
    console.log(accumulator);
    return accumulator +  currentValue;
};

const result = data.reduce(reducer, 0); /*?*/

data.reduce((a, b) => a + b, 0); /*?*/

//

const data2 = [
    1, 1, 3, 2, 2, 4, 2, 1, 1, 1
];

const reducer2 = (frequencies, dataPoint) => {
    //frequencies /*?*/
    if (!frequencies[dataPoint]) {
        frequencies[dataPoint] = 1;
    } else {
        frequencies[dataPoint] += 1;
    }
    return frequencies;
};

const frequencyTable = data2.reduce(reducer2, {}); /*?*/

//

const data3 = [
    1, 1, 3, 2, 2, 4, 2, 1, 1, 1
];

const meanReducer = (acc, cur, index, array) => {
    return acc + cur/array.length; //divisions are expensive, and we're dividing by a constant. divide result instead.
};

const mean = data3.reduce(meanReducer, 0); /*?*/

const devReducer = (acc, cur, index, array) => {
    return acc + Math.pow((cur - mean), 2);
};

const stdDeviation = Math.sqrt(data3.reduce(devReducer, 0)/(data3.length-1)); /*?*/