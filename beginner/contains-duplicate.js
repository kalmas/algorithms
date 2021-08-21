/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  const map = {};
  for (let x = 0; x < nums.length; x++) {
    if (map[nums[x]] === null) {
      return true;
    }

    map[nums[x]] = null;
  }

  return false;
};

module.exports = containsDuplicate;
