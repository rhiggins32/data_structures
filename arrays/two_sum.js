//TWO SUM
//Given an array of integers, return INDICES of the two numbers such that they add up to a specific target
//You may assume each input would have exactly one solution
// given nums = [2,7,11,15], target = 9,
//because nums[0] + nums[1] = 2 + 7 = 9, return [0,1]

//@param {number[]} nums
//@param {number} target
//@return {number[]}

nums = [2, 7, 11, 15];

function twoSum(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i,j];
      }
    }
  }
}

console.log(twoSum(nums, 22));
console.log(twoSum(nums, 9))

