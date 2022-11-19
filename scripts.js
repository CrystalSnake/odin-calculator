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

operate(5, '*', 6);
