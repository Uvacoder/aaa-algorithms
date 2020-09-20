const { createCases } = require("./list");

exports.cases = createCases([
  [[2, 4, 6, 4, 2], true],
  [[2, 4, 6, 6, 4, 2], true],
  [[2, 4, 6, 4, 2, 2], false],
]);

exports.fn = function isPalindrome(list) {
  let fast = list;
  let slow = list;

  /**
   * Find the midpoint of the list
   */
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  /**
   * Here, slow points to the midpoint of the list. If the list is
   * an even length, slow points to the right element. Now, reverse
   * the list in place up to the element pointed by slow.
   */
  let curr = list;
  let prev = null;
  while (curr && curr !== slow) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  /**
   * If the list is an odd length, `slow` points to the exact midpoint
   * of the list. For a palindrome, this midpoint doesn't matter, so we
   * iterate `slow` one forward.
   *
   * The list is odd only if `fast` is not null.
   */
  if (fast) {
    slow = slow.next;
  }

  /**
   * Now we iterate through `prev` and `slow`, comparing each element. If
   * any element doesn't match, we know it's NOT a palindrome.
   */
  while (prev || slow) {
    if (!prev || !slow) {
      return false;
    }
    if (prev.value !== slow.value) {
      return false;
    }
    prev = prev.next;
    slow = slow.next;
  }

  return true;
};
