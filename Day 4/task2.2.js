//Convert all the strings to title caps in a string array:
let convertToTitleCaps = (arr) => {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  };
  
  // Example usage:
  let strings = ['hello', 'world', 'javascript'];
  let titleCaps = convertToTitleCaps(strings);
  console.log(titleCaps);