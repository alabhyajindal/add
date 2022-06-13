import * as wasm from './wasm_bg.wasm';

const btn = document.querySelector('button');
const inputA = document.querySelector('#a');
const inputB = document.querySelector('#b');
const result = document.querySelector('p');
const form = document.querySelector('form');
let operation = 'multiply';

function performOperation() {
  let valueA = Number(inputA.value);
  let valueB = Number(inputB.value);

  if (valueA != '' && valueB != '') {
    const caluculatedResult = operate(valueA, valueB);
    result.textContent = caluculatedResult;
  } else {
    result.textContent = 'Please enter the values you want to add';
  }
}

btn.addEventListener('click', () => {
  performOperation();
});

form.addEventListener('click', (e) => {
  if (e.target.id != '') {
    operation = e.target.id;
  }
});

function operate(a, b) {
  if (operation == 'add') {
    return wasm.add(a, b);
  } else if (operation == 'subtract') {
    return wasm.subtract(a, b);
  } else if (operation == 'multiply') {
    return wasm.multiply(a, b);
  } else if (operation == 'divide') {
    return wasm.divide(a, b);
  }
}
