exports.cases = [
  [["xy#z", "xzz#"], true],
  [["xy#z", "xyz#"], false],
  [["xp#", "xyz##"], true],
  [["xywrrmp", "xywrrmu#p"], true],
  [["xywr#rmp", "xywr#rmu#p"], true],
];

exports.fn = function compareWithBackspace(str1, str2) {
  const parsed1 = parse(str1);
  const parsed2 = parse(str2);
  return parsed1 === parsed2;
};

const BACKSPACE_CHAR = "#";

/**
 * @param {string} str
 */
function parse(str) {
  let result = [];

  let curr = 0;
  let ahead = 1;

  while (curr < str.length) {
    const char = str.charAt(curr);
    result.push(char);

    while (str.charAt(ahead) === BACKSPACE_CHAR) {
      ahead++;
      result.pop();
      curr--;
    }

    ahead++;
    curr = ahead - 1;
  }

  return result.join("");
}
