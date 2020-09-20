const listNode = (value) => ({ value, next: null });

const fromArray = (arr) => {
  let head = null;
  let curr = null;

  arr.forEach((el) => {
    const node = listNode(el);
    if (!head) {
      head = node;
    }
    if (curr) {
      curr.next = node;
    }
    curr = node;
  });

  return head;
};

const createCases = (cases) => cases.map(([list, out]) => [[fromArray(list)], out]);

module.exports = {
  listNode,
  fromArray,
  createCases,
};
