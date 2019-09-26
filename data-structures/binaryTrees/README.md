# Challenge - Find the maximum value in a binary tree.

## Challenge Description
Traverse each node of a binary tree, store the largest value to a variable, update the variable if found a node with a larger value, return variable.

## Approach & Efficiency
Depth-first traversal of binary tree 
- O(n) time, because it must traverse through each node in the tree
- O(H) space, because the call stack will never exceed the height of the tree
Storage of largest value in max variable
- O(1) time and space, because only one value is being stored at a time

## Solution
![Whiteboard Image](../../assets/find-max-value-binary-tree.jpg)

# Challenge Summary - Find the height of a binary tree

## Challenge Description
Traverse each node of a binary tree, return the height from the root node to the furtherest leaf node. 

## Approach & Efficiency
Depth-first traversal of binary tree 
- O(n) time, because it must traverse through each node in the tree.
- O(H) space, because the call stack will never exceed the height of the tree.
- O(1) time and space for storage of height in left and right variables, because only one value is being stored at a time

## Solution
![Whiteboard Image](../../assets/tree_height.jpg)