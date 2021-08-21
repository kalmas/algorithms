/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  const map = {};

  for (let x = 0; x < nums.length; x++) {
    if (map[nums[x]] === null) {
      delete map[nums[x]];
      continue;
    }

    map[nums[x]] = null;
  }

  return parseInt(Object.keys(map)[0]);
};

module.exports = singleNumber;
