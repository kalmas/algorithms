const singleNumber = require('./single-number');

test('find single number', () => {
  expect(singleNumber([0, 0, 1, 1, 2, 2, 3])).toBe(3);
  expect(singleNumber([0, 0, 1, 1, 2, 2, 3, 3])).toBe(NaN);
});
