/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

nums = [0, 1, 0, 3, 12];

let moveZeroes = function(nums) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[counter] = nums[i];
      counter++;
    }
  }
  while (counter < nums.length) {
    nums[counter] = 0;
    counter++;
  }
  return nums;
};

console.log(moveZeroes(nums))

/*
SOLUTION

Use a counter index to make changes on the original array. 
First counter starts from 0, i starts from 0

If the current element is not 0:
 place the non zero element at current cunter location
 increment counter index by 1
 increment i by 1 to check the next element

If the current element is 0:
 increment i to check the next element

After we run through the whole array, all the non-zeros were moved to the front, and counter is at the start index where 0 should be placed.

The last thing is to add 0s till the end

*/