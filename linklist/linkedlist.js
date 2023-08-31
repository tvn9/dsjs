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
      newNode.next = null
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
      return temp
   }

   // unshift
   unshift(value) { }

   // insert 
   insert(index, value) { }
}

let myLinkedList = new LinkedList(1)
myLinkedList.push(2)
myLinkedList.push(3)
myLinkedList.pop()
myLinkedList.pop()
// myLinkedList.pop()