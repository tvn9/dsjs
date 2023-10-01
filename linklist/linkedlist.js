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
   insert(index, value) {
      if (index === 0) return this.unshift(value)
      if (index === this.length) return this.push(value)
      if (index < 0 || index > this.length) return false

      const newNode = new Node(value)
      const temp = this.get(index - 1)

      newNode.next = temp.next
      temp.next = newNode
      this.length++
      return true
   }

   // remove
   remove(index) {
      if (index === 0) return this.shift()
      if (index === this.length - 1) return this.pop()
      if (index < 0 || index >= this.length) return undefined

      const before = this.get(index - 1)
      const temp = before.next

      before.next = temp.next
      temp.next = null
      this.length--
      return temp
   }
}

let myLinkedList = new LinkedList(10)
myLinkedList.push(11)
myLinkedList.push(12)
myLinkedList.push(13)

// insert
myLinkedList.insert(4, 14)

// myLinkedList.pop()
// myLinkedList.pop()
// myLinkedList.pop()
// myLinkedList.pop()
// myLinkedList.pop()
// myLinkedList.pop()

// myLinkedList.push(1)