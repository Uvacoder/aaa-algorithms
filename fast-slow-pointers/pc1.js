const { createCases } = require("./list");

exports.cases = createCases([
  [[2, 4, 6, 4, 2], true],
  [[2, 4, 6, 6, 4, 2], true],
  [[2, 4, 6, 4, 2, 2], false],
]);

exports.fn = function isPalindrome(list) {
  return false;
};
