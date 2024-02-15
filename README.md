# Heap

Heap is an Abstract Data Type useful for implementing priority queues and heap sorting. It is an array that can be visualized as a **`nearly complete binary tree`**.

There are two types of heaps:

- **`min heap`**: the values of child elements are greater than the value of the parent.
- **`max heap`**: the values of child elements are smaller than the value of the parent.

Heap values are stored in arrays (size n), in which (i from 0 to n - 1):

- parent(i): floor(i + 1 / 2) - 1
- left child(i): (i \* 2) + 1
- right child(i): (i \* 2) + 2

Max heap operations:

**`build_max_heap`**: prouduces a max heap from an unordered array.
**`max_heapify`**: heapifies a specific tree. If there was a swap in the tree analysis, it recursively heapifies the modified subjacent tree.

- **`insertion`**: the new value is inserted at the end of the array, and the `max_heapify` is called for its parent. If there was a swap, its parent is heapified, and so on.
- **`deletion`**: the root is removed and replaced by the last value (leaf). The tree is heapified recursively by the `max_heapify` from top to bottom.
- **`get max value`**: takes the maximum value of the max heap, which is the one at index 0.
