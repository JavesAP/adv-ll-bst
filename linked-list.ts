// Linked List Implementation
export class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  // EASY: Append a value to the end of the list
  append(value: number, listNode: ListNode | null = null): void {
    // TODO: Implement append method
    if (!this.head) {
      this.head = new ListNode(value)
    } else {
      if (!listNode) listNode = this.head
      if (!listNode) return 
    
      listNode.next ? this.append(value, listNode.next) : listNode.next = new ListNode(value)
    }
  }

  // EASY: Find a value in the list
  find(value: number, ln: ListNode | null = null): boolean {
    // TODO: Implement find method
    if (!ln) ln = this.head
    
    if (ln) {
      if (ln.value === value) {
        return true
      } else if (ln.next) {
        return this.find(value, ln.next)
      } 
    }
    return false
  }

  // MEDIUM: Reverse the linked list
  reverse(currentNode: ListNode | null = null, previousNode: ListNode | null = null, newList = new LinkedList()): void {
    // TODO: Implement reverse method
    if (currentNode && previousNode) {
      if (currentNode.next) this.reverse(currentNode.next, currentNode, newList)
      // new list created while function starts closing
      if (!newList.head) newList.head = currentNode
      if (previousNode)
        newList.append(previousNode.value)
    } else if (!currentNode && !previousNode) {
      currentNode = this.head
      if (currentNode?.next) this.reverse(currentNode.next, currentNode, newList)
      if (currentNode) newList.append(currentNode.value)
    }
    
    if (currentNode && !previousNode) this.head = newList.head
    return
  }

  // MEDIUM: Remove a node by value
  remove(value: number): void {
    // TODO: Implement remove method
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

console.log("Linked List Find 3:", linkedList.find(3)); // Expected: true
linkedList.reverse();
console.log("Linked List Reversed Find 3:", linkedList.find(3)); // Expected: true
linkedList.remove(3);
console.log("Linked List Find 3 After Removal:", linkedList.find(3)); // Expected: false
