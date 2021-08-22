/**
 * @param {number} n
 * @return {number}
 */
let memoize = {0: 1, 1: 1};

const climbStairs = function(n) {
  if (memoize[n] === undefined) {
    memoize[n] = climbStairs(n-1) + climbStairs(n-2);
  }

  return memoize[n];
};

const climbStairsLoop = function(n) {
  for (let x = 2; x <= n; x++) {
    memoize[x] = memoize[x-1] + memoize[x-2];
  }

  return memoize[n];
};

const resetCache = function() {
  memoize = {0: 1, 1: 1};
};

module.exports = {
  climbStairs: climbStairs,
  climbStairsLoop: climbStairsLoop,
  resetCache: resetCache,
};
