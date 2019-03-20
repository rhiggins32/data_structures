/* Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum. 
Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

*/

// O(n2)

nums = [-2,1,-3,4,-1,2,1,-5,4]

let maxSubArray = function(nums) {
  let currentVal = 0;
  let maxVal = nums[0];

  nums.forEach(val => {
    //check that currentVal is greater than 0 
    currentVal = currentVal > 0 ? currentVal + val : val;
    maxVal = Math.max(maxVal, currentVal);
  });
  return maxVal;
};

console.log(maxSubArray(nums))

//FOR LOOP O(n2)

function getMaxSubSum(nums) {
  let maxSum = 0;

  for(let i = 0; i < nums.length; i++){
    let sumFixedStart = 0 
    for(let j = 0; j < nums.length; j++){
      sumFixedStart += nums[j];
      maxSum = Math.max(maxSum, sumFixedStart)
    }
  }
  return maxSum 
}

//FASTER O(n) 


function getMaximumSubSum(nums){
  let maxSum = 0;
  let partialSum = 0
  for(let item of nums) { //for each item in array
    partialSum += item;  //add to partialSum
    maxSum = Math.max(maxSum, partialSum); //remember the maximum
    if(partialSum < 0) partialSum = 0; //zero if negative 
  }
  return maxSum
}

console.log(getMaximumSubSum(nums));