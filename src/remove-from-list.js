const { NotImplementedError } = require('../lib');
const { ListNode } = require('../extensions/list-node.js');

function removeKFromList(l, k) {
  const dummy = new ListNode(null);
  dummy.next = l;
  let cur = dummy;
  while (cur.next) {
    if (cur.next.value === k) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return dummy.next;
}

module.exports = {
  removeKFromList
};