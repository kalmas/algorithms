/**
 * @param {number[]} nums sorted list of integers to remove duplicates from
 * @return {number} count of unique values in list
 */
const removeDuplicates = function(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let behind = 0;
  let ahead = 0;

  while (ahead < nums.length) {
    if (nums[behind] === nums[ahead]) {
      ahead = ahead + 1;
    } else {
      behind = behind + 1;
      nums[behind] = nums[ahead];
    }
  }

  // blank out remainder of array with nulls
  for (let x = behind + 1; x < nums.length; x++) {
    nums[x] = null;
  }

  // slow pointer index plus 1 equals number of duplicates
  return behind + 1;
};

module.exports = removeDuplicates;
