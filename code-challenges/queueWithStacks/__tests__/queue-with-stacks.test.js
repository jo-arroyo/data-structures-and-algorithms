'use strict';

const pseudoqQueue = require('../queue-with-stacks');

describe('Queue with stacks', () => {
  test('Can enqueue to empty queue', () => {
    const testQueue = new pseudoqQueue();
    testQueue.enqueue(2);
    expect(testQueue.stackA.top).toEqual(2);
    expect(testQueue.stackB.top).toEqual(null);
  });

  test('Can enqueue to multiple values', () => {
    const testQueue = new pseudoqQueue();
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.stackA.top).toEqual(3);
    expect(testQueue.stackB.top).toEqual(null);
  });

  test('Can dequeue', () => {
    const testQueue = new pseudoqQueue();
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    let result = testQueue.dequeue();
    expect(result).toEqual(1);
  });

  test('Dequeue an empty pseudoQueue', () => {
    const testQueue = new pseudoqQueue();
    let result = testQueue.dequeue();
    expect(result).toEqual(undefined);
  });
});