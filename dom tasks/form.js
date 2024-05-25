// JavaScript code to handle form submission and table update
const form = document.getElementById('form');
const tableBody = document.getElementById('tableBody');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const address = document.getElementById('address').value;
  const pincode = document.getElementById('pincode').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const foods = document.querySelectorAll('input[name="food"]:checked');
  const selectedFoods = Array.from(foods).map(food => food.value);
  const state = document.getElementById('state').value;
  const country = document.getElementById('country').value;

  // Create new table row
  const newRow = tableBody.insertRow();
  const cells = [
    newRow.insertCell(),
    newRow.insertCell(),
    newRow.insertCell(),
    newRow.insertCell(),
    newRow.insertCell(),
    newRow.insertCell(),
    newRow.insertCell(),
    newRow.insertCell()
  ];

  // Add form values to the new row
  cells[0].textContent = firstName;
  cells[1].textContent = lastName;
  cells[2].textContent = address;
  cells[3].textContent = pincode;
  cells[4].textContent = gender;
  cells[5].textContent = selectedFoods.join(', '); // Join selected foods as a string
  cells[6].textContent = state;
  cells[7].textContent = country;

  // Clear form fields
  form.reset();
});
