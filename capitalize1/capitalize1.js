// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const str1 = "the unIted states of america."
const str2 = "how to write golang code?"

function capitalized(str) {
   // Capitalized the first leter of the string
   let firstLetter = str[0].toUpperCase();

   // Start interating from the send index of the string
   for (let i = 1; i < str.length; i++) {
      if (str[i - 1] === " ") {
         // if there is a space in front of the letter
         // capitalized the letter after space and add to 
         // result string
         firstLetter += str[i].toUpperCase();
      } else {
         // if there is no space keep add the letters to 
         // the result string
         firstLetter += str[i].toLowerCase();
      }
   }

   const finalString = []
   let temp = capString.split(" ").toLowerCase()
   for (let word of temp) {
      if (word.length <= 2) {
         finalString.push(word)
      } else {
         finalString.push(word)
      }
   }

   return finalString.join(" ");
}

console.log(capitalized(str1))
console.log(capitalized(str2))