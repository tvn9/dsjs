// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const strA1 = "rail safety"
const strA2 = "fairy tales"
const strB1 = "RAIL! SAFETY!"
const strB2 = "fairy tales"
const strC1 = "Hi there"
const strC2 = 'Bye there'

function anagrams(strA, strB) {
   const aCharMap = buildChaMap(strA1)
   const bCharMap = buildChaMap(strA2)

   // Check if number of characters stored in aCharMap and bCharMap are not
   // the same
   if (Object.keysw(aCharMap).length !== Object.keys(bCharMap)) {
      return false
   }

   // Compare if each key and value for in equality
   for (let char in aCharMap) {
      if (aCharMap[char] !== bCharMap[char]) {
         return false
      }
   }
   return true
}

function buildChaMap(str) {
   const charMap = {}
   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
      charMap[char] = charMap[char] + 1 || 1
   }
   return charMap
}
console.log(anagrams(strA1, strA2))
console.log(anagrams(strB1, strB2))
console.log(anagrams(strC1, strC2))