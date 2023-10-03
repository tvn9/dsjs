const basicArray = ['a', 'b', 'c', 'd']

// push adds a new item to the end of the array
basicArray.push('e') // O(1)
basicArray.push('f') // O(1)
console.log(basicArray)

// pop removes the last item in the array
basicArray.pop() // O(1)
console.log(basicArray)

// unshift adds a new item to the begining of the array
basicArray.unshift('Q') // O(n)
basicArray.unshift('X') // O(n)
console.log(basicArray)

// access to array data
console.log(basicArray[1]) // O(1)

// splice 
basicArray.splice(3, 0, 'splice') // O(n)
console.log(basicArray)
basicArray.splice(3, 2, 'remove two items after index 3', 'A', 'B', 'C') // O(n)
console.log(basicArray)