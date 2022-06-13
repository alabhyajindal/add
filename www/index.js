import * as wasm from 'wasm';

// Selecting DOM Elements
const btn = document.querySelector('button');
const inputA = document.querySelector('#a');
const inputB = document.querySelector('#b');
const result = document.querySelector('p');

function sendToRust() {
  const valueA = Number(inputA.value);
  const valueB = Number(inputB.value);

  // Error handling in case the input fields are empty
  if (valueA != '' && valueB != '') {
    const addedValues = wasm.add(valueA, valueB);
    result.textContent = addedValues;
  } else {
    result.textContent = 'Please enter the values you want to add';
  }
}

btn.addEventListener('click', () => {
  sendToRust();
});
