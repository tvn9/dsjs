// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const arr1 = [1, 2, 3, 4]

const arrEmpty = []

function chunk1(arr, size) {
   const chkArr = []
   let i = 0
   for (i = 0; i < arr.length;) {
      chkArr.push(arr.slice(i, i + size))
      i += size
   }
   return chkArr
}

function chunk2(arr, size) {
   let chkArr = []
   while (arr.length != 0) {
      chkArr.push(arr.splice(0, size))
   }
   return chkArr
}

function chunk3(arr, size) {
   if (!arr || size < 2) {
      console.log("Something went wrong, check the array length or chunk size")
      return
   }
   const chkArr = []
   for (let val of arr) {
      let temp = chkArr[arr.length - 1]
      if (!temp || temp.length === size) {
         chkArr.push([val])
      } else {
         temp.push(val)
      }
   }
   return chkArr
}

const result = chunk1(arr1, 2)
console.log(result)

const result1 = chunk2(arr1, 2)
console.log(result1)

const result2 = chunk3(arr1, 2)
console.log(result2)
