const scootDown = function(nums, start) {
  for (let x = start; x < nums.length - 1; x = x + 1) {
    nums[x] = nums[x + 1];

    if (nums[x] == null) {
      // once we've reached a null we're done
      return;
    }
  }

  // if we reach the end of the list set a null
  nums[nums.length - 1] = null;
};

const compress = function(nums, start) {
//   console.log(nums);
  if (nums[start] == null || start == nums.length) {
    return start;
  }

  if (nums[start] == nums[start + 1]) {
    scootDown(nums, start);
    return compress(nums, start);
  }

  return compress(nums, start + 1);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  return compress(nums, 0);
};

module.exports = removeDuplicates;
