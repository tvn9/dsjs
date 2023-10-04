class MyArray {
   constructor() {
      this.length = 0
      this.data = {}
   }

   // get 
   get(index) {
      return this.data[index]
   }

   // push O(1)
   push(value) {
      this.data[this.length] = value
      this.length++
      return this.length
   }

   // pop O(1)
   pop() {
      const lastIndex = this.data[this.length - 1]
      delete this.data[this.length - 1]
      this.length--
      return lastIndex
   }

   // delete O(1)
   delete(index) {
      const item = this.data[index]
      this.shiftItems(index)
   }

   // shiftItems
   shiftItems(index) {
      for (let i = index; i < this.length - 1; i++) {
         this.data[i] = this.data[i + 1]
      }
      delete this.data[this.length - 1]
      this.length--
   }
}

const newArray = new MyArray()
console.log("get info from newArray", newArray.get(0))
newArray.push(10)
newArray.push(20)
newArray.push(30)