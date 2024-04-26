let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" };

// Convert JSON objects to strings and sort the properties
let sortedObj1 = JSON.stringify(obj1, Object.keys(obj1).sort());
let sortedObj2 = JSON.stringify(obj2, Object.keys(obj2).sort());

// Compare the sorted strings
if (sortedObj1 === sortedObj2) {
  console.log("The objects have the same properties.");
} else {
  console.log("The objects have different properties.");
}
