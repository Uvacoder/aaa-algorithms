exports.cases = [
  [
    [1, 2, 3],
    [1, 4, 9],
  ],
  [
    [-2, -1, 1, 3],
    [1, 1, 4, 9],
  ],
];

exports.fn = function sortedSquares(arr) {
  const squared = arr.map((n) => n * n);
  squared.sort((a, b) => a - b);
  return squared;
};
