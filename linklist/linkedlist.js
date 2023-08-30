// Linked List 

// Node
class Node {
   constructor(value) {
      this.value = value
      this.next = null
   }
}

// LinkedList
class LinkedList {
   constructor(value) {
      const newNode = new Node(value)
      this.head = newNode
      this.tail = this.head
      this.length = 1
   }

   // push
   push(value) { }

   // unshift
   unshift(value) { }

   // insert 
   insert(index, value) { }
}

let myLinkedList = new LinkedList(1)