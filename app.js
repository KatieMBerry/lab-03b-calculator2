
// import functions and grab DOM elements to add://///////////////////////////////////
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResults = document.getElementById('add-results');
// console.log(addInput1);
// console.log(addInput2);
// console.log(addButton);
// console.log(addResults);

// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    // console.log(Date());

    const val1 = addInput1.value;
    const val2 = addInput2.value;

    // console.log(val1, val2);

    const val1AsNum = Number(val1);
    const val2AsNum = Number(val2);
    // console.log(val1AsNum, val2AsNum);

    const sum = val1AsNum + val2AsNum;
    // console.log(sum);

    addResults.textContent = sum;
    addInput1.value = '';
    addInput2.value = '';
});

// import functions and grab DOM elements to subtract:////////////////////////////////////////////
const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subResults = document.getElementById('sub-results');
// console.log(subInput1);
// console.log(subInput2);
// console.log(subButton);
// console.log(subResults);

// set event listeners to update state and DOM
subButton.addEventListener('click', () => {
    // console.log(Date());

    const val1 = subInput1.value;
    const val2 = subInput2.value;

    // console.log(val1, val2);

    const val1AsNum = Number(val1);
    const val2AsNum = Number(val2);
    // console.log(val1AsNum, val2AsNum);

    const subtract = val1AsNum - val2AsNum;
    // // console.log(subtract);

    subResults.textContent = subtract;
    subInput1.value = '';
    subInput2.value = '';
});

// import functions and grab DOM elements to multiply:////////////////////////////////////////////
const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyResults = document.getElementById('multiply-results');
// console.log(multiplyInput1);
// console.log(multiplyInput2);
// console.log(multiplyButton);
// console.log(multiplyResults);

// set event listeners to update state and DOM
multiplyButton.addEventListener('click', () => {
    // console.log(Date());

    const val1 = multiplyInput1.value;
    const val2 = multiplyInput2.value;

    // console.log(val1, val2);

    const val1AsNum = Number(val1);
    const val2AsNum = Number(val2);
//     // console.log(val1AsNum, val2AsNum);

    const multiply = val1AsNum * val2AsNum;
//     // console.log(multiply);

    multiplyResults.textContent = multiply;
    multiplyInput1.value = '';
    multiplyInput2.value = '';
});

// import functions and grab DOM elements to divide:////////////////////////////////////////////
const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideButton = document.getElementById('divide-button');
const divideResults = document.getElementById('divide-results');
// console.log(divideInput1);
// console.log(divideInput2);
// console.log(divideButton);
// console.log(divideResults);

// set event listeners to update state and DOM
divideButton.addEventListener('click', () => {
    // console.log(Date());

    const val1 = divideInput1.value;
    const val2 = divideInput2.value;

    // console.log(val1, val2);

    const val1AsNum = Number(val1);
    const val2AsNum = Number(val2);
//     // console.log(val1AsNum, val2AsNum);

    const divide = val1AsNum / val2AsNum;
//     // console.log(divide);

    divideResults.textContent = divide;
    divideInput1.value = '';
    divideInput2.value = '';
});