/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-self-assign */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* jshint esversion:6 */
const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    let newNode = new ListNode(element);
    if (!this.head) {
      this.head = newNode;
      return this.head.value;
    }
    this.tail = this.head;
    while (this.tail.next !== null) {
      this.tail = this.tail.next;
    }
    this.tail.next = newNode;
    this.length += 1;
    return this.head.value;
  }

  dequeue() {
    if (!this.head) {
      return;
    }
    let curNode = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return curNode.value;
  }
}

module.exports = Queue;
