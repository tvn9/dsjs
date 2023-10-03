const basicArray = ['a', 'b', 'c', 'd']

// push adds a new item to the end of the array
basicArray.push('e') // O(1)
basicArray.push('f') // O(1)
console.log(basicArray)

// pop removes the last item in the array
basicArray.pop() // O(1)

console.log(basicArray)

// unshift adds a new item to the begining of the array
basicArray.unshift('Q')
console.log(basicArray)