// Write a program that console logs the number 1-n. But for
// Multiples of three print 'Fizz', and when the mulitiples 
// is five print 'Buzz'. for number that are the multiples of
// both three and five print 'FizzBuss'.
// Example
// fizzBuzz(5)
// 1
// 2
// Fizz
// 4
// Buzz

function fizzBuzz(n) {
   if (typeof n != "number") {
      console.log("Not a number")
      return
   }

   for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
         console.log("FizzBuzz")
      } else if (i % 3 === 0) {
         console.log("Fizz")
      } else if (i % 5 === 0) {
         console.log("Buzz")
      } else {
         console.log(i)
      }
   }
}

fizzBuzz(100)