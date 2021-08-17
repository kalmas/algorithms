/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  if (prices.length < 2) {
    return 0;
  }

  let profit = 0;

  for (let x = 1; x < prices.length; x = x + 1) {
    const difference = prices[x] - prices[x - 1];
    if (difference > 0) {
      profit = profit + difference;
    }
  }

  return profit;
};

module.exports = maxProfit;
