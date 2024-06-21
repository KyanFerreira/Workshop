// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  // TODO
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  // TODO
  let sumNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumNumber += numbers[i];
  }
  return sumNumber;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  // TODO
  let sumValue = getSum(numbers); //I am just calling the already existing getSum function
  let meanValue = sumValue / numbers.length;
  return meanValue;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  // TODO
  let minValue;
  for (let i = 0; i < numbers.length; i++) {
    if (minValue == null) {
      minValue = numbers[i];
    } else {
      if (numbers[i] < minValue) {
        minValue = numbers[i];
      }
    }
  }
  return minValue;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  // TODO
  let maxValue;
  for (let i = 0; i < numbers.length; i++) {
    if (maxValue == null) {
      maxValue = numbers[i];
    } else {
      if (numbers[i] > maxValue) {
        maxValue = numbers[i];
      }
    }
  }
  return maxValue;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  // TODO
  let maxValue = getMax(numbers); // I am using the already existing MaxFunction
  let minValue = getMin(numbers); // I am using the already existing MinFunction
  
  return maxValue - minValue;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  // TODO
  let evenNumberList = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      evenNumberList.push(numbers[i]);
    }
  }
  return evenNumberList;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  // TODO
  let oddNumberList = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!(numbers[i] % 2 == 0)) {/*I used the is not to say if it is not even it is odd */
      oddNumberList.push(numbers[i]);
    }
  }
  return oddNumberList;
}
