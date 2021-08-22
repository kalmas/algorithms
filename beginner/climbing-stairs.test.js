const climbStairs = require('./climbing-stairs').climbStairs;
const climbStairsLoop = require('./climbing-stairs').climbStairsLoop;
const resetCache = require('./climbing-stairs').resetCache;

beforeEach(() => {
  resetCache();
});

test('find number of steps', () => {
  expect(climbStairs(1)).toBe(1);
  expect(climbStairs(2)).toBe(2);
  expect(climbStairs(3)).toBe(3);
  expect(climbStairs(4)).toBe(5);
  expect(climbStairs(50)).toBe(20365011074);
  expect(climbStairs(1000)).toBe(7.0330367711422765e+208);
});

test('find number of steps with loop', () => {
  expect(climbStairsLoop(1)).toBe(1);
  expect(climbStairsLoop(2)).toBe(2);
  expect(climbStairsLoop(3)).toBe(3);
  expect(climbStairsLoop(4)).toBe(5);
  expect(climbStairsLoop(50)).toBe(20365011074);
  expect(climbStairsLoop(1000)).toBe(7.0330367711422765e+208);
  expect(climbStairsLoop(10000)).toBe(Infinity);
});
