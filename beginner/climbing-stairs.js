/**
 * @param {number} n
 * @return {number}
 */
const memoize = {};

const climbStairs = function(n) {
  if (n <= 1) {
    return 1;
  }

  if (memoize[n] === undefined) {
    memoize[n] = climbStairs(n-1) + climbStairs(n-2);
  }

  return memoize[n];
};

module.exports = climbStairs;
