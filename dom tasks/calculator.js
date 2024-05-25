let display = document.getElementById('display');
let expression = '';

function handleNumber(num) {
  expression += num;
  display.value = expression;
}

function handleOperation(operator) {
  if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
    expression += ` ${operator} `;
    display.value = expression;
  } else {
    alert('Only numbers are allowed');
  }
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function calculateResult() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = result.toString();
  } catch (error) {
    alert('Invalid expression');
  }
}
