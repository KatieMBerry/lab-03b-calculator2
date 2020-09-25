// Imports clickHandlers & adds those to the eventListeners (buttons) to describe when/where Handlers are called:
//(listens for 'click'

import { handlesSumClick, handlesSubtractClick, handlesMultiplyClick, handlesDivideClick } from './handlers.js';

const addButton = document.getElementById('add-button');
const subButton = document.getElementById('sub-button');
const multiplyButton = document.getElementById('multiply-button');
const divideButton = document.getElementById('divide-button');

addButton.addEventListener('click', handlesSumClick);
subButton.addEventListener('click', handlesSubtractClick);
multiplyButton.addEventListener('click', handlesMultiplyClick);
divideButton.addEventListener('click', handlesDivideClick);