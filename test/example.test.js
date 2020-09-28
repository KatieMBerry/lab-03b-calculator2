// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { addTwoNums, subtractTwoNums, multiplyTwoNums, divideTwoNums } from '../mathUtils.js';

const test = QUnit.test;

// test('time to test a function', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = true;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = true;

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });

test('should return 10 if passed 3 & 7', (expect) => {
    const expected = 10;
    const firstNum = 3;
    const secondNum = 7;

    const actual = addTwoNums(firstNum, secondNum);
    expect.equal(actual, expected);
});


test('should return 20 if passed 50 & 30', (expect) => {
    const expected = 20;
    const firstNum = 50;
    const secondNum = 30;

    const actual = subtractTwoNums(firstNum, secondNum);
    expect.equal(actual, expected);
});


test('should return 15 if passed 5 & 3', (expect) => {
    const expected = 15;
    const firstNum = 5;
    const secondNum = 3;

    const actual = multiplyTwoNums(firstNum, secondNum);
    expect.equal(actual, expected);
});


test('should return 8 if passed 24 & 3', (expect) => {
    const expected = 8;
    const firstNum = 24;
    const secondNum = 3;

    const actual = divideTwoNums(firstNum, secondNum);
    expect.equal(actual, expected);
});    
