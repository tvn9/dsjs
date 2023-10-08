// Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// Example
// reverseInt(15) === 51
// reverseInt(500) === 5
// reverseInt(981) === 189
// reverseInt(-15) === -51
// reverseInt(-90) === -9

function reverseInt(n) {
   const strNumber = n.toString().split('').reverse().join('')
   return parseInt(strNumber) * Math.sign(n)
}

console.log(reverseInt(15))
console.log(reverseInt(5))
console.log(reverseInt(189))
console.log(reverseInt(-51))
console.log(reverseInt(-9))