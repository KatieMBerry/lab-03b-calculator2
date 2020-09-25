//Defines what happens on click by importing functions (mathUtils), grabbing DOM elements & exporting the 
//clickHandler function:

import { addTwoNums, subtractTwoNums, multiplyTwoNums, divideTwoNums } from './mathUtils.js';

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addResults = document.getElementById('add-results');
const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subResults = document.getElementById('sub-results');
const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyResults = document.getElementById('multiply-results');
const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideResults = document.getElementById('divide-results');

//ClickHandler functions declared & exported. No output, but displays the changes to the DOM:
export function handlesSumClick() {

    const val1 = addInput1.valueAsNumber;
    const val2 = addInput2.valueAsNumber;

    const sum = addTwoNums(val1, val2);

    addResults.textContent = sum;
    addInput1.value = '';
    addInput2.value = '';
}

export function handlesSubtractClick() {

    const val1 = subInput1.valueAsNumber;
    const val2 = subInput2.valueAsNumber;

    const difference = subtractTwoNums(val1, val2);

    subResults.textContent = difference;
    subInput1.value = '';
    subInput2.value = '';
}

export function handlesMultiplyClick() {

    const val1 = multiplyInput1.valueAsNumber;
    const val2 = multiplyInput2.valueAsNumber;

    const product = multiplyTwoNums(val1, val2);

    multiplyResults.textContent = product;
    multiplyInput1.value = '';
    multiplyInput2.value = '';
}

export function handlesDivideClick() {

    const val1 = divideInput1.valueAsNumber;
    const val2 = divideInput2.valueAsNumber;

    const quotient = divideTwoNums(val1, val2);

    divideResults.textContent = quotient;
    divideInput1.value = '';
    divideInput2.value = '';
}
