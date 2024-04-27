//Return all the prime numbers in an array:

let getPrimeNumbers = (arr) => arr.filter(num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
  
  // Example usage:
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let primeNumbers = getPrimeNumbers(numbers);
  console.log(primeNumbers);
  