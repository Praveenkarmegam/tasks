// a. Print odd numbers in an array
let printOddNumbers = (arr) => {
    arr.forEach(num => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  // IIFE for printing odd numbers
  (function() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    printOddNumbers(numbers);
  })();
  
  // b. Convert all the strings to title caps in a string array
  let convertToTitleCaps = (arr) => {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  };
  // IIFE for title caps conversion
  (function() {
    let strings = ['hello', 'world', 'javascript'];
    console.log(convertToTitleCaps(strings));
  })();
  
  // c. Sum of all numbers in an array
  let sumArray = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
  };
  // IIFE for summing numbers in an array
  (function() {
    let numbers = [1, 2, 3, 4, 5];
    console.log(sumArray(numbers));
  })();
  
  // d. Return all the prime numbers in an array
  let getPrimes = (arr) => {
    return arr.filter(num => {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    });
  };
  // IIFE for getting prime numbers
  (function() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(getPrimes(numbers));
  })();
  
 // e. Return all the palindromes in an array
let getPalindromes = (arr) => {
    return arr.filter(word => {
      let lowercaseWord = word.toLowerCase();
      return lowercaseWord === lowercaseWord.split('').reverse().join('');
    });
  };
  // IIFE for getting palindromes
  (function() {
    let words = ['Level', 'hello', 'noon', 'world'];
    console.log(getPalindromes(words));
  })();
  
  
  // f. Return median of two sorted arrays of the same size
  let medianOfArrays = (arr1, arr2) => {
    let mergedArr = [...arr1, ...arr2].sort((a, b) => a - b);
    let len = mergedArr.length;
    return len % 2 !== 0 ? mergedArr[Math.floor(len / 2)] : (mergedArr[len / 2 - 1] + mergedArr[len / 2]) / 2;
  };
  // IIFE for median of arrays
  (function() {
    let arr1 = [1, 3, 5];
    let arr2 = [2, 4, 6];
    console.log(medianOfArrays(arr1, arr2));
  })();
  
  // g. Remove duplicates from an array
  let removeDuplicates = (arr) => {
    return [...new Set(arr)];
  };
  // IIFE for removing duplicates
  (function() {
    let numbers = [1, 2, 2, 3, 4, 4, 5];
    console.log(removeDuplicates(numbers));
  })();
  
  // h. Rotate an array by k times
  let rotateArray = (arr, k) => {
    k = k % arr.length;
    return arr.slice(k).concat(arr.slice(0, k));
  };
  // IIFE for rotating array
  (function() {
    let numbers = [1, 2, 3, 4, 5];
    let k = 2;
    console.log(rotateArray(numbers, k));
  })();
  