class Calculator {
  constructor(x, y) {
    this.setX(x);
    this.setY(y);
  }

  isValidNumber(num) {
    return typeof num === 'number' && isFinite(num);
  }

  setX = (x) => {
    if (!this.isValidNumber(x)) {
      throw new Error('First value is invalid');
    }
    this.x = x;
  }

  setY = (y) => {
    if (!this.isValidNumber(y)) {
      throw new Error('Second value is invalid');
    }
    this.y = y;
  }

  logSum = () => {
    return this.x + this.y;
  }

  logMul = () => {
    return this.x * this.y;
  }

  logSub = () => {
    return this.x - this.y;
  }

  logDiv = () => {
    if (this.y === 0) {
      throw new Error('You try to divide by zero');
    }
    return this.x / this.y;
  }
}

try {
  const calculator = new Calculator(8, 2);

  const logSumRef = calculator.logSum;
  console.log(logSumRef()); // 10

  const logMulRef = calculator.logMul;
  console.log(calculator.logMul()); // 16

  const logSubRef = calculator.logSub;
  console.log(calculator.logSub()); // 6

  const logDivRef = calculator.logDiv;
  console.log(calculator.logDiv()); // 4

  calculator.setX(10);
  console.log(calculator.logSum()); // 12
  console.log(calculator.logMul()); // 20


  calculator.setY(0);
  console.log(calculator.logDiv()); // 'You try to divide by zero'

} catch (e) {
  console.error(e.message);
}

try {
  const calculator = new Calculator(8, 2);
  calculator.setX('a'); // 'First value is invalid'
} catch (e) {
  console.error(e.message);
}

try {
  const invalidCalculator = new Calculator(8, 'a'); // 'Second value is invalid'
} catch (e) {
  console.error(e.message); 
}