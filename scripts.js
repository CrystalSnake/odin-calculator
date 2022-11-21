let firstOp;
let secondOp;
let result = 0;
let operator;

const add = function (firstOp, secondOp) {
  return firstOp + secondOp;
};

const subtract = function (firstOp, secondOp) {
  return firstOp - secondOp;
};

const multiply = function (firstOp, secondOp) {
  return firstOp * secondOp;
};

const divide = function (firstOp, secondOp) {
  return firstOp / secondOp;
};

const operate = function (firstOp, operator, secondOp) {
  switch (operator) {
    case '+':
      return add(firstOp, secondOp);
    case '-':
      return subtract(firstOp, secondOp);
    case '*':
      return multiply(firstOp, secondOp);
    case '/':
      return divide(firstOp, secondOp);
  }
};

const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const dot = document.getElementById('dot');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const timesSign = document.getElementById('times-sign');
const division = document.getElementById('division');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');

const screen = document.getElementById('print');

let displayValue = '0';
screen.textContent = displayValue;

const clearAll = function () {
  firstOp = undefined;
  secondOp = undefined;
  operator = undefined;
  result = 0;
};

const calculate = function () {
  result = +operate(firstOp, operator, secondOp).toFixed(2);
  screen.textContent = result;
  firstOp = result;
  secondOp = undefined;
};

const numberKeyHandler = function () {
  if (operator === undefined) {
    firstOp = +displayValue;
  } else {
    secondOp = +displayValue;
  }
};

const operatorKeyHandler = function (oper) {
  if (firstOp === undefined && oper === '-') {
    firstOp = '-';
    displayValue = '-';
    screen.textContent = displayValue;
  } else if (firstOp && secondOp === undefined) {
    operator = oper;
    displayValue = '';
  } else {
    if (operator === '/' && secondOp === 0) {
      screen.textContent = 'ERROR';
      clearAll();
    } else {
      calculate();
      displayValue = '';
    }
  }
};

const equalKeyHandler = function () {
  if (firstOp && secondOp && operator) {
    if (operator === '/' && secondOp === 0) {
      screen.textContent = 'ERROR';
      clearAll();
    } else {
      calculate();
      operator = undefined;
    }
  }
  displayValue = '';
};

const printKeyValue = function () {
  zero.addEventListener('click', () => {
    if (displayValue === '' || displayValue != '0') {
      displayValue += '0';
      screen.textContent = displayValue;
      numberKeyHandler();
    }
  });
  one.addEventListener('click', () => {
    displayValue += '1';
    screen.textContent = displayValue;
    numberKeyHandler();
  });
  two.addEventListener('click', () => {
    displayValue += '2';
    screen.textContent = displayValue;
    numberKeyHandler();
  });
  three.addEventListener('click', () => {
    displayValue += '3';
    screen.textContent = displayValue;
    numberKeyHandler();
  });
  four.addEventListener('click', () => {
    displayValue += '4';
    screen.textContent = displayValue;
    numberKeyHandler();
  });
  five.addEventListener('click', () => {
    displayValue += '5';
    screen.textContent = displayValue;
    numberKeyHandler();
  });
  six.addEventListener('click', () => {
    displayValue += '6';
    screen.textContent = displayValue;
    numberKeyHandler();
  });
  seven.addEventListener('click', () => {
    displayValue += '7';
    screen.textContent = displayValue;
    numberKeyHandler();
  });
  eight.addEventListener('click', () => {
    displayValue += '8';
    screen.textContent = displayValue;
    numberKeyHandler();
  });
  nine.addEventListener('click', () => {
    displayValue += '9';
    screen.textContent = displayValue;
    numberKeyHandler();
  });
  dot.addEventListener('click', () => {
    if (!displayValue.includes('.')) {
      displayValue += '.';
      screen.textContent = displayValue;
      numberKeyHandler();
    }
  });

  plus.addEventListener('click', () => {
    operatorKeyHandler('+');
  });

  minus.addEventListener('click', () => {
    operatorKeyHandler('-');
  });

  timesSign.addEventListener('click', () => {
    operatorKeyHandler('*');
  });

  division.addEventListener('click', () => {
    operatorKeyHandler('/');
  });

  equal.addEventListener('click', () => {
    equalKeyHandler();
  });

  clear.addEventListener('click', () => {
    displayValue = '0';
    screen.textContent = displayValue;
    clearAll();
  });
};

printKeyValue();
