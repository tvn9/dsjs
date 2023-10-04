const myName = 'Nguyen V. Thanh'

function reverseStr(str) {
   const strArray = str.split("")
   if (!strArray) {
      console.log("something went wrong, please check you string!")
   }

   const temp = []

   for (let i = strArray.length - 1; i >= 0; i--) {
      temp.push(strArray[i])
   }
   console.log(temp)
   const backwards = temp.join('')
   return backwards
}

function strReverse(str) {
   if (!str.length || str.length < 2 || typeof str != 'string') {
      console.log("Something went wrong, please check the string!")
   }

   const temp = []

   for (let i = str.length - 1; i >= 0; i--) {
      temp.push(str[i])
   }
   console.log(temp)
   const backwards = temp.join('')
   return backwards
}

function reverse(str) {
   if (!str.length || str.length < 2 || typeof str != 'string') {
      console.log('Something wrent wrong, please check the string!')
   }

   return str.split('').reverse().join('')
}

const reverse2 = str => str.split('').reverse().join('')

const reverse3 = str => [...str].reverse().join('')