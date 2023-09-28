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

   // push (O1)
   push(value) {
      const newNode = new Node(value)
      newNode.value = value
      if (!this.head) {
         this.head = newNode
         this.tail = newNode
      } else {
         this.tail.next = newNode
         this.tail = newNode
      }
      this.length++
      return this
   }

   // Pop (On)
   pop() {
      if (!this.head) return undefined

      let temp = this.head
      let pre = this.head

      /* for loop example
      for (let i = 0; i < this.length; i++) {
         if (temp.next) {
            pre = temp
            temp = temp.next
         } else {
            this.tail = pre
            this.tail.next = null
            this.length--
         }

         if (this.length === 0) {
            this.head = null
            this.tail = null
         }
      }
      */

      // while loop example
      while (temp.next) {
         pre = temp
         temp = temp.next
      }
      this.tail = pre
      this.tail.next = null
      this.length--

      if (this.length === 0) {
         this.head = null
         this.tail = null
      }
      return temp
   }

   // unshift
   unshift(value) {
      // Create a new node
      const newNode = new Node(value)
      // newNode.value = value

      // check for any existing node in linkedlist
      // if head is not exist (is null) point head and tail to newNode
      if (!this.head) {
         this.head = newNode
         this.tail = newNode
      } else {
         newNode.next = this.head
         this.head = newNode
      }
      this.length++
      return this
   }

   // shift
   shift() {
      if (!this.head) return undefined
      let temp = this.head
      this.head = this.head.next
      temp.next = null
      this.length--
      if (this.length === 0) {
         this.tail = null
      }
      return temp
   }

   // get
   get(index) {
      if (index < 0 || index >= this.length) return undefined
      let temp = this.head
      for (let i = 0; i < index; i++) {
         temp = temp.next
      }
      return temp
   }

   // set
   set(index, value) {
      let temp = this.get(index)
      if (temp) {
         temp.value = value
         return true
      }
      return false
   }

   // insert 
   insert(index, value) { }
}

let myLinkedList = new LinkedList(5)
myLinkedList.push(6)
myLinkedList.push(7)
myLinkedList.push(8)
// myLinkedList.push(5)

// myLinkedList.pop()
// myLinkedList.pop()
// myLinkedList.pop()
// myLinkedList.pop()
// myLinkedList.pop()
// myLinkedList.pop()

// myLinkedList.push(1)