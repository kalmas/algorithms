const rotate = require('./rotate-array');

// const nums = [0, 1, 1, 1, 2, 2];
// console.log(nums);

// rotate.rotate(nums, 3);

// console.log(nums);

test('gcd', () => {
  expect(rotate.gcd(2, 3)).toBe(1);
  expect(rotate.gcd(3, 2)).toBe(1);
  expect(rotate.gcd(7, 21)).toBe(7);
  expect(rotate.gcd(2, 1)).toBe(1);
  expect(rotate.gcd(0, 1)).toBe(1);
  expect(rotate.gcd(1, 0)).toBe(1);
  expect(rotate.gcd(5, 10)).toBe(5);
  expect(rotate.gcd(10, 10)).toBe(10);
});

test('rotates array in place', () => {
  const nums = [0, 1, 1, 1, 2, 2];

  rotate.rotate(nums, 3);

  expect(nums).toStrictEqual([1, 2, 2, 0, 1, 1]);
});

test('rotates empty array', () => {
  const nums = [];

  rotate.rotate(nums, 2);

  expect(nums).toStrictEqual([]);
});

test('rotates empty array', () => {
  const nums = [1, 2];

  rotate.rotate(nums, 3);

  expect(nums).toStrictEqual([2, 1]);
});

test('rotates long array', () => {
  const nums = [];
  for (let x = 0; x < 10000000; x ++) {
    nums.push(x);
  }

  rotate.rotate(nums, 20);

  expect(nums[0]).toBe(9999980);
  expect(nums[1]).toBe(9999981);
  expect(nums[2]).toBe(9999982);
});


