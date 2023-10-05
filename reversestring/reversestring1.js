// Problem
// Given a string, return a new string with the reverse order of characters
// Example:
// reverse('apple') => 'leppa'
// reverse('hello') => 'olleh'
// reverse('Greetings!')

const str1 = 'apple'
const str2 = 'hello'
const str3 = 'Greeting!'
const str4 = []

function reverse3(str) {
   let reversed = ''

   for (let character of str) {
      reversed = character + reversed
   }
   return reversed
}

function reverse2(str) {
   return str.split('').reverse().join('')
}

function reverse1(str) {
   if (!str.length) {
      console.log('Something wrong with the string!')
   }

   const strArr = str.split('')
   const newStr = []
   for (let i = str.length - 1; i >= 0; i--) {
      newStr.push(strArr[i])
   }
   return newStr.join('')
}

function reverse(str) {
   if (!str.length) {
      console.log('Something wrong with the string!')
   }

   let newStr = ''

   for (let i = str.length - 1; i >= 0; i--) {
      newStr += (str[i])
   }
   return newStr
}

console.log(reverse1(str1))
console.log(reverse2(str2))
console.log(reverse3(str3))
console.log(reverse(str4))
