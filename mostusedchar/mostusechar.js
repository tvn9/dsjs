// Direction
// Given a string, return the character that is most commonly used
// in the string.
// Example:
// mostUseChar('abcccccccccd') => 'c'
// mostUseChar('apple 12311111') => '1'

const str1 = 'abcccccccccd'
const str2 = 'apple 12311111'

function mostUsedChar(str) {
   const charMap = {}
   let mostUsed = 0
   let mostChar = ''

   // Build the charMap
   for (let char of str) {
      if (!charMap[char]) {
         charMap[char] = 1
      } else {
         charMap[char] += 1
      }
   }

   // Using charMap to search and count mostUsed character
   for (let char in charMap) {
      if (mostUsed < charMap[char]) {
         mostUsed = charMap[char]
         mostChar = char
      }
   }

   console.log(charMap)
   return mostUsed + " " + mostChar
}

console.log(mostUsedChar(str1))
console.log(mostUsedChar(str2)) 