// Given a string, return true if the string is a parlindrome
// or false if it is not. Palindromes are strings that form
// the same word if it is reversed. Do include spaces and 
// punctuation in determining if the string is a palindrome
// Examples:
// palindrome('abba')
// palindrome('abcdefg')

// Test String
const str1 = 'abba'
const str2 = 'racecar'
const str3 = 'abcdefg'
const str4 = ''

function palindrome(str) {
   let result = ''
   // check if the string is not empty
   if (str.length < 2) {
      console.log('Something went wrong!')
      result = 'false'
   }
   for (let i = 0; i <= str.length - 1; i++) {
      if (str[i] === str[str.length - 1 - i]) {
         result = 'true'
      } else {
         result = 'false'
      }
   }
   return result
}

const palindrome1 = (str) => {
   const newStr = str.split('').reverse().join('')
   return str === newStr
}

const

   console.log('str1,', palindrome(str1))
console.log('str2,', palindrome(str2))
console.log('str3,', palindrome(str3))
console.log('str4,', palindrome(str4))

console.log('str1,', palindrome1(str1))
console.log('str2,', palindrome1(str2))
console.log('str3,', palindrome1(str3))
console.log('str4,', palindrome1(str4))
