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
const backspace = document.getElementById('backspace');

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

const numberKeyHandler = function (num) {
  if (num != '.' && displayValue === '0') {
    displayValue = num;
  } else if (num === '0' && (displayValue === '' || displayValue != '0')) {
    displayValue += num;
  } else if (num === '.' && !displayValue.includes('.')) {
    displayValue += '.';
  } else if (num != '.') {
    displayValue += num;
  }

  screen.textContent = displayValue;

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
    numberKeyHandler('0');
  });
  one.addEventListener('click', () => {
    numberKeyHandler('1');
  });
  two.addEventListener('click', () => {
    numberKeyHandler('2');
  });
  three.addEventListener('click', () => {
    numberKeyHandler('3');
  });
  four.addEventListener('click', () => {
    numberKeyHandler('4');
  });
  five.addEventListener('click', () => {
    numberKeyHandler('5');
  });
  six.addEventListener('click', () => {
    numberKeyHandler('6');
  });
  seven.addEventListener('click', () => {
    numberKeyHandler('7');
  });
  eight.addEventListener('click', () => {
    numberKeyHandler('8');
  });
  nine.addEventListener('click', () => {
    numberKeyHandler('9');
  });
  dot.addEventListener('click', () => {
    numberKeyHandler('.');
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

  const deleteLast = function (operand) {
    let operString = operand.toString();
    if (operString.length === 1) {
      operand = 0;
    } else {
      operString = operString.slice(0, operString.length - 1);
    }
    displayValue = operString;
    screen.textContent = displayValue;
    return +operString;
  };

  backspace.addEventListener('click', () => {
    if (firstOp && !secondOp) {
      firstOp = deleteLast(firstOp);
    } else if (firstOp && secondOp) {
      secondOp = deleteLast(secondOp);
    }
  });
};

printKeyValue();
