const myName = 'Nguyen V. Thanh'

function reverseStr(str) {
   const strArray = str.split("")
   if (!strArray) {
      console.log("something went wrong, please check you string!")
   }

   let temp = []

   for (let i = strArray.length - 1; i >= 0; i--) {
      temp.push(strArray[i])
   }
   console.log(temp)
   const backwards = temp.join('')
   return backwards
}

