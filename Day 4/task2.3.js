//Sum of all numbers in an array:
let sumArray = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
  };
  
  // Example usage:
  let numbers = [1, 2, 3, 4, 5];
  let sum = sumArray(numbers);
  console.log(sum);
  
  