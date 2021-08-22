const climbingStairs = require('./climbing-stairs');

test('find number of steps', () => {
  expect(climbingStairs(1)).toBe(1);
  expect(climbingStairs(2)).toBe(2);
  expect(climbingStairs(3)).toBe(3);
  expect(climbingStairs(4)).toBe(5);
  expect(climbingStairs(50)).toBe(20365011074);
  expect(climbingStairs(1000)).toBe(7.0330367711422765e+208);
});
