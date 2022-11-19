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
      console.log(add(firstOp, secondOp));
      break;
    case '-':
      console.log(subtract(firstOp, secondOp));
      break;
    case '*':
      console.log(multiply(firstOp, secondOp));
      break;
    case '/':
      console.log(divide(firstOp, secondOp));
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
const clear = document.getElementById('clear');

const screen = document.getElementById('print');

let displayValue = 0;

const printKeyValue = function () {
  zero.addEventListener('click', () => {
    displayValue = 0;
    screen.textContent += displayValue;
  });
  one.addEventListener('click', () => {
    displayValue = 1;
    screen.textContent += displayValue;
  });
  two.addEventListener('click', () => {
    displayValue = 2;
    screen.textContent += displayValue;
  });
  three.addEventListener('click', () => {
    displayValue = 3;
    screen.textContent += displayValue;
  });
  four.addEventListener('click', () => {
    displayValue = 4;
    screen.textContent += displayValue;
  });
  five.addEventListener('click', () => {
    displayValue = 5;
    screen.textContent += displayValue;
  });
  six.addEventListener('click', () => {
    displayValue = 6;
    screen.textContent += displayValue;
  });
  seven.addEventListener('click', () => {
    displayValue = 7;
    screen.textContent += displayValue;
  });
  eight.addEventListener('click', () => {
    displayValue = 8;
    screen.textContent += displayValue;
  });
  nine.addEventListener('click', () => {
    displayValue = 9;
    screen.textContent += displayValue;
  });
  dot.addEventListener('click', () => {
    displayValue = '.';
    screen.textContent += displayValue;
  });
  plus.addEventListener('click', () => {
    displayValue = '+';
    screen.textContent += displayValue;
  });
  minus.addEventListener('click', () => {
    displayValue = '-';
    screen.textContent += displayValue;
  });
  timesSign.addEventListener('click', () => {
    displayValue = '*';
    screen.textContent += displayValue;
  });
  division.addEventListener('click', () => {
    displayValue = '/';
    screen.textContent += displayValue;
  });
  clear.addEventListener('click', () => {
    displayValue = '';
    screen.textContent = displayValue;
  });
};

printKeyValue();
