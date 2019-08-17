'use strict';

const LinkedList = require('./linked-list');

const linkedList = new LinkedList();

linkedList.insert(10);
linkedList.insert(20);
linkedList.insert(30);

console.log(linkedList.includes(10));

console.log(linkedList.toString());