const { NotImplementedError } = require('../lib');

class Queue {
  constructor() {
    this._head = null;
    this._tail = null;
  }

  getUnderlyingList() {
    return this._head;
  }

  enqueue(value) {
    const node = { value, next: null };
    if (!this._head) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }
  }

  dequeue() {
    if (!this._head) return undefined;
    const { value } = this._head;
    this._head = this._head.next;
    if (!this._head) this._tail = null;
    return value;
  }
}

module.exports = {
  Queue
};