/*Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order.
If there is no answer, return the empty string.
*/

//FOR LOOP
let words = ["long string", "longer string", "longest string"];

function longestString(arr) {
  let lg = 0;
  let longest;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > lg) {
      lg = arr[i].length;
      longest = arr[i];
    }
  }
  return longest;
}

console.log(longestString(words));

//USE SORT METHOD

let myArr = ["Apple", "kiwi", "mango", "passionfruit"];

function findLongest(arr) {
  let longestWord = arr.sort((a, b) => b.length - a.length);
  return longestWord[0];
}

console.log(findLongest(myArr));

//#########################################

//If just a string not an array of strings
let palabras = "Cows moo over the pasture";

function findLongestPalabra(str) {
  let strSplit = str.split(" ");
  let lengthiest = strSplit.sort((a, b) => b.length - a.length);
  return lengthiest[0];
}

console.log(findLongestPalabra(palabras));
