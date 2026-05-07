const number = Math.round(Math.random() * 100);
console.log(`Number is ${number}`);

function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}

function handleNum(num, evenCallback, oddCallback) {
  if (num % 2 === 0) {
    evenCallback();
  } else {
    oddCallback();
  }
}

console.log(handleNum(`${number}`, handleEven, handleOdd))

