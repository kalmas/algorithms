const getNextIndex = function(currentIndex, stepSize, arrayLength) {
  const next = currentIndex + stepSize;
  if (next > arrayLength - 1) {
    return next - arrayLength;
  }

  return next;
};


const gcd = function(a, b) {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
  if (nums.length === 0 || k === 0) {
    return;
  }

  if (k > nums.length) {
    k = k % nums.length;
  }

  const setSize = gcd(k, nums.length);

  if (setSize === nums.length) {
    return;
  }

  for (let x = 0; x < setSize; x++) {
    const start = x;
    let valueToMove = nums[start];
    let index = getNextIndex(start, k, nums.length);

    while (index !== start) {
      const temp = nums[index];
      nums[index] = valueToMove;
      valueToMove = temp;
      index = getNextIndex(index, k, nums.length);
    }

    nums[index] = valueToMove;
  }
};

module.exports = {rotate: rotate, gcd: gcd};
