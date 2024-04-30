const myObject = {
    "name": "John",
    "age": 30,
    "city": "New York"
  };
  
  // for...in loop
  console.log("Using for...in loop:");
  for (let key in myObject) {
    if (myObject.hasOwnProperty(key)) {
      console.log(key + ": " + myObject[key]);
    }
  }
  
  // for...of loop (Using Object.entries())
  console.log("\nUsing for...of loop:");
  const entries = Object.entries(myObject);
  for (const [key, value] of entries) {
    console.log(key + ": " + value);
  }
  
  // forEach loop (Using Object.entries())
  console.log("\nUsing forEach loop with Object.entries():");
  Object.entries(myObject).forEach(([key, value]) => {
    console.log(key + ": " + value);
  });
  
  
  console.log("Using for loop:");
  for (let key in myObject) {
    if (myObject.hasOwnProperty(key)) {
      console.log(key + ": " + myObject[key]);
    }
  }
  