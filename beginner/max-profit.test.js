const maxProfit = require('./max-profit');


test('calculates best profit', () => {
  const prices = [7, 1, 5, 3, 6, 4];
  expect(maxProfit(prices)).toBe(7);
});

test('calculates best profit when there is none to be made', () => {
  const prices = [7, 6, 4, 3, 1];
  expect(maxProfit(prices)).toBe(0);
});

test('handle empty array', () => {
  const prices = [];
  expect(maxProfit(prices)).toBe(0);
});
