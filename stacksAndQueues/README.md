# Stacks and Queues
* A stack is a data structure with a First In Last Out order for the addition or removal of elements.
* A queue is a data structure with a First In First Out order for the addition or removal of elements.

## Challenge
* Implement a stack data structure with a linked list.
* Implement a queue data structure with a linked list.
* Implement a stack data structure with an array.
* Implement a queue data structure with an array.

## Approach & Efficiency
* Stack with linked list - constructed node, specified top node - O(1) space/time
* Queue with linked list - constructed node, specified front and back nodes - O(1) space/time
* Stack with array - specified top and size values - O(1) space/time
* Queue with array - specified front, back, and size values - O(1) space/time


## API
Stacks
* .push() - Adds a new value to the stack, making it the top
* .pop() - Removes the top value from the stack
* .peek() - If the stack contains values, returns the top value from the stack

Queues
* .enqueue() - Adds a new value to the queue, making it the front if there are no values, or the back if there are existing values in the queue
* .dequeue() - Removes and returns the first value from the queue
* .peek() - Checks if the queue contains values. If so, returns the front value.
