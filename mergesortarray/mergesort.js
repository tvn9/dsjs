// Merge Sort Arrays

const array1 = [0, 3, 2, 31, 7]
const array2 = [4, 1, 6, 30, 5]
const array3 = []
console.log(array1)
console.log(array2)

let mergeArray = [...array1, ...array2]
console.log(mergeArray)

// basic buble sort
function bubleSort(arr) {
   if (!arr.length) {
      console.log('Something went wrong')
   }

   for (let i = arr.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
         if (arr[j] > arr[j + 1]) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
         }
      }
   }
   return arr
}

sortedArray = bubleSort(array1)
console.log('array 1', sortedArray)
sortedArray = bubleSort(array2)
console.log('array 2', sortedArray)

mergeArr = bubleSort(mergeArray)
console.log('array1 + array2', mergeArr)
console.log(bubleSort(array3))