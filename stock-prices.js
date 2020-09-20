exports.cases = [
  [[7, 1, 5, 3, 6, 4], 5],
  [[7, 6, 4, 3, 1], 0],
  [[7, 9, 1], 2],
];

exports.fn = function stockPrices(prices) {
  let maxPrice = 0;
  let minSoFar = Number.POSITIVE_INFINITY;

  for (const stock of prices) {
    maxPrice = Math.max(maxPrice, stock - minSoFar);
    minSoFar = Math.min(minSoFar, stock);
  }

  return maxPrice;
};
