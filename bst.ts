// Binary Search Tree Implementation
export class BSTNode {
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BST {
  root: BSTNode | null;

  constructor() {
    this.root = null;
  }

  // EASY: Insert a value into the BST
  insert(value: number, current: BSTNode | null = null): void {
    // TODO: Implement insert method
    const node = new BSTNode(value)
    if (!current) {
      if (this.root === null) {
        this.root = node
      } else {
        if (node.value < this.root.value) {
          this.root.left ? this.insert(value, this.root.left) : this.root.left = node
        } 
        if (node.value > this.root.value) {
          this.root.right ? this.insert(value, this.root.right) : this.root.right = node
        }
      }
    } else {
      if (node.value < current.value) {
        current.left ? this.insert(value, current.left) : current.left = node
      }
      if (node.value > current.value) {
        current.right ? this.insert(value, current.right) : current.right = node
      }
    }
  }

  // EASY: Check if a value exists in the BST
  contains(value: number, current: BSTNode | null = null): boolean {
    // TODO: Implement contains method
    if (!current) {
      current = this.root
    } 
    
    if (!current) return false
     
    if (value === current.value) {
      return true
    } else if (value < current.value && current.left !== null) {
      return this.contains(value, current.left)
    } else if (value > current.value && current.right !== null) {
      return this.contains(value, current.right)
    }
    
    return false;
  }

  // MEDIUM: Find the minimum value in the BST
  findMin(current: BSTNode | null = null): number | undefined {
    // TODO: Implement findMin method
    if (!current) current = this.root
    
    if (current?.left) {
      return this.findMin(current.left)
    } else if (!current?.left) {
      return current?.value
    }
  }

  // MEDIUM: Find the maximum depth of the BST
  maxDepth(): number {
    // TODO: Implement maxDepth method
    return 0;
  }

  // MEDIUM: Depth-First Search (DFS) Traversal
  dfs(): number[] {
    // TODO: Implement DFS traversal
    /* if (!nodeSet && !node) {
      nodeSet = new Set([this.root.value])
      node = this.root
    }
    if (nodeSet.size <= 0) return nodeSet
    
    const leftBranch = dfs(nodeSet, node.left)
    const rightBranch = dfs(nodeSet, node.right)
    
    return nodeSet */
    return [];
  }

  // MEDIUM: Breadth-First Search (BFS) Traversal
  bfs(): number[] {
    // TODO: Implement BFS traversal
    return [];
  }
}

// Test Cases
const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(17);

console.log("BST Contains 7:", bst.contains(7)); // Expected: true
console.log("BST Min Value:", bst.findMin()); // Expected: 3
console.log("BST Max Depth:", bst.maxDepth()); // Expected: 3
console.log("BST DFS Traversal:", bst.dfs()); // Expected: [10, 5, 3, 7, 15, 13, 17] (or similar)
console.log("BST BFS Traversal:", bst.bfs()); // Expected: [10, 5, 15, 3, 7, 13, 17] (or similar)
