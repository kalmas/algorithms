const containsDuplicate = require('./contains-duplicate');

test('contains duplicate', () => {
  expect(containsDuplicate([0, 1, 1, 1, 2, 2])).toBe(true);
  expect(containsDuplicate([0, 1, 2, 3, 4, 5])).toBe(false);
});


test('contains duplicate on big long list', () => {
  const bigLongList = [];
  for (let x = 0; x<100000; x++) {
    bigLongList.push(x);
  }

  expect(containsDuplicate(bigLongList)).toBe(false);
});

test('contains duplicate on big long list with one duplicate', () => {
  const bigLongList = [];
  for (let x = 0; x<100000; x++) {
    bigLongList.push(x);
  }

  bigLongList.push(0);

  expect(containsDuplicate(bigLongList)).toBe(true);
});
