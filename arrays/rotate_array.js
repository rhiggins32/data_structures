/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

function rotate(nums, k) {
  k %= nums.length;
  console.log(k);
  const rotated = new Array(nums.length);
  for (let i = 0; i < k; i++) {
    rotated[i] = nums[nums.length - k + i];
  }
  for (let i = 0; i < nums.length - k; i++) {
    rotated[i + k] = nums[i];
  }
  return rotated;
}

console.log(rotate([1, 2, 3, 4], 1));

//Faster Method with built in array methods

function rotated(nums, k) {
  k %= nums.length;
  const m = nums.length - k;
  return nums.slice(m).concat(nums.slice(0, m));
}

console.log(rotated([1, 2, 3, 4], 1));

//METHOD THREE

var rotateArr = function(nums, k) {
  let i;
  k = k % nums.length;

  for (i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  return nums;
};

console.log(rotateArr([1, 2, 3, 4], 3));
