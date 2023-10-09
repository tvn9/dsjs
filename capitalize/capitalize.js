// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const str1 = "the united states of america."
const str2 = "how to write goland code?"

function capitalized(str) {
   const capString = []
   const words = str.toLowerCase().split(" ")

   for (let w of words) {
      let newWord = []
      for (let i = 0; i <= w.length - 1; i++) {
         if (i === 0) {
            newWord.push(w[i].toUpperCase())
         } else {
            newWord.push(w[i])
         }
      }
      capString.push(newWord.join(""))
   }
   return capString.join(" ")
}

console.log(capitalized(str1))
console.log(capitalized(str2))