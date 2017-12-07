

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

var nums = [6, 2, 4];
var target = 6;

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        for (let j = i+1; j < nums.length; j++) {
            const value2 = nums[j];
            if (value + value2 == target) {
                return [i, j];
            }
        }
    }
};
console.log(twoSum(nums, target));
