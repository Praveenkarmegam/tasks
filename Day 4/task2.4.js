// Return all palindromes in an array:

let getPalindromes = (arr) => arr.filter(word => word === word.split('').reverse().join(''));

// Example usage:
let words = ['level', 'hello', 'radar', 'world', 'madam'];
let palindromes = getPalindromes(words);
console.log(palindromes);
