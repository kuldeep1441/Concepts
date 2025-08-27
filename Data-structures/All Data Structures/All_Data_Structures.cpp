// Here's a detailed overview of various data structures, including their implementations, storage types, real-world applications, time and space complexities, and associated data types.

// 1. Array
// Implementation: Contiguous block of memory.
// Storage Type: Static (fixed size).
// Real-World Use: Lists, matrices, and data representation.
// Time Complexity:
// Access: O(1)
// Search: O(n)
// Insertion/Deletion: O(n)
// Space Complexity: O(n) for n elements.
// Data Types: Integers, floats, characters, etc.



// 2. Linked List
// Implementation: Nodes with pointers to the next node.
// Storage Type: Dynamic.
// Real-World Use: Dynamic memory allocation, managing lists.
// Time Complexity:
// Access: O(n)
// Search: O(n)
// Insertion/Deletion: O(1) (if position is known)
// Space Complexity: O(n) for n nodes.
// Data Types: Generic (can hold any data type).




// 3. Stack
// Implementation: Can be implemented using arrays or linked lists.
// Storage Type: Dynamic.
// Real-World Use: Undo functionality in applications, expression parsing.
// Time Complexity:
// Push/Pop: O(1)
// Access: O(n) (to search for elements)     ******
// Space Complexity: O(n) for n elements.
// Data Types: Generic (can hold any data type).




// 4. Queue
// Implementation: Can be implemented using arrays or linked lists.
// Storage Type: Dynamic.
// Real-World Use: Task scheduling, print job management.
// Time Complexity:
// Enqueue/Dequeue: O(1)
// Access: O(n)
// Space Complexity: O(n) for n elements.
// Data Types: Generic (can hold any data type).




// 3. Hash Table
// Implementation: Arrays with hash functions.
// Storage Type: Array of linked lists (chaining) or open addressing.
// Real-world Application: Caching, databases, sets.
// Time Complexity: Average O(1), Worst O(n).
// Space Complexity: O(n).




// 4. Binary Heap
// Implementation: A binary heap is a complete binary tree stored as array. The parent node is always greater (max-heap) or smaller (min-heap) than its children.

// Storage Type: Array-based representation.

// Real-world Application: Used in implementing priority queues, heapsort algorithm, and for scheduling tasks.

// Time Complexity:

// Insert: O(log n)
// Remove (Extract-Min/Max): O(log n)
// Peek (Get Min/Max): O(1)
// Space Complexity: O(n)

// Data Types: Typically used for numeric values but can be adapted for any comparable type.




// 5. Priority Queue
// Implementation: Often implemented using heaps (binary heap).
// Storage Type: Dynamic.
// Real-World Use: Task scheduling (e.g., CPU scheduling).
// Time Complexity:
// Insert: O(log n)
// Remove (highest priority): O(log n)
// Access (highest priority): O(1)
// Space Complexity: O(n) for n elements.
// Data Types: Generic (can hold any data type).



// 6. Deque (Double-Ended Queue)
// Implementation: Can be implemented using circular arrays or linked lists.
// Storage Type: Dynamic.
// Real-World Use: Undo mechanisms, palindromic checks.
// Time Complexity:
// Insert/Remove from both ends: O(1)
// Access: O(n)
// Space Complexity: O(n) for n elements.
// Data Types: Generic (can hold any data type).



// 7. Binary Tree
// Implementation: Nodes with left and right pointers.
// Storage Type: Dynamic.
// Real-World Use: Hierarchical data representation (e.g., file systems).
// Time Complexity:
// Access/Search: O(n) in worst case (O(log n) for balanced trees)
// Space Complexity: O(n) for n nodes.
// Data Types: Generic (can hold any data type).



// 8. Binary Search Tree (BST)
// Implementation: A binary tree where left nodes are less than the parent, and right nodes are greater.
// Storage Type: Dynamic.
// Real-World Use: Sorted data management, searching algorithms.
// Time Complexity:
// Insert/Search/Delete: O(log n) on average, O(n) in worst case.
// Space Complexity: O(n) for n nodes.
// Data Types: Generic (can hold any data type).



// 9. Balanced Tree
// Implementation: AVL tree, Red-Black tree.
// Storage Type: Node-based structure.
// Real-world Application: Dynamic sets, associative arrays.
// Time Complexity: O(log n) for insert, delete, search.
// Space Complexity: O(n).



// 9. AVL Tree
// Implementation: A self-balancing binary search tree.
// Storage Type: Dynamic.
// Real-World Use: Efficient searching, maintaining sorted data.
// Time Complexity:
// Insert/Search/Delete: O(log n)
// Space Complexity: O(n) for n nodes.
// Data Types: Generic (can hold any data type).



// 10. Red-Black Tree
// Implementation: A balanced binary search tree with color properties.
// Storage Type: Dynamic.
// Real-World Use: Maintaining sorted data, associative arrays.
// Time Complexity:
// Insert/Search/Delete: O(log n)
// Space Complexity: O(n) for n nodes.
// Data Types: Generic (can hold any data type).




// 11. Complete Binary Tree
// Implementation: A binary tree where all levels are fully filled except possibly the last level.
// Storage Type: Dynamic.
// Real-World Use: Heap implementations.
// Time Complexity:
// Access/Search: O(n)
// Space Complexity: O(n) for n nodes.
// Data Types: Generic (can hold any data type).




// 12. Map
// Implementation: Implemented as a balanced binary search tree, typically a Red-Black Tree.
// Storage Type: Dynamic.
// Real-World Use: Key-value storage (e.g., dictionaries).
// Time Complexity:
// Insert/Search/Delete: O(log n)
// Space Complexity: O(n) for n elements.
// Data Types: Key and value can be of different types.



// 13. Unordered Map
// Implementation: Usually implemented as a hash table.
// Storage Type: Dynamic.
// Real-World Use: Fast key-value storage without ordering.
// Time Complexity:
// Insert/Search/Delete: O(1) average.
// Space Complexity: O(n) for n elements.
// Data Types: Key and value can be of different types.



// 15. Set
// Implementation: Typically implemented as a balanced binary search tree (e.g., Red-Black Tree)..
// Storage Type: Dynamic.
// Real-World Use: Storing unique elements (e.g., to avoid duplicates).
// Time Complexity:
// Insert/Search/Delete: O(log n) for tree set.
// Space Complexity: O(n) for n elements.
// Data Types: Generic (can hold any data type).



// 16. Unordered Set
// Implementation: Usually implemented as a hash table.
// Storage Type: Dynamic.
// Real-World Use: Fast storage of unique elements without ordering.
// Time Complexity:
// Insert/Search/Delete: O(1) average.
// Space Complexity: O(n) for n elements.
// Data Types: Generic (can hold any data type).
