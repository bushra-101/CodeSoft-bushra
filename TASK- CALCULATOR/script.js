// script.js
const inputDisplay = document.getElementById('input');
const outputDisplay = document.getElementById('output');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let equation = '';

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
      equation = '';
      inputDisplay.textContent = '0';
      outputDisplay.textContent = '0';
    } else if (value === '=') {
      try {
        const result = eval(equation);
        outputDisplay.textContent = result;
        equation = result.toString(); // Allow further calculations
        currentInput = '';
      } catch {
        outputDisplay.textContent = 'Error';
      }
    } else {
      if (['+', '-', '*', '/'].includes(value) && equation === '') return;

      if (['+', '-', '*', '/'].includes(value)) {
        equation += ` ${value} `;
      } else {
        equation += value;
      }

      inputDisplay.textContent = equation;
    }
  });
});
