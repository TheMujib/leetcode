let finalPrices = function (prices) {
  const output = [];

  for (let i = 0; i < prices.length; i++) {
    let newValue = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] >= prices[j]) {
        newValue = prices[i] - prices[j];
        break;
      }
    }
    output.push(newValue);
  }

  return output;
};

// T.C: O(n^2)
// S.C: O(n)

// link :- https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
