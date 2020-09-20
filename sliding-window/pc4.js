exports.cases = [
  /* [
    ["catfoxcat", ["cat", "fox"]],
    [0, 3],
  ],
  [["catcatfoxfox", ["cat", "fox"]], [3]],
  [["catandfox", ["cat", "fox"]], []],
  [["catfoxcat", ["cat", "cat", "fox"]], [0]], */
  [
    [
      "lingmindraboofooowingdingbarrwingmonkeypoundcake",
      ["fooo", "barr", "wing", "ding", "wing"],
    ],
    [13],
  ],
  [
    ["afoobardefgbarfoo", ["foo", "bar"]],
    [1, 11],
  ],
];

/**
 * @param {string} str
 * @param {string[]} words
 */
exports.fn = function findAllConcatenations(str, words) {
  if (!words.length) {
    return [];
  }

  const wordFrequencies = getWordFrequencies(words);
  const wordLength = words[0].length;
  const windowSize = wordLength * words.length;
  let nonZeroCount = wordFrequencies.size;

  const indices = [];

  let windowStart = 0;

  // O(n/k)
  for (
    let windowEnd = wordLength;
    windowEnd <= str.length;
    windowEnd += wordLength
  ) {
    const word = str.slice(windowEnd - wordLength, windowEnd); // O(k)

    if (wordFrequencies.has(word)) {
      const count = wordFrequencies.get(word);
      wordFrequencies.set(word, count - 1);
      if (count === 1) {
        nonZeroCount--;
      } else if (count === 0) {
        nonZeroCount++;
      }
    }

    if (nonZeroCount === 0) {
      indices.push(windowStart);
    }

    if (windowEnd >= windowSize - 1) {
      const wordToRemove = str.slice(windowStart, windowStart + wordLength); // O(k)

      if (wordFrequencies.has(wordToRemove)) {
        const count = wordFrequencies.get(wordToRemove);
        wordFrequencies.set(wordToRemove, count + 1);
        if (count === -1) {
          nonZeroCount--;
        } else if (count === 0) {
          nonZeroCount++;
        }
      }

      windowStart += wordLength;
    }
  }

  return indices;
};

// O(words.length)
function getWordFrequencies(words) {
  const frequencies = new Map();
  for (const word of words) {
    const count = frequencies.get(word);
    frequencies.set(word, count ? count + 1 : 1);
  }
  return frequencies;
}
