const num = Math.round(Math.random() * 10);
console.log(`Number is ${num}`);
function countDown(num) {
  console.log(num);

  if (num <= 0) {
    return;
  }

  countDown(num - 1);
}

const result = countDown(`${num}`);
console.log(result);
