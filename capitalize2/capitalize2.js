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

   for (let w of str.split(" ")) {
      if (w.length <= 2) {
         capString.push(w.toLowerCase())
      } else {
         capString.push(w[0].toUpperCase() + w.slice(1))
      }
   }
   return capString.join(" ")
}

console.log(capitalized(str1))
console.log(capitalized(str2))