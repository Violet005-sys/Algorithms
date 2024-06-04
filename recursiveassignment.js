//decision making assignment

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

const num = 5;
console.log(`Fibonacci number at position ${num} is: ${fibonacci(num)}`);

const power = (x, n) => {
  if (n < 1) {
    return n;
  } else if (n === 1) {
    return 1;
  } else {
    return x * power(x, n - 1);
  }
};
