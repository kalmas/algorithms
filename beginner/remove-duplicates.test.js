const removeDuplicates = require('./remove-duplicates-02');

test('removes duplicates in place', () => {
  const nums = [0, 1, 1, 1, 2, 2];
  expect(removeDuplicates(nums)).toBe(3);

  expect(nums.length).toBe(6);

  expect(nums).toStrictEqual([0, 1, 2, null, null, null]);
});

test('handles empty array', () => {
  const nums = [];
  expect(removeDuplicates(nums)).toBe(0);

  expect(nums.length).toBe(0);

  expect(nums).toStrictEqual([]);
});

test('handles long array of single value', () => {
  const nums = [];
  for (let x = 0; x < 10000; x++) {
    nums.push(1);
  }

  expect(removeDuplicates(nums)).toBe(1);

  expect(nums.length).toBe(10000);

  expect(nums[0]).toBe(1);
  expect(nums[1]).toBe(null);
});

test('handles long array with no duplicates', () => {
  const nums = [];
  for (let x = 0; x < 10000; x++) {
    nums.push(x);
  }

  expect(removeDuplicates(nums)).toBe(10000);

  expect(nums.length).toBe(10000);

  expect(nums[0]).toBe(0);
  expect(nums[1]).toBe(1);
});
