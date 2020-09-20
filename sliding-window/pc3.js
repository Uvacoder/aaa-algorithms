exports.cases = [
  [["aabdec", "abc"], "abdec"],
  [["abdabca", "abc"], "abc"],
  [["adcad", "abc"], ""],
];

/**
 * Finds the smallest substring which has all of the characters of the given pattern.
 * @param {string} str
 * @param {string} pattern
 */
exports.fn = function findSmallestSubstring(str, pattern) {
  const patternCharacters = new Set(pattern);
  const missingCharacters = new Set(patternCharacters);
  const frequencies = new Map();

  let windowStart = 0;
  let minPointers = null;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    // Grow the window until it contains all of the characters in pattern
    const char = str.charAt(windowEnd);
    missingCharacters.delete(char);

    // frequencies is always synced to the current window
    if (frequencies.has(char)) {
      frequencies.set(char, frequencies.get(char) + 1);
    } else {
      frequencies.set(char, 1);
    }

    // 2. Shrink the window until it no longer contains all of the characters
    while (missingCharacters.size === 0) {
      const startChar = str.charAt(windowStart);
      frequencies.set(startChar, frequencies.get(startChar) - 1);
      if (frequencies.get(startChar) === 0 && patternCharacters.has(startChar)) {
        missingCharacters.add(startChar);
      }

      // Update running count with window size
      if (minPointers === null) {
        minPointers = [windowStart, windowEnd];
      } else {
        const [minStart, minEnd] = minPointers;
        if (windowEnd - windowStart < minEnd - minStart) {
          minPointers = [windowStart, windowEnd];
        }
      }

      windowStart++;
    }
  }

  if (minPointers === null) {
    return "";
  }

  const [start, end] = minPointers;
  return str.slice(start, end + 1);
};
