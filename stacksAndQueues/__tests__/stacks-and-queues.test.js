'use strict';

let {Stack} = require('../stacks-and-queues');
let {Node} = require('../stacks-and-queues');
let {Queue} = require('../stacks-and-queues');


describe('Stacks', () => {
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