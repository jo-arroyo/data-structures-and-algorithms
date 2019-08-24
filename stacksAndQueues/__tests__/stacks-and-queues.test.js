'use strict';

let {Stack, Queue, StackAlt, QueueAlt} = require('../stacks-and-queues');

describe('Stacks with Linked List', () => {
  test('Can successfully push onto a stack', () => {
    const testStack = new Stack;
    testStack.push(2);
    expect(testStack.top.value).toEqual(2);
    expect(testStack.top.next).toEqual(null);
  });

  test('Can successfully push multiple values onto a stack', () => {
    const testStack = new Stack;
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    expect(testStack.top.value).toEqual(3);
    expect(testStack.top.next.value).toEqual(2);
  });

  test('Can successfully pop off the stack', () => {
    const testStack = new Stack;
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    let returned = testStack.pop();
    expect(returned.value).toEqual(3);
    expect(returned.next).toEqual(null);
    expect(testStack.top.value).toEqual(2);
  });

  test('Can successfully empty a stack after multiple pops', () => {
    const testStack = new Stack;
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    testStack.pop();
    testStack.pop();
    let returned = testStack.pop();
    expect(returned.value).toEqual(1);
    expect(returned.next).toEqual(null);
    expect(testStack.top).toEqual(null);
  });

  test('Can successfully peek the next item on the stack', () => {
    const testStack = new Stack;
    expect(testStack.peek()).toEqual(null);
    testStack.push(1);
    expect(testStack.peek()).toEqual(1);
    testStack.push(2);
    expect(testStack.peek()).toEqual(2);
  });

  test('Can successfully instantiate an empty stack', () => {
    const testStack = new Stack;
    expect(testStack.top).toEqual(null);
    expect(testStack.peek()).toEqual(null);
  });
});

describe('Queues with Linked List', () => {
  test('Can successfully enqueue into a queue', () => {
    const testQueue = new Queue;
    testQueue.enqueue(10);
    expect(testQueue.front.value).toEqual(10);
    expect(testQueue.front.next).toEqual(null);
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    const testQueue = new Queue;
    testQueue.enqueue(10);
    testQueue.enqueue(20);
    testQueue.enqueue(30);
    expect(testQueue.front.value).toEqual(10);
    expect(testQueue.front.next.value).toEqual(20);
    expect(testQueue.front.next.next.value).toEqual(30);
    expect(testQueue.back.value).toEqual(30);
    expect(testQueue.front.next.next.next).toEqual(null);
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    const testQueue = new Queue;
    testQueue.enqueue(10);
    testQueue.enqueue(20);
    let returned = testQueue.dequeue();
    expect(returned).toEqual(10);
    expect(testQueue.front.value).toEqual(20);
    expect(testQueue.front.next).toEqual(null);
  });

  test('Can successfully peek into a queue, seeing the expected value', () => {
    const testQueue = new Queue;
    expect(testQueue.peek()).toEqual(null);
    testQueue.enqueue(10);
    expect(testQueue.peek()).toEqual(10);
    testQueue.enqueue(20);
    expect(testQueue.peek()).toEqual(10);
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    const testQueue = new Queue;
    testQueue.enqueue(10);
    testQueue.enqueue(20);
    testQueue.enqueue(30);
    testQueue.dequeue();
    testQueue.dequeue();
    let returned = testQueue.dequeue();
    expect(returned).toEqual(30);
    expect(testQueue.front).toEqual(null);
  });

  test('Can successfully instantiate an empty queue', () => {
    const testQueue = new Queue;
    expect(testQueue.front).toEqual(null);
    expect(testQueue.peek()).toEqual(null);
  });
});

describe('Stacks with Arrays', () => {
  test('Can successfully push onto a stack', () => {
    const testStack = new StackAlt;
    testStack.push(2);
    expect(testStack.top).toEqual(2);
    expect(testStack.size).toEqual(1);
  });

  test('Can successfully push multiple values onto a stack', () => {
    const testStack = new StackAlt;
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    expect(testStack.top).toEqual(3);
    expect(testStack.size).toEqual(3);
  });

  test('Can successfully pop off the stack', () => {
    const testStack = new StackAlt;
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    let returned = testStack.pop();
    expect(returned).toEqual(3);
    expect(testStack.size).toEqual(2);
    expect(testStack.top).toEqual(2);
  });

  test('Can successfully empty a stack after multiple pops', () => {
    const testStack = new StackAlt;
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    testStack.pop();
    testStack.pop();
    let returned = testStack.pop();
    expect(returned).toEqual(1);
    expect(testStack.top).toEqual(undefined);
  });

  test('Can successfully peek the next item on the stack', () => {
    const testStack = new StackAlt;
    expect(testStack.peek()).toEqual(null);
    testStack.push(1);
    expect(testStack.peek()).toEqual(1);
    testStack.push(2);
    expect(testStack.peek()).toEqual(2);
  });

  test('Can successfully instantiate an empty stack', () => {
    const testStack = new StackAlt;
    expect(testStack.top).toEqual(null);
    expect(testStack.peek()).toEqual(null);
  });
});

describe('Queues with Arrays', () => {
  test('Can successfully enqueue into a queue', () => {
    const testQueue = new QueueAlt;
    testQueue.enqueue(10);
    expect(testQueue.front).toEqual(10);
    expect(testQueue.size).toEqual(1);
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    const testQueue = new QueueAlt;
    testQueue.enqueue(10);
    testQueue.enqueue(20);
    testQueue.enqueue(30);
    expect(testQueue.front).toEqual(10);
    expect(testQueue.back).toEqual(30);
    expect(testQueue.size).toEqual(3);
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    const testQueue = new QueueAlt;
    testQueue.enqueue(10);
    testQueue.enqueue(20);
    testQueue.enqueue(30);
    let returned = testQueue.dequeue();
    expect(returned).toEqual(10);
    expect(testQueue.front).toEqual(20);
    expect(testQueue.size).toEqual(2);
  });

  test('Can successfully peek into a queue, seeing the expected value', () => {
    const testQueue = new QueueAlt;
    expect(testQueue.peek()).toEqual(null);
    testQueue.enqueue(10);
    expect(testQueue.peek()).toEqual(10);
    testQueue.enqueue(20);
    expect(testQueue.peek()).toEqual(10);
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    const testQueue = new QueueAlt;
    testQueue.enqueue(10);
    testQueue.enqueue(20);
    testQueue.enqueue(30);
    testQueue.dequeue();
    testQueue.dequeue();
    let returned = testQueue.dequeue();
    expect(returned).toEqual(30);
    expect(testQueue.front).toEqual(undefined);
  });

  test('Can successfully instantiate an empty queue', () => {
    const testQueue = new QueueAlt;
    expect(testQueue.front).toEqual(null);
    expect(testQueue.peek()).toEqual(null);
  });
});