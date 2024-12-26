const add = (numOne, numTwo) => numOne + numTwo;
const sub = (numOne, numTwo) => numOne - numTwo;
const mul = (numOne, numTwo) => numOne * numTwo;
const div = (numOne, numTwo) => numOne / numTwo;

const updateTable = (table, data) => {
  table.push(data);
  return table;
};

const logHistory = (table, numOne, numTwo, operation, result) => {
  const data = [numOne, numTwo, operation || "N/A", result];
  return updateTable(table, data);
};

const display = (message) => {
  console.log(message);
};

const errorMessage = (errorType) => {
  const errors = {
    invalidOperation: "Enter a valid Operation!",
    invalidInputs: "Enter valid inputs!",
    divideByZero: "Cannot divide a number by zero",
  };

  return errors[errorType] || "unknown error occured";
};

const isInvalid = (input) => {
  return isNaN(input);
};

const getInput = (message) => {
  //keeping the user interaction seperate from core logic
  const input = prompt(message);
  return +input;
};

const calculate = (numOne, numTwo, operations, history) => {
  const operation = prompt("Enter the operation: ");

  if (!(operation in operations)) {
    const error = errorMessage("invalidOperation");
    logHistory(history, numOne, numTwo, operation, error);
    return error;
  }

  if (operation === "/" && numTwo === 0) {
    const error = errorMessage("divideByZero");
    logHistory(history, numOne, numTwo, operation, error);
    return error;
  }

  const output = operations[operation](numOne, numTwo);
  logHistory(history, numOne, numTwo, operation, output);
  return output;
};

const user = (history) => {
  const operations = { "+": add, "-": sub, "*": mul, "/": div };
  const numOne = getInput("Enter the first number: ");
  const numTwo = getInput("Enter the second number: ");

  if (isInvalid(numOne) || isInvalid(numTwo)) {
    const error = errorMessage("invalidInputs");
    logHistory(history, numOne, numTwo, null, error);
    return error;
  }

  return calculate(numOne, numTwo, operations, history);
};

const main = () => {
  let continueToCalculate = true;
  const history = [];

  while (continueToCalculate) {
    display("-".repeat(60));
    const result = user(history);
    display(result);
    continueToCalculate = confirm("Do you want to calculate again?");
  }

  console.table(history);
};

main();
